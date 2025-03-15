
import React, { useEffect, useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Chave pública do Mercado Pago - em produção, isso deve vir de variáveis de ambiente
const MERCADO_PAGO_PUBLIC_KEY = "APP_USR-5072e427-80b2-4841-81e1-d328a0ef5213";

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
    
    // Em uma implementação real, aqui seria o redirecionamento para o Mercado Pago
    // Como estamos em demonstração, vamos simular o redirecionamento
    
    // Normalmente, você usaria algo como:
    // window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=${preferenceId}`;
    
    // Para fins de demonstração, vamos abrir uma nova janela simulando o Mercado Pago
    const checkoutWindow = window.open(
      `https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=${preferenceId}`,
      "_blank"
    );
    
    // Simula o retorno do checkout após 3 segundos
    setTimeout(() => {
      if (checkoutWindow) {
        checkoutWindow.close();
      }
      
      toast({
        title: "Pagamento processado",
        description: "Seu pagamento foi processado com sucesso!",
      });
      
      setIsLoading(false);
      onPaymentSuccess();
    }, 3000);
    
    // Em um ambiente real, você teria um endpoint de callback/webhook que o Mercado Pago 
    // chamaria para notificar sobre o status do pagamento, e então você atualizaria o estado
    // da sua aplicação com base nessa resposta
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
              Ao clicar em "Pagar com Mercado Pago", você será redirecionado para a plataforma segura de pagamento.
            </p>
          </div>
          
          <Button 
            onClick={handleCheckout} 
            className="w-full bg-[#009ee3] hover:bg-[#007eb5]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Redirecionando...
              </>
            ) : (
              "Pagar com Mercado Pago"
            )}
          </Button>
          
          <div className="mt-4 text-xs text-center text-muted-foreground">
            <p>Esta é uma simulação. Em produção, você seria redirecionado para o checkout real do Mercado Pago.</p>
          </div>
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
