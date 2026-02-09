import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  supplier: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Industrial LED Lighting System",
    supplier: "TechBright Industries",
    price: 450,
    originalPrice: 600,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Stainless Steel Fasteners",
    supplier: "Global Hardware Co.",
    price: 125,
    originalPrice: 150,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop",
    category: "Hardware",
    inStock: true,
  },
  {
    id: 3,
    name: "Eco-Friendly Packaging Materials",
    supplier: "GreenPack Solutions",
    price: 280,
    originalPrice: 350,
    rating: 4.9,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
    category: "Packaging",
    inStock: true,
  },
  {
    id: 4,
    name: "Advanced Textile Machinery",
    supplier: "Precision Manufacturing",
    price: 2500,
    originalPrice: 3200,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
    category: "Machinery",
    inStock: true,
  },
  {
    id: 5,
    name: "Chemical Grade Polymers",
    supplier: "ChemTech Industries",
    price: 890,
    originalPrice: 1100,
    rating: 4.5,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1581092162562-40038f56c1a7?w=500&h=500&fit=crop",
    category: "Chemicals",
    inStock: true,
  },
  {
    id: 6,
    name: "Smart IoT Sensors Bundle",
    supplier: "FutureTech Solutions",
    price: 650,
    originalPrice: 850,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1518611505868-48510c2e2e38?w=500&h=500&fit=crop",
    category: "Electronics",
    inStock: true,
  },
];

export default function ProductsGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Discover our most popular and trending products</p>
            </div>
            <Button variant="outline" className="hidden sm:inline-flex">
              View All Products
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-200 h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>
                {product.price < product.originalPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Category & Supplier */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-xs text-gray-500">by {product.supplier}</span>
                </div>

                {/* Product Name */}
                <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      product.inStock ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                  <span className={`text-sm ${product.inStock ? "text-green-600" : "text-gray-600"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="mt-12 text-center sm:hidden">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
