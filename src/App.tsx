import React, { useState } from 'react';
import { 
  Smartphone, 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  MapPin, 
  Star,
  Mail,
  CheckCircle,
  ArrowRight,
  Building2,
  GraduationCap,
  Shield,
  Zap
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img src="/build u.PNG" alt="BuildU Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-900">BuildU</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#conectuj" className="text-gray-700 hover:text-blue-600 transition-colors">ConectUJ</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              </div>
            </div>
            <a href="#waitlist" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  We build for the
                  <span className="text-blue-600"> Universe</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700">
                  We build for Universities
                </h2>
                <h3 className="text-2xl lg:text-3xl font-medium text-purple-600">
                  We build for you
                </h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                BuildU creates innovative mobile applications that transform university experiences. 
                Our flagship app, ConectUJ, connects students across Nigerian universities in a safe, 
                trusted digital ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#conectuj" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 text-center font-semibold">
                  Discover ConectUJ
                </a>
                <a href="#waitlist" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all text-center font-semibold">
                  Join Waitlist
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <img src="/conectuj_logo1-removebg-preview.png" alt="ConectUJ Logo" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About BuildU */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About BuildU</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a forward-thinking company specializing in mobile app development for universities, 
              creating solutions that enhance student life and campus connectivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology to solve real university challenges with elegant, user-friendly solutions.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student-Centered</h3>
              <p className="text-gray-600">
                Every feature we build is designed with students in mind, ensuring maximum value and usability for campus life.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Safety</h3>
              <p className="text-gray-600">
                Security and verification are at the core of our platforms, creating safe spaces for student interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ConectUJ Section */}
      <section id="conectuj" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img src="/conectuj_logo1-removebg-preview.png" alt="ConectUJ Logo" className="h-16 w-auto" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Introducing ConectUJ</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A student-centered digital platform that fosters trusted connections, simplifies campus interactions, 
              and brings the university community together in one unified space.
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">The Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                University students in Nigeria struggle with disconnected, unstructured, and often unsafe methods 
                for buying and selling items, discovering campus opportunities, and promoting their businesses — 
                leading to missed deals, lack of trust, and inefficiency in campus interactions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                ConectUJ is a student-centered digital platform that fosters trusted connections, simplifies campus 
                interactions, and brings the student community together in one unified space with verified users and 
                secure transactions.
              </p>
            </div>
          </div>

          {/* App Preview */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">See ConectUJ in Action</h3>
            <div className="overflow-x-auto">
              <div className="flex space-x-4 min-w-max justify-center">
                <div className="w-64 bg-gray-100 rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="bg-white rounded-xl p-4 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900">Marketplace</h4>
                      <p className="text-sm text-gray-600 mt-2">Buy & sell safely with verified students</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-64 bg-gray-100 rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="bg-white rounded-xl p-4 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900">Campus Updates</h4>
                      <p className="text-sm text-gray-600 mt-2">Stay informed with trending campus news</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-64 bg-gray-100 rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="bg-white rounded-xl p-4 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900">Campus Directory</h4>
                      <p className="text-sm text-gray-600 mt-2">Find locations and services easily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600">ConectUJ is designed for every member of the university community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Students</h3>
              <p className="text-gray-700 text-sm">
                Buy/sell items safely, stay informed, and save time navigating campus with verified peer connections.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <GraduationCap className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Freshers</h3>
              <p className="text-gray-700 text-sm">
                Onboarding support, access to essentials, and discover campus through a safe, student-friendly platform.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Entrepreneurs</h3>
              <p className="text-gray-700 text-sm">
                Exclusive space to promote products and services with tools to boost visibility and grow sales.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Star className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Final-Year Students</h3>
              <p className="text-gray-700 text-sm">
                Sell used items quickly and easily before leaving by connecting with verified underclassmen buyers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Building2 className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Businesses</h3>
              <p className="text-gray-700 text-sm">
                Targeted access to student market through paid promotions and listings within campus communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">Everything students need in one powerful platform</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Verification</h3>
              <p className="text-gray-600 text-sm">Secure account creation with student ID verification for trusted interactions.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <ShoppingBag className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketplace</h3>
              <p className="text-gray-600 text-sm">Buy and sell items with photos, descriptions, and secure in-app messaging.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trending Feed</h3>
              <p className="text-gray-600 text-sm">Campus updates, events, and announcements with interactive engagement.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Campus Directory</h3>
              <p className="text-gray-600 text-sm">Find hostels, lecture halls, eateries, and other key campus locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join the ConectUJ Waitlist</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be among the first to experience the future of university connectivity. 
              Get early access and exclusive updates.
            </p>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">You're on the list!</h3>
                <p className="text-green-700">We'll notify you as soon as ConectUJ launches.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  No spam, just updates on ConectUJ's launch and exclusive early access.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/build u.PNG" alt="BuildU Logo" className="h-8 w-auto" />
                <span className="text-2xl font-bold">BuildU</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Building innovative mobile applications for universities. 
                We build for the Universe, We build for Universities, We build for you.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#conectuj" className="hover:text-white transition-colors">ConectUJ</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#waitlist" className="hover:text-white transition-colors">Join Waitlist</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: hello@buildu.com</li>
                <li>Support: support@conectuj.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BuildU. All rights reserved. We build for the Universe, We build for Universities, We build for you.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;