import { useCallback } from "react";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [_, navigate] = useLocation();
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  // Simplified static navigation with no API call
  const onSubmit = useCallback((data: LoginFormData) => {
    // Simply navigate to the account settings page
    navigate("/account-settings");
  }, [navigate]);
  
  return (
    <div className="app-page">
      <h1 className="text-2xl font-bold text-foreground mb-2">Signin to your PopX account</h1>
      <p className="text-muted-foreground mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Enter email address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Password</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-gray-300 text-white py-3 rounded-md font-medium h-12 mt-6"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
