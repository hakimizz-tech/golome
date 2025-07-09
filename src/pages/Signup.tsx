import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { signupSchema, type SignupFormData } from '@/lib/schema';
// import { apiRequest } from '@/lib/queryClient';
import { apiRequest } from '@/lib/queryClient';
// import Stepper from '@/blocks/Components/Stepper/Stepper';

// Import model images - randomly select one (same as login)
import model1 from '@/assets/auth-images/american-beauti-afro-adult-african.jpg';
import model2 from '@/assets/auth-images/beautiful-african-model-with-perfect-curly-hairs-elegant-orange-blouse-silk-pants-sitting-vintage-chair-beige-wall.jpg';
import model3 from '@/assets/auth-images/front-view-woman-holding-purses.jpg';


// import icons
import Search from '@/assets/icons/search.png'
import Facebook from '@/assets/icons/facebook.png'
import Microsoft from '@/assets/icons/microsoft.png'
import HeaderPage from './HeaderPage';

const modelImages = [model1, model2, model3];
const randomModelImage = modelImages[Math.floor(Math.random() * modelImages.length)];



export default function Signup() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const socialbuttons = [
      {
          classname : "py-3 border-gray-300",
          variant : "outline",
          name: 'Google',
          icon: Search,
          onClick: () => toast({ title: "Coming soon", description: "Google login will be available soon." }),
      },
      {
          classname : "py-3 border-gray-300",
          variant : "outline",
          name: 'Microsoft',
          icon: Microsoft,
          onClick: () => toast({ title: "Coming soon", description: "Microsoft login will be available soon." }),
      },
      {
          classname : "py-3 border-gray-300",
          variant : "outline",
          name: 'Facebook',
          icon: Facebook,
          onClick: () => toast({ title: "Coming soon", description: "Facebook login will be available soon." }),
      },
  ]

  const signupMutation = useMutation({
    mutationFn: (data: SignupFormData) => {
      const { confirmPassword, ...signupData } = data;
      return apiRequest('POST', '/api/auth/signup', signupData);
    },
    onSuccess: () => {
      toast({
        title: "Account created successfully",
        description: "Welcome to GOLOME! You can now log in.",
      });
      navigate('/login');
    },
    onError: (error: any) => {
      toast({
        title: "Signup failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutate(data);
  };

  return (
    <section>
       <HeaderPage className='backdrop-blur-sm bg-white/30'/>
         <div className="min-h-screen bg-white flex flex-row relative text-black">
      {/* Image Section - Left Side */}
      <div className="hidden lg:flex lg:w-1/2 fixed overflow-hidden h-screen">
        <img
          src={randomModelImage}
          alt="GOLOME Fashion Model"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rose-50/20"></div> */}
      </div>

      {/* Mobile Background Image */}
      <div className="lg:hidden fixed inset-0 z-0">
        <img
          src={randomModelImage}
          alt="GOLOME Fashion Model"
          className="w-full h-full object-cover opacity-75"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 to-amber-50/80"></div> */}
      </div>

      {/* Form Section - Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 absolute right-0 z-10 ">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            {/* <h1 className="text-3xl font-bold mb-2">Signup</h1> */}
            {/* <p >Create account to access our services</p> */}
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Fields - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">First Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="First name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" font-medium">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Last name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-medium">Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Create a password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password Field */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-medium">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={signupMutation.isPending}
                className="w-full bg-[#ff6900] text-white hover:bg-[#e55a00]  font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
              >
                {signupMutation.isPending ? 'Creating account...' : 'Create an account'}
              </Button>
            </form>
          </Form>

           <div className="text-center mt-2">
            <p >
              Already have an account?{' '}
              <Link href="/login">
                <span className=" font-medium hover:text-[#e55a00] text-[#ff6900] underline cursor-pointer">
                  log in
                </span>
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4  text-sm">or continue with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-6">
                {socialbuttons.map((button, index) => (
                    <Button key={index}
                    variant="outline"
                    className={button.classname}
                    onClick={button.onClick}>
                    <div className="flex items-center justify-center space-x-2">
                      <img src={button.icon} alt={button.name} className="w-5 h-5" />
                      <span className="text-sm">{button.name}</span>
                    </div>
                    </Button>
                ))}
            </div>

          {/* Terms and Footer */}
          <div className="text-center mb-4 text-black">
            <p className="text-sm ">
              By registering, you agree to our{''}
               <Link href="#">
                <span className=" font-medium hover:text-[#e55a00] text-[#ff6900] underline cursor-pointer">
                  Terms of Service
                </span>
              </Link> and you acknowledge
              that you have read and understand our {''}
              <Link href="#">
                <span className=" font-medium hover:text-[#e55a00] text-[#ff6900] underline cursor-pointer">
                  Privacy Policy
                </span>
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
    </section>
  )
   
}