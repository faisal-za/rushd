import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#302c30] via-[#302c30] to-[#505248] text-white">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9c5748]/20 via-transparent to-[#505248]/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#9c5748]/10 to-[#9c5748]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#505248]/10 to-[#505248]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="bg-[#f7f2ee] rounded-lg inline-block">
              <Image
                src="/logo.svg"
                alt="رُشد"
                width={180}
                height={60}
           
              />
            </div>
            <p className="text-[#f7f2ee]/80 leading-relaxed max-w-sm">
              شريكك في بناء بيئات عمل ناضجة ومستدامة من خلال نهج علمي وخبرة محلية عميقة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#9c5748]">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-[#f7f2ee]/80 hover:text-[#9c5748] transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#f7f2ee]/80 hover:text-[#9c5748] transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-[#f7f2ee]/80 hover:text-[#9c5748] transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  قصص النجاح
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-[#f7f2ee]/80 hover:text-[#9c5748] transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  لماذا رُشد
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#f7f2ee]/80 hover:text-[#9c5748] transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#f7f2ee]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#f7f2ee]/60">
            <p>© {currentYear} رُشد. جميع الحقوق محفوظة.</p>
            <p className="flex items-center gap-2">
              <span>صُنع بـ</span>
              <span className="text-[#9c5748]">♥</span>
              <span>في المملكة العربية السعودية</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
