
import React, { useEffect, useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Chave pública do Mercado Pago - em produção, isso deve vir de variáveis de ambiente
const MERCADO_PAGO_PUBLIC_KEY = "TEST-087bfa63-2530-4aca-99b6-74ce8c9ee515";

interface MercadoPagoCheckoutProps {
  amount: number;
  onPaymentSuccess: () => void;
}

const MercadoPagoCheckout: React.FC<MercadoPagoCheckoutProps> = ({
  amount,
  onPaymentSuccess,
}) => {
  const { toast } = useToast();
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Inicializa o SDK do Mercado Pago
    initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);
    
    // Em uma aplicação real, você faria uma chamada para o seu backend para obter o preferenceId
    // Aqui estamos simulando a criação de um preferenceId
    const simulatePreferenceId = () => {
      // Em produção: essa parte seria feita pelo seu servidor
      // Este é apenas um ID fictício para demonstração
      return "TEST-" + Math.random().toString(36).substring(2, 15);
    };
    
    setPreferenceId(simulatePreferenceId());
  }, []);

  const handleCheckout = () => {
    setIsLoading(true);
    // Como estamos em modo de demonstração, vamos simular o sucesso
    setTimeout(() => {
      toast({
        title: "Pagamento processado",
        description: "Seu pagamento foi processado com sucesso!",
      });
      setIsLoading(false);
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="bg-background rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Pagamento</h3>
      
      {preferenceId ? (
        <>
          <div className="mb-4 p-4 border rounded-md bg-muted">
            <p className="text-sm mb-2">
              <strong>Valor:</strong> R$ {amount.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">
              Em um ambiente de produção, você seria redirecionado para o checkout do Mercado Pago.
            </p>
          </div>
          
          <Button 
            onClick={handleCheckout} 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando
              </>
            ) : (
              "Finalizar pagamento"
            )}
          </Button>
          
          {/* Nota: Em produção, você usaria os componentes oficiais do Mercado Pago
              como o Wallet Brick ou o Payment Brick, que estão disponíveis no SDK */}
        </>
      ) : (
        <div className="flex justify-center items-center py-6">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
    </div>
  );
};

export default MercadoPagoCheckout;
