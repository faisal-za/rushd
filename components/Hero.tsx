import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Rich Gradient Background Layers - Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f2ee] via-[#faf8f6] to-white" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9c5748]/5 via-transparent to-[#505248]/5" />

      {/* Animated Gradient Orbs - Brand Colors */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-gradient-to-br from-[#9c5748]/15 to-[#9c5748]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-gradient-to-tr from-[#505248]/15 to-[#505248]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#f7f2ee]/30 via-[#9c5748]/5 to-[#505248]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 px-6 py-24 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Process Flow Graphic */}
          <div className="mb-8 relative w-full max-w-2xl h-24 flex items-center justify-center">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9c5748]/5 to-transparent blur-2xl" />

            {/* Process Steps */}
            <div className="relative z-10 flex items-center justify-center w-full max-w-xl">
              {/* Step 1: Result (Success) */}
              <div className="w-20 h-20 rounded-full bg-[#505248]/20 border-4 border-[#505248] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                <svg className="w-10 h-10 text-[#505248]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Arrow 1 */}
              <div className="flex-1 flex items-center px-4">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#505248] to-[#9c5748] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#9c5748]" />
                </div>
              </div>

              {/* Step 2: Process (Working Together) */}
              <div className="w-24 h-24 rounded-full bg-[#9c5748]/20 border-4 border-[#9c5748] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 relative flex-shrink-0">
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 text-[#9c5748]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <svg className="w-12 h-12 text-[#9c5748]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              {/* Arrow 2 */}
              <div className="flex-1 flex items-center px-4">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#9c5748] to-[#302c30] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#302c30]" />
                </div>
              </div>

              {/* Step 3: Current State (Problem) */}
              <div className="w-20 h-20 rounded-full bg-[#302c30]/20 border-4 border-[#302c30] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                <svg className="w-10 h-10 text-[#302c30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Headline with Brand Gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            <span className="bg-gradient-to-r from-[#302c30] via-[#9c5748] to-[#505248] bg-clip-text text-transparent">
              نصنع ثقافة عمل ملهمة
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#302c30]/80 leading-relaxed max-w-3xl">
            رُشد هي شركة استشارية سعودية متخصصة في تطوير بيئة العمل والثقافة التنظيمية. نعمل مع القادة والمؤسسات لخلق بيئات عمل ناضجة، متوازنة، وإنسانية — حيث يزدهر الأفراد وتنمو المنظمات.
          </p>

          {/* CTA Button with Icon */}
          <div className="mt-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-[#9c5748] to-[#9c5748]/90 hover:from-[#9c5748]/90 hover:to-[#9c5748] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group text-white"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                تواصل معنا
              </a>
            </Button>
          </div>

          {/* Decorative Stats/Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9c5748] to-[#9c5748]/80 bg-clip-text text-transparent">+50</div>
              <div className="text-sm text-[#302c30]/70 mt-1">مؤسسة شريكة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#505248] to-[#505248]/80 bg-clip-text text-transparent">+100</div>
              <div className="text-sm text-[#302c30]/70 mt-1">مشروع ناجح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9c5748] to-[#505248] bg-clip-text text-transparent">95%</div>
              <div className="text-sm text-[#302c30]/70 mt-1">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
