import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

export interface Product {
  id: number;
  nome: string;
  estoqueAtual: number;
  previsao: {
    semana1: number;
    semana2: number;
    semana3: number;
    semana4: number;
  };
  unidade: string;
  estoqueZerandoEm: string;
  alerta: string;
}

interface ProductTableProps {
  products: Product[];
  selectedWeek: "semana1" | "semana2" | "semana3" | "semana4";
}

export const ProductTable = ({ products, selectedWeek }: ProductTableProps) => {
  const getAlertVariant = (alerta: string) => {
    if (alerta.includes("Ruptura iminente")) {
      return { variant: "destructive" as const, icon: AlertTriangle, color: "text-destructive" };
    }
    if (alerta.includes("crítico")) {
      return { variant: "warning" as const, icon: AlertCircle, color: "text-warning" };
    }
    return { variant: "success" as const, icon: CheckCircle, color: "text-success" };
  };

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold whitespace-nowrap min-w-[150px]">Produto</TableHead>
            <TableHead className="font-semibold text-center whitespace-nowrap">Un.</TableHead>
            <TableHead className="font-semibold text-center whitespace-nowrap">Estoque Atual</TableHead>
            <TableHead className={`font-semibold text-center whitespace-nowrap transition-colors ${selectedWeek === "semana1" ? "bg-primary/20 text-primary" : ""}`}>
              Semana 1
            </TableHead>
            <TableHead className={`font-semibold text-center whitespace-nowrap transition-colors ${selectedWeek === "semana2" ? "bg-primary/20 text-primary" : ""}`}>
              Semana 2
            </TableHead>
            <TableHead className={`font-semibold text-center whitespace-nowrap transition-colors ${selectedWeek === "semana3" ? "bg-primary/20 text-primary" : ""}`}>
              Semana 3
            </TableHead>
            <TableHead className={`font-semibold text-center whitespace-nowrap transition-colors ${selectedWeek === "semana4" ? "bg-primary/20 text-primary" : ""}`}>
              Semana 4
            </TableHead>
            <TableHead className="font-semibold text-center whitespace-nowrap">Zerando em</TableHead>
            <TableHead className="font-semibold whitespace-nowrap min-w-[200px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const alertInfo = getAlertVariant(product.alerta);
            const AlertIcon = alertInfo.icon;
            
            return (
              <TableRow key={product.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium whitespace-nowrap">{product.nome}</TableCell>
                <TableCell className="text-center font-semibold">
                  {product.unidade}
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {product.estoqueAtual}
                </TableCell>
                <TableCell className={`text-center transition-colors ${selectedWeek === "semana1" ? "bg-primary/10" : ""}`}>
                  <span className={selectedWeek === "semana1" ? "font-bold text-primary" : ""}>
                    {product.previsao.semana1}
                  </span>
                </TableCell>
                <TableCell className={`text-center transition-colors ${selectedWeek === "semana2" ? "bg-primary/10" : ""}`}>
                  <span className={selectedWeek === "semana2" ? "font-bold text-primary" : ""}>
                    {product.previsao.semana2}
                  </span>
                </TableCell>
                <TableCell className={`text-center transition-colors ${selectedWeek === "semana3" ? "bg-primary/10" : ""}`}>
                  <span className={selectedWeek === "semana3" ? "font-bold text-primary" : ""}>
                    {product.previsao.semana3}
                  </span>
                </TableCell>
                <TableCell className={`text-center transition-colors ${selectedWeek === "semana4" ? "bg-primary/10" : ""}`}>
                  <span className={selectedWeek === "semana4" ? "font-bold text-primary" : ""}>
                    {product.previsao.semana4}
                  </span>
                </TableCell>
                <TableCell className="text-center text-sm whitespace-nowrap">
                  {new Date(product.estoqueZerandoEm).toLocaleDateString('pt-BR')}
                </TableCell>
                <TableCell>
                  <Badge variant={alertInfo.variant} className="flex items-center gap-1 w-fit whitespace-nowrap">
                    <AlertIcon className="h-3 w-3" />
                    <span className="text-xs sm:text-sm">{product.alerta}</span>
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>
    </div>
  );
};
