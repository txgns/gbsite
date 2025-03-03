
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-robotics-black">
        <Header />
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <ShoppingCart size={64} className="text-white/30 mx-auto mb-4" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Seu carrinho está vazio</h1>
            <p className="text-white/70 mb-8">Adicione produtos ao seu carrinho para continuar.</p>
            <Link 
              to="/loja"
              className="inline-flex items-center gap-2 px-6 py-3 bg-robotics-purple text-white rounded-md hover:bg-robotics-purple-light transition-colors"
            >
              <span>Ir para a loja</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-robotics-black">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => navigate('/loja')}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Continuar comprando</span>
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Seu Carrinho</span>
            </h1>
            <p className="text-white/70 mt-2">{totalItems} {totalItems === 1 ? 'item' : 'itens'} no seu carrinho</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="col-span-2">
              <div className="glass-card rounded-lg overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-white/10">
                  <h2 className="text-xl font-medium text-white">Itens do Carrinho</h2>
                </div>
                
                {/* Cart item list */}
                <div className="divide-y divide-white/10">
                  {cart.map((item) => (
                    <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center">
                      {/* Product image */}
                      <div className="flex-shrink-0 w-full sm:w-20 h-20 bg-robotics-black-lighter rounded-md mb-4 sm:mb-0 mr-6 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="max-w-full max-h-full object-contain p-2"
                        />
                      </div>
                      
                      {/* Product details */}
                      <div className="flex-grow">
                        <Link to={`/product/${item.id}`} className="text-white font-medium hover:text-robotics-purple-light">
                          {item.name}
                        </Link>
                        <div className="text-sm text-robotics-purple-light">{item.category}</div>
                        <div className="text-white mt-1">R$ {item.price.toFixed(2)}</div>
                      </div>
                      
                      {/* Quantity controls */}
                      <div className="flex items-center mt-4 sm:mt-0 sm:ml-6">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-white/70 hover:text-white"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="w-8 text-center text-white">{item.quantity}</div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-white/70 hover:text-white"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      {/* Item total price */}
                      <div className="mt-4 sm:mt-0 sm:ml-6 text-white font-medium">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </div>
                      
                      {/* Remove button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-4 sm:mt-0 sm:ml-4 p-2 text-white/50 hover:text-white/80"
                        aria-label="Remover item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order summary */}
            <div>
              <div className="glass-card rounded-lg overflow-hidden sticky top-24">
                <div className="p-4 sm:p-6 border-b border-white/10">
                  <h2 className="text-xl font-medium text-white">Resumo do Pedido</h2>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-white/70">Subtotal</span>
                      <span className="text-white">R$ {totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Frete</span>
                      <span className="text-robotics-purple-light">Grátis</span>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-white">R$ {totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/checkout"
                    className="mt-6 block w-full py-3 bg-robotics-purple text-white text-center rounded-md hover:bg-robotics-purple-light transition-colors"
                  >
                    Finalizar Compra
                  </Link>
                  
                  <Link 
                    to="/loja"
                    className="mt-4 block w-full py-2 border border-white/20 text-white text-center rounded-md hover:bg-robotics-black-lighter transition-colors"
                  >
                    Continuar Comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
