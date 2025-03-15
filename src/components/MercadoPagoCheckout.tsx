
import React, { useEffect } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Chave pública do Mercado Pago - em produção, isso deve vir de variáveis de ambiente
const MERCADO_PAGO_PUBLIC_KEY = "TEST-31e2e90c-f6cb-46f3-b23e-4af799807da8";

interface MercadoPagoCheckoutProps {
  amount: number;
  onPaymentSuccess: () => void;
}

const MercadoPagoCheckout: React.FC<MercadoPagoCheckoutProps> = ({
  amount,
  onPaymentSuccess,
}) => {
  const { toast } = useToast();

  useEffect(() => {
    // Inicializa o SDK do Mercado Pago
    initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);
  }, []);

  const initialization = {
    amount: amount,
    preferenceId: "", // Em uma aplicação real, isso viria do backend
  };

  const onSubmit = async (formData: any) => {
    // Aqui você enviaria os dados para o seu backend
    console.log("Payment form data:", formData);
    
    // Simulação de pagamento bem-sucedido
    toast({
      title: "Pagamento processado",
      description: "Seu pagamento foi processado com sucesso!",
    });
    
    onPaymentSuccess();
  };

  const onError = (error: any) => {
    console.error("Mercado Pago error:", error);
    toast({
      title: "Erro no pagamento",
      description: "Houve um problema ao processar seu pagamento.",
      variant: "destructive",
    });
  };

  const onReady = () => {
    console.log("Mercado Pago is ready");
  };

  return (
    <div className="bg-background rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Dados do cartão</h3>
      <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onError={onError}
        onReady={onReady}
        customization={{
          visual: {
            style: {
              theme: 'dark'
            }
          }
        }}
      />
      <div className="mt-4">
        <Button 
          type="button" 
          className="w-full"
          onClick={() => {
            // Em uma implementação real, este botão acionaria o CardPayment
            // Para este exemplo, vamos simular o sucesso
            toast({
              title: "Simulação de pagamento",
              description: "Em um ambiente real, isso seria processado pelo Mercado Pago",
            });
            onPaymentSuccess();
          }}
        >
          Finalizar pagamento
        </Button>
      </div>
    </div>
  );
};

export default MercadoPagoCheckout;
