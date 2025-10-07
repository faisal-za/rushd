import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "رُشد | استشارات تطوير بيئة العمل والثقافة التنظيمية",
  description: "رُشد هي شركة استشارية سعودية متخصصة في تطوير بيئة العمل والثقافة التنظيمية. نعمل مع القادة والمؤسسات لخلق بيئات عمل ناضجة، متوازنة، وإنسانية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
