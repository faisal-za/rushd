import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    image: "/2.svg",
    title: "المركز الوطني لتعزيز الصحة النفسية | التحول المؤسسي",
    result: "نفّذت رُشد مشروع تطوير شامل لثقافة العمل ضمن مبادرات التحول المؤسسي، شمل قياس مستوى النضج التنظيمي وتصميم إطار جديد لتجربة الموظف بما يعزز الارتباط والولاء.",
  },
  {
    image: "/3.svg",
    title: "شركة سِجل | الرفاه المؤسسي",
    result: "تعاونت رُشد مع العميل في تطوير برامج الرفاه المؤسسي والتوازن الوظيفي، تضمنت ورش عمل تفاعلية واستبيانات متقدمة لقياس الرضا وتحفيز المنسوبين.",
  },
  {
    image: "/4.svg",
    title: "مدينة الملك عبد العزيز للعلوم والتقنية | الارتباط الوظيفي",
    result: "شاركت رُشد في بناء برنامج قياس الارتباط الوظيفي وتطوير القيادة الداخلية للعميل، مما ساهم في رفع مؤشرات المشاركة وتحسين تجربة العمل الداخلية.",
  },
  {
    image: "/5.svg",
    title: "شركة كادن للإستثمار | الصحة النفسية",
    result: "قدّمت رُشد خدمات استشارية متكاملة لتحسين بيئة العمل بحسب افضل الممارسات، ركزت على خفض الإرهاق الوظيفي وتعزيز الصحة النفسية للعاملين في الخطوط الأمامية.",
  },
  {
    image: "/6.svg",
    title: "الهيئة العامة للمنشآت الصغيرة والمتوسطة | الثقافة المرنة",
    result: "عملت رُشد على تصميم ثقافة تنظيمية مرنة تتناسب مع بيئة العمل لدى العميل، من خلال تطوير سياسات عمل حديثة وبرامج تمكين للفرق التقنية والإبداعية.",
  },
  {
    image: "/7.svg",
    title: "شركة سلاسة | إعادة الهيكلة الثقافية",
    result: "نفذت رُشد مشروعًا لتحليل الثقافة الداخلية وإعادة تصميم آليات التواصل والقيادة، مما ساهم في خلق بيئة عمل أكثر انسجامًا ووضوحًا في الأدوار والمسؤوليات.",
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
                <div className="flex flex-row gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0 text-[#9c5748]" />
                  <p className="text-[#302c30]/70 leading-relaxed">
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
