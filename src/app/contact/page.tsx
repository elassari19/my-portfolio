'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaTwitter,
  FaDiscord,
  FaCodepen
} from 'react-icons/fa';
import { 
  MdEmail, 
  MdPhone, 
  MdSend, 
  MdCheckCircle, 
  MdError,
  MdContentCopy
} from 'react-icons/md';

// Contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setIsSubmitting(false);
      setStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsSubmitting(false);
      setStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address.' 
      });
      return;
    }

    try {
      // Call the API route
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ type: '', message: '' });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setStatus({ 
        type: 'success', 
        message: `${type} copied to clipboard!` 
      });
      setTimeout(() => setStatus({ type: '', message: '' }), 2000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
        <MdSend className="text-blue-500" /> Send Message
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-1"
          >
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              required
            />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-1"
          >
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              required
            />
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="space-y-1"
        >
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="space-y-1"
        >
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me about your project or question..."
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
            required
          />
        </motion.div>

        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
            }`}
          >
            {status.type === 'success' ? <MdCheckCircle /> : <MdError />}
            <span className="font-medium">{status.message}</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed opacity-75' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <MdSend />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

// Quick contact info card
function QuickContactCard({ icon, label, value, copyable = false }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  copyable?: boolean 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copyable) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      onClick={handleCopy}
      className={`group relative overflow-hidden rounded-xl p-4 md:p-5 border transition-all duration-300 ${
        copyable 
          ? 'cursor-pointer bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg'
          : 'bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          copyable 
            ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' 
            : 'bg-gray-100 dark:bg-gray-700 text-blue-500'
        }`}>
          {icon}
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
            {label}
          </div>
          <div className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
            {value}
          </div>
        </div>
      </div>
      
      {copyable && (
        <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
          <MdContentCopy size={12} />
          <span>{copied ? 'Copied!' : 'Click to copy'}</span>
        </div>
      )}
    </motion.div>
  );
}

// Social link button
function SocialLink({ icon, label, href, color }: { 
  icon: React.ReactNode; 
  label: string; 
  href: string; 
  color: string;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-transparent`}
      style={{ 
        '--hover-color': color,
        borderColor: 'var(--hover-color)'
      } as React.CSSProperties}
    >
      <div className={`text-2xl`} style={{ color }}>
        {icon}
      </div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</span>
    </motion.a>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20 -z-10"></div>
      
      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse -z-9"></div>
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-75 -z-9"></div>
      <div className="fixed top-1/2 left-1/2 w-56 h-56 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-150 -z-9"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 mt-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              GET IN TOUCH
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? Let's connect and build something amazing together.
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Response Time', value: '< 2h', icon: <MdSend size={16} /> },
            { label: 'Projects', value: '50+', icon: <FaCodepen size={16} /> },
            { label: 'Happy Clients', value: '30+', icon: <MdCheckCircle size={16} /> },
            { label: 'Experience', value: '10y+', icon: <FaMapMarkerAlt size={16} /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400 font-medium">
                {stat.icon}
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Quick Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <MdPhone className="text-blue-500" /> Quick Contact
              </h3>
              
              <div className="space-y-3">
                <QuickContactCard
                  icon={<MdPhone />}
                  label="Phone"
                  value="+212 615 638 49"
                  copyable={true}
                />
                
                <QuickContactCard
                  icon={<MdEmail />}
                  label="Email"
                  value="elassari19@gmail.com"
                  copyable={true}
                />
                
                <QuickContactCard
                  icon={<FaMapMarkerAlt />}
                  label="Location"
                  value="Tangier, Morocco"
                  copyable={false}
                />
              </div>
            </motion.section>

            {/* Social Media */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <FaGithub className="text-blue-500" /> Connect
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <SocialLink
                  icon={<FaGithub />}
                  label="GitHub"
                  href="https://github.com/elassari19"
                  color="#333333"
                />
                <SocialLink
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  href="https://linkedin.com"
                  color="#0A66C2"
                />
                <SocialLink
                  icon={<FaTwitter />}
                  label="Twitter"
                  href="https://twitter.com"
                  color="#1DA1F2"
                />
                <SocialLink
                  icon={<FaDiscord />}
                  label="Discord"
                  href="https://discord.com"
                  color="#5865F2"
                />
              </div>
            </motion.section>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              Prefer Direct Communication?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Feel free to reach out via email or phone during business hours. 
              I typically respond within 2-4 hours during weekdays.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="mailto:elassari19@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                <MdEmail />
                Email Me
              </a>
              <a 
                href="tel:+21261563849" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                <MdPhone />
                Call Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
