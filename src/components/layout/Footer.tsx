import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const links = {
    company: [
      { name: "عن المنصة", href: "/about" },
      { name: "كيف نعمل", href: "/how-it-works" },
      { name: "الأسئلة الشائعة", href: "/faq" },
      { name: "اتصل بنا", href: "/contact" },
    ],
    legal: [
      { name: "شروط الاستخدام", href: "/terms" },
      { name: "سياسة الخصوصية", href: "/privacy" },
      { name: "سياسة الاسترداد", href: "/refund" },
      { name: "معلومات قانونية", href: "/legal" },
    ],
    support: [
      { name: "مركز المساعدة", href: "/help" },
      { name: "الدعم الفني", href: "/support" },
      { name: "حل النزاعات", href: "/disputes" },
      { name: "التقييمات", href: "/reviews" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">وسيط آمن</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              منصة الوساطة المالية الآمنة التي تضمن حقوق البائعين والمشترين في جميع المعاملات التجارية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>support@escrow-platform.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">الشركة</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">القانونية</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">الدعم</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 وسيط آمن. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
              <span className="text-primary-foreground/60 text-sm">مدعوم بتقنية</span>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-medium">Stripe</span>
                <span className="text-primary-foreground/60">•</span>
                <span className="text-sm font-medium">256-bit SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}