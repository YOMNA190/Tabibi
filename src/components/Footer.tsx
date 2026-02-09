import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <h3 className="text-white font-bold">Mawrid</h3>
                <p className="text-xs text-gray-400">Smart B2B</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Connecting global suppliers with businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Browse Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Find Suppliers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">How It Works</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest updates and deals.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a href="mailto:support@mawrid.com" className="text-white hover:text-blue-400">
                support@mawrid.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <a href="tel:+1234567890" className="text-white hover:text-blue-400">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-white">Global HQ, Tech City</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2024 Mawrid. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition">Terms</a>
            <a href="#" className="hover:text-blue-400 transition">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
