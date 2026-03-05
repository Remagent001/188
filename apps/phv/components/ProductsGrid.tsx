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
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-0">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`flex flex-col md:flex-row items-center gap-12 py-16 px-8 border-b border-gray-100 ${
                index % 2 === 1 ? "md:flex-row-reverse bg-[#f5f5f5]" : ""
              }`}
            >
              {/* Logo */}
              <div className="md:w-1/2 w-full flex items-center justify-center">
                {product.logo ? (
                  <img
                    src={product.logo}
                    alt={product.name}
                    className="w-full object-contain"
                    style={{ maxHeight: "320px" }}
                  />
                ) : (
                  <span className="text-[#212934] font-bold text-3xl tracking-wide">{product.name}</span>
                )}
              </div>

              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Featured Brand</p>
                <h3 className="text-[#212934] text-2xl sm:text-3xl font-bold mb-4">{product.name}</h3>
                <div className="w-10 h-px bg-[#aa0000] mb-6 mx-auto md:mx-0" />
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { Product };
