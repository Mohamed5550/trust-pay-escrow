import { 
  DollarSign, 
  ShoppingCart, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Plus,
  Eye,
  MessageSquare,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Mock data for demonstration
  const stats = [
    {
      title: "إجمالي المعاملات",
      value: "12",
      icon: ShoppingCart,
      change: "+2 هذا الشهر",
      variant: "default" as const
    },
    {
      title: "في الانتظار",
      value: "3",
      icon: Clock,
      change: "2 تحتاج موافقة",
      variant: "warning" as const
    },
    {
      title: "مكتملة",
      value: "8",
      icon: CheckCircle,
      change: "+1 اليوم",
      variant: "success" as const
    },
    {
      title: "الرصيد المتاح",
      value: "$2,450",
      icon: DollarSign,
      change: "جاهز للسحب",
      variant: "default" as const
    }
  ];

  const recentTransactions = [
    {
      id: "TXN-001",
      title: "بيع هاتف آيفون 14",
      buyer: "أحمد محمد",
      amount: "$850",
      status: "pending_delivery",
      date: "2024-01-15",
      progress: 75
    },
    {
      id: "TXN-002", 
      title: "شراء لابتوب ديل",
      seller: "فاطمة أحمد",
      amount: "$1,200",
      status: "completed",
      date: "2024-01-14",
      progress: 100
    },
    {
      id: "TXN-003",
      title: "بيع ساعة ذكية",
      buyer: "محمد علي",
      amount: "$300",
      status: "pending_payment",
      date: "2024-01-13", 
      progress: 25
    },
    {
      id: "TXN-004",
      title: "شراء كاميرا كانون",
      seller: "سارة خالد",
      amount: "$650",
      status: "dispute",
      date: "2024-01-12",
      progress: 50
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending_payment: { label: "في انتظار الدفع", variant: "secondary" as const },
      pending_delivery: { label: "في انتظار التسليم", variant: "default" as const },
      completed: { label: "مكتملة", variant: "default" as const },
      dispute: { label: "نزاع", variant: "destructive" as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending_payment;
    return <Badge variant={config.variant} className={
      status === 'completed' ? 'bg-success text-success-foreground' :
      status === 'pending_payment' ? 'bg-warning text-warning-foreground' : ''
    }>{config.label}</Badge>;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      pending_payment: "bg-warning",
      pending_delivery: "bg-primary", 
      completed: "bg-success",
      dispute: "bg-destructive"
    };
    return colors[status as keyof typeof colors] || colors.pending_payment;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
            <p className="text-muted-foreground">مرحباً بك! إليك نظرة عامة على معاملاتك</p>
          </div>
          <Button variant="hero" size="lg" asChild>
            <Link to="/create-transaction">
              <Plus className="mr-2 h-5 w-5" />
              معاملة جديدة
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${
                  stat.variant === 'success' ? 'bg-success/10' :
                  stat.variant === 'warning' ? 'bg-warning/10' :
                  'bg-primary/10'
                }`}>
                  <stat.icon className={`h-5 w-5 ${
                    stat.variant === 'success' ? 'text-success' :
                    stat.variant === 'warning' ? 'text-warning' :
                    'text-primary'
                  }`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Transactions */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">المعاملات الأخيرة</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link to="/transactions">عرض الكل</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium">{transaction.title}</h3>
                      {getStatusBadge(transaction.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>المعاملة: {transaction.id}</span>
                      {transaction.buyer && <span>المشتري: {transaction.buyer}</span>}
                      {transaction.seller && <span>البائع: {transaction.seller}</span>}
                      <span>{transaction.date}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-muted-foreground">التقدم:</span>
                        <span className="text-xs font-medium">{transaction.progress}%</span>
                      </div>
                      <Progress value={transaction.progress} className="h-2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="font-semibold text-lg">{transaction.amount}</div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/transaction/${transaction.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer">
            <Link to="/wallet" className="block">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  محفظتي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">إدارة الأموال والسحوبات</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer">
            <Link to="/disputes" className="block">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                  النزاعات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">حل النزاعات والشكاوى</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer">
            <Link to="/analytics" className="block">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-success" />
                  الإحصائيات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">تحليل المعاملات والأرباح</p>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}