
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Contact Me</h2>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-tech-blue mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out to me through any of the following channels:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-tech-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:kuldeepgohel06@gmail.com" 
                    className="text-gray-700 hover:text-tech-blue transition-colors"
                  >
                    kuldeepgohel06@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-tech-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+919106543843" 
                    className="text-gray-700 hover:text-tech-blue transition-colors"
                  >
                    +91 91065 43843
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-tech-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-700">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-tech-blue mb-6">Send Me a Message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-tech-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 ml-2" />
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <p className="mt-4 text-green-600 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
