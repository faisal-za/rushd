import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Building2, HeartHandshake, Landmark, Network, RefreshCw } from "lucide-react";

const useCases = [
  {
    icon: Rocket,
    title: "الشركات الناشئة",
    description: "بناء ثقافة تنظيمية قوية منذ البداية لتحقيق نمو مستدام وجذب أفضل المواهب.",
  },
  {
    icon: Building2,
    title: "المؤسسات الكبرى",
    description: "تحويل الثقافة التنظيمية وتطوير بيئة العمل لمواكبة التغيرات والتحديات الحديثة.",
  },
  {
    icon: HeartHandshake,
    title: "القطاع غير الربحي",
    description: "تعزيز رفاه الفرق ورفع مستوى المشاركة لتحقيق تأثير اجتماعي أكبر وأعمق.",
  },
  {
    icon: Landmark,
    title: "المؤسسات الحكومية",
    description: "تحديث بيئة العمل وتطبيق أفضل الممارسات لبناء ثقافة تنظيمية حديثة وفعّالة.",
  },
  {
    icon: Network,
    title: "الفرق الموزّعة",
    description: "خلق ثقافة تعاون قوية في بيئات العمل عن بُعد والهجينة بأدوات وأساليب مبتكرة.",
  },
  {
    icon: RefreshCw,
    title: "مبادرات التحول",
    description: "مرافقة المؤسسات في رحلة التحول الرقمي والتنظيمي لضمان نجاح واستدامة التغيير.",
  },
];

export function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            من نخدم
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نعمل مع مختلف القطاعات والمؤسسات لتحقيق بيئات عمل متطورة
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-border/50"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex p-2.5 rounded-lg bg-accent text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
