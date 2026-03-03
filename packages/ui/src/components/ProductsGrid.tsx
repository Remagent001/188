interface Product {
  name: string;
  description: string;
  logo?: string;
}

interface ProductsGridProps {
  products: Product[];
}

export function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <section className="bg-[#0f0f0f] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">In Our Shop</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Grooming Products</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          <p className="text-white/50 text-sm mt-4 max-w-xl mx-auto">
            We carry only the best professional grooming brands — hand-selected by our stylists and
            recommended to keep your look sharp between visits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-[#141414] border border-white/5 p-8 flex flex-col gap-4 hover:border-[#c9a96e]/30 transition-colors">
              {/* Logo placeholder */}
              <div className="h-16 flex items-center">
                {product.logo ? (
                  <img src={product.logo} alt={product.name} className="h-12 object-contain" />
                ) : (
                  <span className="text-[#c9a96e] font-bold text-xl tracking-wide">{product.name}</span>
                )}
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { Product };
