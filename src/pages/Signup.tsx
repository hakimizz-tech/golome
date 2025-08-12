import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { signupSchema, type SignupFormData } from '@/lib/schema';
import { apiRequest } from '@/lib/queryClient';
import { OptimizedImage } from '@/components/optimized-image';
import { AUTH_IMAGES, ICONS } from '@/lib/image-map';
import HeaderPage from './HeaderPage';

// Map auth images to their public IDs
const modelPublicIds = [
  AUTH_IMAGES.africanWoman,
  AUTH_IMAGES.curlyhairModel,
  AUTH_IMAGES.purseHolder
];
const randomModelPublicId = modelPublicIds[Math.floor(Math.random() * modelPublicIds.length)];

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
      classname: "py-3 border-gray-300",
      variant: "outline",
      name: 'Google',
      iconId: ICONS.search,
      onClick: () => toast({ title: "Coming soon", description: "Google login will be available soon." }),
    },
    {
      classname: "py-3 border-gray-300",
      variant: "outline",
      name: 'Microsoft',
      iconId: ICONS.microsoft,
      onClick: () => toast({ title: "Coming soon", description: "Microsoft login will be available soon." }),
    },
    {
      classname: "py-3 border-gray-300",
      variant: "outline",
      name: 'Facebook',
      iconId: ICONS.facebook,
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
          <OptimizedImage
            publicId={randomModelPublicId}
            alt="GOLOME Fashion Model"
            className="w-full h-full object-cover"
            width={1200}
            height={1600}
            highQuality={true}
          />
        </div>

        {/* Mobile Background Image */}
        <div className="lg:hidden fixed inset-0 z-0">
          <OptimizedImage
            publicId={randomModelPublicId}
            alt="GOLOME Fashion Model"
            className="w-full h-full object-cover opacity-75"
            width={600}
            height={800}
          />
        </div>

        {/* Form Section - Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 absolute right-0 z-10 ">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8">
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
                  className="w-full bg-[#ff6900] text-white hover:bg-[#e55a00] font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
                >
                  {signupMutation.isPending ? 'Creating account...' : 'Create an account'}
                </Button>
              </form>
            </Form>

            <div className="text-center mt-2">
              <p>
                Already have an account?{' '}
                <Link href="/login">
                  <span className="font-medium hover:text-[#e55a00] text-[#ff6900] underline cursor-pointer">
                    log in
                  </span>
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm">or continue with</span>
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
                    <OptimizedImage
                      publicId={button.iconId}
                      alt={button.name}
                      className="w-5 h-5"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm">{button.name}</span>
                  </div>
                </Button>
              ))}
            </div>

            {/* Terms and Footer */}
            <div className="text-center mb-4 text-black">
              <p className="text-sm">
                By registering, you agree to our{''}
                <Link href="#">
                  <span className="font-medium hover:text-[#e55a00] text-[#ff6900] underline cursor-pointer">
                    Terms of Service
                  </span>
                </Link> and you acknowledge
                that you have read and understand our {''}
                <Link href="#">
                  <span className="font-medium hover:text-[#e55a00] text-[#ff6900] underline cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}