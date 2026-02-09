import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart, User, Bell } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Mawrid</h1>
              <p className="text-xs text-gray-500">Smart B2B Marketplace</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products, suppliers..."
                className="pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-lg focus:bg-white"
              />
            </div>
          </div>

          {/* Navigation Items - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Suppliers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Deals
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications - Desktop */}
            <button className="hidden sm:inline-flex relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Cart - Desktop */}
            <button className="hidden sm:inline-flex relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Menu - Desktop */}
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-2">
              <User className="w-4 h-4" />
              <span>Account</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-lg w-full"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              Categories
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              Suppliers
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              Deals
            </a>
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Register
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
