import { useState } from "react";
import { motion } from "framer-motion";
import LiquidOrb from "./liquid-orb";
import PulseRings from "./pulse-rings";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "ghalilpatersonjones@gmail.com",
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+44 7394173709",
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "London, UK",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/hightower111" },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden liquid-gradient"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <LiquidOrb
          size="w-24 h-24"
          position="absolute top-40 left-20"
          delay={0.5}
          duration={18}
        />
        <PulseRings position="bottom-20 right-10" delay={1.5} count={2} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's
            discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                    <i className={`${info.icon} text-black text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-gray-300">{info.label}</p>
                    <p className="text-lg">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-400 hover:text-black rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-gray-900 border-gray-800 focus:border-cyan-400"
                            placeholder="John"
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
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-gray-900 border-gray-800 focus:border-cyan-400"
                            placeholder="Doe"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-gray-900 border-gray-800 focus:border-cyan-400"
                          placeholder="john@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-gray-900 border-gray-800 focus:border-cyan-400"
                          placeholder="Your Company"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-gray-900 border-gray-800 focus:border-cyan-400">
                            <SelectValue placeholder="Select a project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="mobile-app">Mobile App</SelectItem>
                          <SelectItem value="ui-ux-design">
                            UI/UX Design
                          </SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="bg-gray-900 border-gray-800 focus:border-cyan-400 resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-black py-4 text-lg font-semibold animate-glow hover:scale-[1.02] transition-transform"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
