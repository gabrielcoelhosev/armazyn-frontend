import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  variant?: "default" | "success" | "warning" | "danger";
}

export const KPICard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend = "neutral",
  variant = "default" 
}: KPICardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-l-4 border-l-success";
      case "warning":
        return "border-l-4 border-l-warning";
      case "danger":
        return "border-l-4 border-l-destructive";
      default:
        return "border-l-4 border-l-primary";
    }
  };

  const getIconBgColor = () => {
    switch (variant) {
      case "success":
        return "bg-success/10 text-success";
      case "warning":
        return "bg-warning/10 text-warning";
      case "danger":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <Card className={`p-6 transition-all hover:shadow-lg ${getVariantStyles()}`}>
      <div className="flex items-center justify-between">
        <div className="space-y-2 flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className={`p-4 rounded-full ${getIconBgColor()}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
};
