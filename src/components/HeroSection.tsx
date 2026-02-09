import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  🚀 Revolutionizing B2B Commerce
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Connect with Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Suppliers</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover millions of products from verified suppliers worldwide. Streamline your procurement process with our intelligent marketplace platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 rounded-lg">
                Start Exploring
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 rounded-lg">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-gray-900">50K+</p>
                <p className="text-gray-600 text-sm">Active Suppliers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">2M+</p>
                <p className="text-gray-600 text-sm">Products Listed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">180+</p>
                <p className="text-gray-600 text-sm">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Feature Cards */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Real-time Analytics</h3>
                      <p className="text-sm text-gray-600">Track market trends and supplier performance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Verified Suppliers</h3>
                      <p className="text-sm text-gray-600">All suppliers are vetted and certified</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Instant Quotes</h3>
                      <p className="text-sm text-gray-600">Get competitive pricing in seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
