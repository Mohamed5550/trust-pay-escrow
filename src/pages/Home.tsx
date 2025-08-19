import { 
  Shield, 
  CreditCard, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Star,
  ArrowRight,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "حماية مضمونة",
      description: "أموالك محفوظة بتقنية التشفير المتقدمة حتى إتمام التسليم بنجاح"
    },
    {
      icon: CreditCard,
      title: "دفع آمن",
      description: "ندعم جميع وسائل الدفع العالمية مع أعلى معايير الأمان"
    },
    {
      icon: CheckCircle,
      title: "تأكيد التسليم",
      description: "نظام ذكي لتأكيد التسليم من الطرفين قبل تحويل الأموال"
    },
    {
      icon: Users,
      title: "حل النزاعات",
      description: "فريق متخصص لحل أي نزاع بسرعة وعدالة تامة"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "إنشاء المعاملة",
      description: "المشتري ينشئ معاملة جديدة ويحدد تفاصيل الصفقة"
    },
    {
      number: "02", 
      title: "الدفع الآمن",
      description: "يتم حجز المبلغ في محفظة آمنة حتى التأكد من التسليم"
    },
    {
      number: "03",
      title: "تأكيد التسليم", 
      description: "البائع يؤكد التسليم والمشتري يوافق على استلام الطلب"
    },
    {
      number: "04",
      title: "تحويل الأموال",
      description: "تحويل الأموال تلقائياً لحساب البائع بعد تأكيد الاستلام"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "تاجر إلكتروني",
      content: "منصة رائعة وفرت لي الأمان في جميع معاملاتي التجارية. الدعم ممتاز والخدمة سريعة.",
      rating: 5
    },
    {
      name: "فاطمة العلي",
      role: "مشترية",
      content: "أشعر بالثقة التامة عند الشراء عبر هذه المنصة. المال محفوظ حتى استلام المنتج.",
      rating: 5
    },
    {
      name: "خالد السعد",
      role: "صاحب متجر",
      content: "نظام الوساطة المالية هذا غير طريقة عملي. لا مزيد من القلق حول المدفوعات.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              منصة الوساطة المالية رقم 1 في المنطقة
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              معاملات آمنة
              <span className="block text-success-light">بثقة مطلقة</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              نضمن حقوق البائعين والمشترين في جميع المعاملات التجارية
              <br />
              من خلال نظام الوساطة المالية المتطور
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">
                  ابدأ الآن مجاناً
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <PlayCircle className="mr-2 h-5 w-5" />
                شاهد كيف نعمل
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار وسيط آمن؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نوفر بيئة آمنة ومحمية لجميع معاملاتك التجارية بأحدث التقنيات
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card border-border/50 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف نعمل؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              عملية بسيطة وآمنة لضمان حقوق جميع الأطراف
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-soft">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-primary mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+50,000</div>
              <div className="text-primary-foreground/80">معاملة آمنة</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+15,000</div>
              <div className="text-primary-foreground/80">مستخدم راضٍ</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">معدل الأمان</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول عملاؤنا؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              آراء حقيقية من مستخدمين راضين عن خدماتنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ابدأ معاملاتك الآمنة اليوم
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            انضم إلى آلاف المستخدمين الذين يثقون بنا في معاملاتهم اليومية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">إنشاء حساب مجاني</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">تحدث معنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}