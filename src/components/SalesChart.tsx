import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface SalesChartProps {
  data: Array<{
    semana: string;
    vendas: number;
    estoque: number;
  }>;
}

export const SalesChart = ({ data }: SalesChartProps) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Tendência de Vendas e Estoque</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="semana" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="vendas" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            name="Vendas Previstas"
            dot={{ fill: 'hsl(var(--primary))' }}
          />
          <Line 
            type="monotone" 
            dataKey="estoque" 
            stroke="hsl(var(--success))" 
            strokeWidth={2}
            name="Estoque Projetado"
            dot={{ fill: 'hsl(var(--success))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
