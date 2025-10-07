"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "الرجاء إدخال الاسم";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "الرجاء إدخال البريد الإلكتروني";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "الرجاء إدخال رقم الجوال";
      isValid = false;
    } else if (!/^[0-9+\s()-]{9,}$/.test(formData.phone)) {
      newErrors.phone = "رقم الجوال غير صحيح";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "الرجاء إدخال الرسالة";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "الرسالة قصيرة جدًا (10 أحرف على الأقل)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Rich Background Layers - Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f2ee] via-white to-[#f7f2ee]/50" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#9c5748]/5 via-transparent to-[#505248]/5" />

      {/* Animated Orbs */}
      <div className="absolute top-0 left-[20%] w-96 h-96 bg-gradient-to-br from-[#9c5748]/15 to-[#9c5748]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-[15%] w-80 h-80 bg-gradient-to-tl from-[#505248]/15 to-[#505248]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container px-6 mx-auto max-w-3xl relative z-10">
        <Card className="shadow-2xl border-2 border-[#f7f2ee] bg-white/90 backdrop-blur-md overflow-hidden">
          {/* Gradient Top Border */}
          <div className="h-2 bg-gradient-to-r from-[#9c5748] via-[#505248] to-[#9c5748]" />

          <CardHeader className="text-center pt-8">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#302c30] to-[#9c5748] bg-clip-text text-transparent">
                تواصل معنا
              </span>
            </CardTitle>
            <CardDescription className="text-base text-[#302c30]/70">
              نسعد بالتواصل معك لمناقشة احتياجاتك وكيف يمكننا مساعدتك
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-[#9c5748]/10 border-2 border-[#9c5748]/30 rounded-xl text-[#302c30] text-center font-medium shadow-sm">
                ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium text-[#302c30] flex items-center gap-2">
                  <User className="w-4 h-4 text-[#9c5748]" />
                  الاسم <span className="text-[#9c5748]">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  className={`text-base h-12 bg-white border-2 transition-all duration-300 focus:border-[#9c5748] focus:shadow-lg focus:shadow-[#9c5748]/20 ${errors.name ? "border-[#9c5748]" : "border-[#f7f2ee]"}`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-[#9c5748] font-medium">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium text-[#302c30] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#9c5748]" />
                  البريد الإلكتروني <span className="text-[#9c5748]">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  className={`text-base h-12 bg-white border-2 transition-all duration-300 focus:border-[#9c5748] focus:shadow-lg focus:shadow-[#9c5748]/20 ${errors.email ? "border-[#9c5748]" : "border-[#f7f2ee]"}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-[#9c5748] font-medium">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium text-[#302c30] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#9c5748]" />
                  رقم الجوال <span className="text-[#9c5748]">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 5X XXX XXXX"
                  className={`text-base h-12 bg-white border-2 transition-all duration-300 focus:border-[#9c5748] focus:shadow-lg focus:shadow-[#9c5748]/20 ${errors.phone ? "border-[#9c5748]" : "border-[#f7f2ee]"}`}
                  disabled={isSubmitting}
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-sm text-[#9c5748] font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium text-[#302c30] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#9c5748]" />
                  الرسالة <span className="text-[#9c5748]">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="أخبرنا عن احتياجاتك وكيف يمكننا مساعدتك..."
                  rows={6}
                  className={`text-base resize-none bg-white border-2 transition-all duration-300 focus:border-[#9c5748] focus:shadow-lg focus:shadow-[#9c5748]/20 ${errors.message ? "border-[#9c5748]" : "border-[#f7f2ee]"}`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-[#9c5748] font-medium">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full text-base font-semibold h-14 bg-[#9c5748] hover:bg-[#9c5748]/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    إرسال الرسالة
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
