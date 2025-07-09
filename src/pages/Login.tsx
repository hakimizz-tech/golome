/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
// import { loginSchema, type LoginFormData } from '@shared/schema';
import { loginSchema, type LoginFormData } from '@/lib/schema';
import { apiRequest } from '@/lib/queryClient';

// Import model images - randomly select one
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

export default function Login() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  
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

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginFormData) => apiRequest('POST', '/api/auth/login', data),
    onSuccess: () => {
      toast({
        title: "Login successful",
        description: "Welcome back to GOLOME!",
      });
      navigate('/');
    },
    onError: (error: any) => {
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <section>
        {/* <HeaderPage className='backdrop-blur-sm bg-white/30' /> */}
        <HeaderPage className='backdrop-blur-sm bg-white/30'/>

        <div className="min-h-screen bg-white flex text-black">
      {/* Image Section - Left Side */}
      <div className=" hidden lg:flex lg:w-1/2 relative overflow-hidden h-screen">
        <img
          src={randomModelImage}
          alt="GOLOME Fashion Model"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rose-50/20"></div> */}
      </div>

      {/* Mobile Background Image */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src={randomModelImage}
          alt="GOLOME Fashion Model"
          className="w-full h-full object-cover opacity-75"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 to-amber-50/80"></div> */}
      </div>

      {/* Form Section - Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-10 h-screen -m-0">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            {/* <h1 className="text-3xl font-bold  mb-2">Log In</h1>
            <p className="">Enter your credentials to access your account</p> */}
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        placeholder="Enter your password"
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
                disabled={loginMutation.isPending}
                className="w-full bg-[#ff6900] text-white hover:bg-[#e55a00]  font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
              >
                {loginMutation.isPending ? 'Logging in...' : 'Log In'}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="my-8 flex items-center">
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

          {/* Footer */}
          <div className="text-center">
                      <p >
                        Do not have an account?{' '}
                        <Link href="/signup">
                          <span className=" font-medium hover:text-[#e55a00] text-[#ff6900] underline cursor-pointer">
                            signup
                          </span>
                        </Link>
                      </p>
            </div>
        </div>
      </div>
    </div>
    {/* <AnimatedFooter/> */}
    </section>
  );
}