import { Compass, Users, Heart, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "تحليل الثقافة التنظيمية",
    description: "نساعدك على فهم ثقافتك الحالية وتحديد الفجوات والفرص من خلال أدوات تشخيصية علمية ومقابلات معمقة.",
    accent: "#9c5748",
    number: "01",
  },
  {
    icon: Users,
    title: "بناء المشاركة الفعّالة",
    description: "نصمم برامج تفاعلية تعزز التواصل والانتماء وتحفز الفرق على المشاركة الإيجابية في رحلة التطوير.",
    accent: "#505248",
    number: "02",
  },
  {
    icon: Heart,
    title: "تحسين الرفاه المؤسسي",
    description: "نعمل على خلق بيئات صحية نفسيًا ومهنيًا، تدعم التوازن بين الحياة والعمل وتحمي من الإرهاق الوظيفي.",
    accent: "#9c5748",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "تطوير القيادات",
    description: "نمكّن القادة من قيادة التغيير بفعالية من خلال تدريب متخصص ومرافقة مستمرة لبناء ثقافة إيجابية.",
    accent: "#505248",
    number: "04",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f2ee]/30 to-white" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-[#9c5748]/10" />
      <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full border-2 border-[#505248]/10" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-[#9c5748]/20" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#505248]/20" />

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#302c30] via-[#9c5748] to-[#505248] bg-clip-text text-transparent">
              خدماتنا
            </span>
          </h2>
          <p className="text-lg text-[#302c30]/70 max-w-2xl mx-auto">
            نقدم حلولًا متكاملة لتطوير بيئة العمل وبناء ثقافة تنظيمية مستدامة
          </p>
        </div>

        {/* Services Grid - Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card with Split Design */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-y-[-4px]">
                  {/* Colored Header Section */}
                  <div
                    className="relative h-32 flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${service.accent} 0%, ${service.accent}dd 100%)` }}
                  >
                    {/* Decorative Circles */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />

                    {/* Icon */}
                    <div className="relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full blur-xl opacity-50 bg-white" />
                        <div className="relative rounded-full p-5 bg-white/20 backdrop-blur-sm border-2 border-white/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[#302c30] leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-base text-[#302c30]/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-2"
                    style={{ background: service.accent }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
