import { useState } from "react";
import { Shield, Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "buyer",
    agreeToTerms: false,
    agreeToMarketing: false
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "خطأ في كلمة المرور",
        description: "كلمة المرور وتأكيد كلمة المرور غير متطابقتين",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "الموافقة على الشروط",
        description: "يجب الموافقة على شروط الاستخدام للمتابعة",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    // Mock registration - in real app, this would call your API
    setTimeout(() => {
      toast({
        title: "تم إنشاء الحساب بنجاح",
        description: "مرحباً بك في منصة وسيط آمن! يمكنك الآن تسجيل الدخول",
      });
      navigate("/login");
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-success/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 rtl:space-x-reverse">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-elevated">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">وسيط آمن</span>
          </Link>
        </div>

        <Card className="shadow-elevated border-0">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">إنشاء حساب جديد</CardTitle>
            <p className="text-muted-foreground">
              انضم إلى منصة الوساطة المالية الآمنة
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">الاسم الكامل</Label>
                <div className="relative">
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="محمد أحمد"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="h-12 pl-12"
                    required
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 pl-12"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              {/* User Type */}
              <div className="space-y-3">
                <Label>نوع الحساب</Label>
                <RadioGroup
                  value={formData.userType}
                  onValueChange={(value) => handleInputChange("userType", value)}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="buyer" id="buyer" />
                    <Label htmlFor="buyer" className="cursor-pointer">مشتري</Label>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="seller" id="seller" />
                    <Label htmlFor="seller" className="cursor-pointer">بائع</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-12 px-12"
                    required
                  />
                  <Lock className="absolute left-12 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="h-12 px-12"
                    required
                  />
                  <Lock className="absolute left-12 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Terms and Marketing */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2 rtl:space-x-reverse">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                    أوافق على{" "}
                    <Link to="/terms" className="text-primary hover:text-primary/80 transition-colors">
                      شروط الاستخدام
                    </Link>
                    {" "}و{" "}
                    <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                      سياسة الخصوصية
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-2 rtl:space-x-reverse">
                  <Checkbox
                    id="marketing"
                    checked={formData.agreeToMarketing}
                    onCheckedChange={(checked) => handleInputChange("agreeToMarketing", checked as boolean)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="marketing" className="text-sm cursor-pointer leading-relaxed">
                    أوافق على تلقي النشرات الإخبارية والعروض الخاصة
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full h-12"
                disabled={loading}
              >
                {loading ? "جار إنشاء الحساب..." : "إنشاء حساب"}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">أو</span>
                </div>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-muted-foreground">
                  لديك حساب بالفعل؟{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    تسجيل الدخول
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <Shield className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-success mb-1">بياناتك آمنة معنا</p>
              <p className="text-muted-foreground">
                جميع المعلومات الشخصية محمية بتشفير متقدم ولن يتم مشاركتها مع أطراف ثالثة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}