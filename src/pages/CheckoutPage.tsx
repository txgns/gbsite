
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (Object.values(formState).some(value => !value)) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    // Process order
    toast({
      title: "Pedido realizado com sucesso!",
      description: `Total: R$ ${totalPrice.toFixed(2)}`,
    });
    
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 h-screen flex flex-col items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Seu carrinho está vazio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Adicione alguns produtos antes de finalizar a compra.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigate("/loja")} className="w-full">
              Ir para a loja
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Finalizar compra</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Dados para entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formState.name} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formState.email} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    value={formState.address} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formState.city} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">CEP</Label>
                    <Input 
                      id="postalCode" 
                      name="postalCode" 
                      value={formState.postalCode} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <CardTitle className="mb-4">Dados de pagamento</CardTitle>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Número do cartão</Label>
                  <Input 
                    id="cardNumber" 
                    name="cardNumber" 
                    value={formState.cardNumber} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardExpiry">Data de validade</Label>
                    <Input 
                      id="cardExpiry" 
                      name="cardExpiry" 
                      value={formState.cardExpiry} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="MM/AA"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCvc">CVC</Label>
                    <Input 
                      id="cardCvc" 
                      name="cardCvc" 
                      value={formState.cardCvc} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="123"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Resumo do pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} className="w-full">
                Finalizar compra
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
