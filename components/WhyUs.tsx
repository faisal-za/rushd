import { FlaskConical, MapPin, Target } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "نهج علمي",
    description: "نعتمد على البحث العلمي والأدوات المثبتة في علم النفس التنظيمي والإدارة الحديثة لضمان نتائج قابلة للقياس والتطبيق.",
  },
  {
    icon: MapPin,
    title: "خبرة سعودية",
    description: "نفهم السياق المحلي والثقافة السعودية بعمق، ونصمم حلولًا تتماشى مع رؤية 2030 وتحديات السوق المحلي.",
  },
  {
    icon: Target,
    title: "نتائج مستدامة",
    description: "لا نقدم حلولًا سريعة، بل نبني معكم تغييرًا حقيقيًا ومستدامًا يدوم ويحقق تأثيرًا ملموسًا على المدى الطويل.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Rich Background Layers - Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f2ee]/30 to-white" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9c5748]/5 via-transparent to-[#505248]/5" />

      {/* Decorative Orbs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 bg-gradient-to-br from-[#9c5748]/10 to-[#9c5748]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-gradient-to-tl from-[#505248]/10 to-[#505248]/5 rounded-full blur-3xl" />

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#302c30] via-[#9c5748] to-[#505248] bg-clip-text text-transparent">
              لماذا رُشد؟
            </span>
          </h2>
          <p className="text-lg text-[#302c30]/70 max-w-2xl mx-auto">
            نجمع بين العلم والخبرة المحلية لتحقيق تحول حقيقي ومستدام
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#9c5748]/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />

                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#9c5748]/20 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-full bg-[#9c5748] shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-[#302c30] mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-[#302c30]/70 leading-relaxed max-w-sm">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
