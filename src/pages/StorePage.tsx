
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ShoppingCart, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart, Product } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import products from '@/data/products';

// Get unique categories from products
const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

const StorePage = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apply filters when dependencies change
  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategory !== 'Todos') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, priceRange]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-robotics-black">
      <Header />
      
      {/* Main content */}
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <div className="text-center mb-12 stagger-animation">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Loja Gambiarra Robotics</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Equipamentos, componentes e produtos oficiais da nossa equipe de robótica.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8 glass-card p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              {/* Search */}
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-robotics-black-light border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-robotics-purple"
                />
              </div>
              
              {/* Filter toggle (mobile) */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-robotics-black-lighter border border-white/10 rounded-md text-white"
                >
                  <Filter size={18} />
                  <span>Filtros</span>
                </button>
              </div>
              
              {/* Desktop filters */}
              <div className="hidden md:flex items-center gap-4">
                <div className="text-white text-sm">Filtrar por:</div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedCategory === category
                          ? 'bg-robotics-purple text-white'
                          : 'bg-robotics-black-lighter text-white/70 hover:bg-robotics-black-light'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile filters (expandable) */}
            {isFilterOpen && (
              <div className="mt-4 pt-4 border-t border-white/10 md:hidden">
                <h3 className="text-white font-medium mb-2">Categorias</h3>
                <div className="flex gap-2 flex-wrap mb-4">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedCategory === category
                          ? 'bg-robotics-purple text-white'
                          : 'bg-robotics-black-lighter text-white/70 hover:bg-robotics-black-light'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <h3 className="text-white font-medium mb-2">Preço</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-robotics-purple"
                  />
                  <div className="flex justify-between text-white/70 text-sm mt-1">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Desktop price filter */}
            <div className="hidden md:block mt-4">
              <div className="flex items-center gap-4">
                <h3 className="text-white text-sm font-medium">Preço:</h3>
                <div className="flex-grow px-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-robotics-purple"
                  />
                  <div className="flex justify-between text-white/70 text-xs mt-1">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="glass-card rounded-lg overflow-hidden hover-scale transition-all duration-300"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-square bg-robotics-black-lighter relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="text-white font-medium mb-1 hover:text-robotics-purple-light transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div className="text-xs text-robotics-purple-light mb-2">{product.category}</div>
                    <div className="flex justify-between items-center">
                      <div className="text-white font-bold">R$ {product.price.toFixed(2)}</div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="p-2 bg-robotics-purple rounded-full hover:bg-robotics-purple-light transition-colors"
                        aria-label="Adicionar ao carrinho"
                      >
                        <ShoppingCart size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-white/70 mb-2">Nenhum produto encontrado</div>
              <button
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                  setPriceRange([0, 200]);
                }}
                className="text-robotics-purple hover:text-robotics-purple-light"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StorePage;
