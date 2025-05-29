import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// Define the form schema using zod
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const { toast } = useToast();
  
  // Initialize react-hook-form with zod resolver
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      privacyPolicy: false,
    },
  });
  
  // Form submission handler
  const onSubmit = (data: NewsletterFormValues) => {
    toast({
      title: "Subscription successful!",
      description: `Thank you for subscribing with ${data.email}. You'll now receive our latest updates.`,
    });
    
    form.reset();
  };
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medium mb-4">Join the GOLOME Community</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Subscribe to receive exclusive content, early access to collections, and invitations to our events.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormControl>
                      <Input 
                        placeholder="Enter your email address" 
                        {...field} 
                        className="w-full px-4 py-3 border-b border-black focus:outline-none bg-transparent rounded-none" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="privacyPolicy"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 mb-6">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                        id="privacy-policy" 
                        className="border border-black focus:outline-none"
                      />
                    </FormControl>
                    <FormLabel htmlFor="privacy-policy" className="text-sm">
                      I agree to the <a href="#" className="underline">Privacy Policy</a>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-black text-white py-6 uppercase tracking-wider hover:bg-gray-900 transition duration-300 rounded-none"
              >
                Subscribe
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
