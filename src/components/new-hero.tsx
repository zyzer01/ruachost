import React from 'react';
import { ArrowUpRight, Leaf, Globe, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-emerald-900" />
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 text-sm font-medium">
              <Leaf size={16} className="mr-2" />
              100% Renewable Energy
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Sustainable Cloud Hosting for a Better Tomorrow
            </h1>
            
            <p className="text-xl text-gray-600">
              Experience premium web hosting thats kind to both your business and our planet. Powered by 100% renewable energy across 4 global locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                View our plans
                <ArrowUpRight size={20} className="ml-2" />
              </button>
              
              <button className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                Why choose us
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600">4 Global Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
              <div className="h-full w-full rounded-3xl bg-white p-8">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-8">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
