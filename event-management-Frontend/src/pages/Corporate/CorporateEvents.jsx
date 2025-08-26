import React, { useState } from 'react';
import { CheckCircle, Users, Calendar, Trophy, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const CorporateEvents = () => {
const navigate = useNavigate();

const handleChoosePackage = (pkg) => {
  localStorage.setItem("selectedPackage", JSON.stringify(pkg));
  navigate("/Corporate/Booking");
};

  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    attendees: '',
    package:'',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', eventType: '', attendees: '', message: '' });
  };

  // const handlePackageClick = (pkgName) => {
  //   setFormData(prev => ({ ...prev, package: pkgName }));
  //   document.getElementById('plan-event')
  //     .scrollIntoView({ behavior: 'smooth' });
  // };

  <select
  name="package"
  value={formData.package}
  onChange={handleInputChange}
>
  <option value="">-- Choose a package --</option>
  <option value="Basic">Basic – ₹1,50,000</option>
  <option value="Professional">Professional – ₹3,50,000</option>
  <option value="Enterprise">Enterprise – ₹7,50,000</option>
</select>

   const handlePackageClick = (pkgName, pkgPrice) => {
    const pkg = { name: pkgName, price: pkgPrice };
    setFormData(prev => ({ ...prev, package: pkgName }));
    localStorage.setItem("selectedPackage", JSON.stringify(pkg));
    document.getElementById('plan-event').scrollIntoView({ behavior: 'smooth' });
  };





  return (
    
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section  className="relative h-96 bg-gradient-to-r from-purple-900 to-pink-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Corporate Events</h1>
          <p className="text-xl mb-6">
            Professional event planning for conferences, seminars, and product launches
          </p>
          <button  onClick={() => {
             document.getElementById('event-package').scrollIntoView({ behavior: 'smooth' });
                  }}
             className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 
            rounded-full font-semibold transition duration-300">
               Get Started
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive corporate event solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-pink-600 mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Conferences & Seminars</h3>
              <p className="text-gray-600 mb-4 ">Professional conferences with expert speakers and seamless execution.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Venue Selection</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Speaker Management</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />AV Equipment</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Registration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-pink-600 mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Product Launches</h3>
              <p className="text-gray-600 mb-4">Create buzz and excitement for your new product launches.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Media Management</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Brand Integration</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Press Coverage</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Launch Strategy</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-pink-600 mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Corporate Meetings</h3>
              <p className="text-gray-600 mb-4">Board meetings and corporate gatherings with professional setup.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2 " />Meeting Setup</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Catering Services</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Technical Support</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id='event-package' className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your needs</p>
          </div>
          
          <div id='basic-card' className ="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <div className="text-3xl font-bold text-pink-600 mb-2">₹1,50,000</div>
                <div className="text-gray-600">Up to 100 attendees</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Venue booking</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Basic AV equipment</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Registration desk</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Refreshments</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Event coordination</li>
              </ul>
              <button
                onClick={() => handlePackageClick('Basic', 150000)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold transition">
                Choose Basic
              </button>
            </div>

            <div id="professional-card" className="bg-white rounded-lg shadow-lg p-8 border-2 border-pink-600 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold text-pink-600 mb-2">₹3,50,000</div>
                <div className="text-gray-600">Up to 300 attendees</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Premium venue</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Advanced AV & lighting</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Professional emcee</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Full catering</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Photography</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Live streaming</li>
              </ul>
              <button onClick={() => handlePackageClick('professional', 350000)} 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition">
                Choose Professional
              </button>
            </div>

            <div id="enterprise-card" className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-pink-600 mb-2">₹7,50,000</div>
                <div className="text-gray-600">Up to 1000 attendees</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Luxury venue</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Complete production</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Celebrity speakers</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Custom branding</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Multi-camera recording</li>
                <li className="flex items-center text-black"><CheckCircle className="w-4 h-4 text-green-500 mr-3" />Marketing support</li>
              </ul>
              <button onClick={() => handlePackageClick('enterprise', 750000)} 
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold transition">
                Choose Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Indian Events made our annual conference absolutely flawless. Every detail was perfectly managed!"
              </p>
              <div>
                <div className="font-semibold">Rajesh Sharma</div>
                <div className="text-sm text-gray-500">CEO, TechCorp India</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The product launch exceeded our expectations. The team's creativity is unmatched."
              </p>
              <div>
                <div className="font-semibold">Priya Patel</div>
                <div className="text-sm text-gray-500">Marketing Director, StartupHub</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "From planning to execution, everything was seamless. Great success!"
              </p>
              <div>
                <div className="font-semibold">Amit Singh</div>
                <div className="text-sm text-gray-500">Operations Head, Global Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id='plan-event' className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Corporate Event</h2>
            <p className="text-xl text-gray-600">Get a custom quote for your requirements</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                >
                  <option value="">Select Event Type</option>
                  <option value="conference">Conference</option>
                  <option value="seminar">Seminar</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="meeting">Corporate Meeting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attendees</label>
                <select
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                >
                  <option value="">Number of attendees</option>
                  <option value="25-50">25-50 people</option>
                  <option value="50-100">50-100 people</option>
                  <option value="100-300">100-300 people</option>
                  <option value="300-500">300-500 people</option>
                  <option value="500+">500+ people</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Tell us about your event requirements..."
              ></textarea>
            </div>
            
            <button
              onClick={() =>{
    const selectedPkg = JSON.parse(localStorage.getItem("selectedPackage"));
    if (!selectedPkg) {
      alert("Please select a package first.");
      return;
    }
    handleChoosePackage(selectedPkg);
  }}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-pink-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-pink-600" />
              <span>corporate@indianevents.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateEvents;