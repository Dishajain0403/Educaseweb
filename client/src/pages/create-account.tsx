import { useCallback } from "react";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Simple validation schema
const createAccountSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(6, "Phone number is required"),
  isAgency: z.boolean().default(true),
  company: z.string().optional(),
});

type CreateAccountFormData = z.infer<typeof createAccountSchema>;

export default function CreateAccount() {
  const [_, navigate] = useLocation();
  
  const form = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      company: "",
      isAgency: true,
    },
  });
  
  // Static navigation with no API calls
  const onSubmit = useCallback((data: CreateAccountFormData) => {
    // Simply navigate to account settings page
    navigate("/account-settings");
  }, [navigate]);
  
  return (
    <div className="app-page">
      <h1 className="text-2xl font-bold text-foreground mb-6">Create your PopX account</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Full Name*</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Marry Doe"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Phone number*</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Marry Doe"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Email address*</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Marry Doe"
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
                <FormLabel className="form-label">Password*</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    type="password"
                    placeholder="Marry Doe"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Company name</FormLabel>
                <FormControl>
                  <Input
                    className="form-input"
                    placeholder="Marry Doe"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="isAgency"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Are you an Agency?*</FormLabel>
                <div className="flex mt-2">
                  <label className="radio-container">
                    <span className="radio-label">Yes</span>
                    <input 
                      type="radio" 
                      checked={field.value === true}
                      onChange={() => field.onChange(true)}
                    />
                    <span className="radio-checkmark"></span>
                  </label>
                  <label className="radio-container">
                    <span className="radio-label">No</span>
                    <input 
                      type="radio" 
                      checked={field.value === false}
                      onChange={() => field.onChange(false)}
                    />
                    <span className="radio-checkmark"></span>
                  </label>
                </div>
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md font-medium h-12 mt-6"
          >
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
