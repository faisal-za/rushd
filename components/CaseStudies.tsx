import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    title: "شركة تقنية كبرى",
    result: "تحسين رضا الموظفين بنسبة 42% خلال 6 أشهر من خلال إعادة تصميم برامج المشاركة والتواصل الداخلي.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    title: "شركة ناشئة في قطاع التجارة الإلكترونية",
    result: "بناء ثقافة تنظيمية متماسكة ساهمت في خفض معدل دوران الموظفين من 35% إلى 12% خلال عام واحد.",
  },
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    title: "مؤسسة غير ربحية",
    result: "زيادة إنتاجية الفرق بنسبة 38% وتحسين مؤشرات الرفاه النفسي من خلال برامج التوازن والمرونة.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224311-beee460c201a?w=400&h=300&fit=crop",
    title: "مؤسسة حكومية",
    result: "تطوير ثقافة الابتكار والمبادرة، مع رفع مؤشر المشاركة من 54% إلى 81% خلال 8 أشهر.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    title: "شركة استشارية متوسطة",
    result: "تحسين بيئة العمل عن بُعد وبناء ثقافة تعاون رقمية أدت إلى زيادة رضا العملاء بنسبة 29%.",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    title: "مجموعة صناعية",
    result: "تطوير القيادات الوسطى وبناء خطة تعاقب وظيفي ساهمت في تقليل وقت سد الوظائف القيادية بنسبة 60%.",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      {/* Rich Background Layers - Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f2ee] via-white to-[#f7f2ee]/50" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#9c5748]/5 via-transparent to-[#505248]/5" />

      {/* Animated Orbs */}
      <div className="absolute top-10 left-[5%] w-80 h-80 bg-gradient-to-br from-[#9c5748]/10 to-[#9c5748]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-gradient-to-tl from-[#505248]/10 to-[#505248]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#302c30] via-[#9c5748] to-[#505248] bg-clip-text text-transparent">
              قصص النجاح
            </span>
          </h2>
          <p className="text-lg text-[#302c30]/70 max-w-2xl mx-auto">
            نتائج ملموسة حققناها مع شركائنا في مختلف القطاعات
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white border-2 border-[#f7f2ee] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9c5748] to-[#505248]" />

              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#f7f2ee]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#302c30]/60 to-transparent" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-[#302c30] leading-snug">
                  {study.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#9c5748]" />
                  <p className="text-sm text-[#302c30]/70 leading-relaxed">
                    {study.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
