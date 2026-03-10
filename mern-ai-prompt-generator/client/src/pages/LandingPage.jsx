import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Layout, Zap, ArrowRight, Shield, Globe } from 'lucide-react';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Next Gen Website Prompt Builder</span>
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              Build Your AI Website <br />
              <span className="gradient-text">Prompt in Seconds</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Transform your abstract ideas into structured, high-conversion AI prompts. 
              Works perfectly with ChatGPT, Midjourney, and top-tier website builders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/generate" className="flex items-center space-x-2 px-8 py-4 rounded-full font-semibold button-gradient text-lg shadow-xl shadow-blue-500/30">
                <span>Start Generating</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#features" className="px-8 py-4 rounded-full font-semibold bg-white/5 border border-white/10 text-lg hover:bg-white/10 transition-all">
                Explore Features
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 mx-auto max-w-5xl glass-card p-4 overflow-hidden shadow-2xl shadow-blue-500/10"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-black rounded-lg border border-white/5 flex flex-col items-center justify-center p-8">
              <div className="w-full max-w-2xl space-y-6">
                <div className="h-4 w-3/4 bg-white/5 rounded-full animate-pulse" />
                <div className="h-4 w-1/2 bg-white/5 rounded-full animate-pulse" />
                <div className="h-4 w-5/6 bg-white/5 rounded-full animate-pulse" />
                <div className="mt-12 p-6 glass-card border-blue-500/20">
                   <p className="text-sm font-mono text-blue-400">"Create a modern SaaS startup landing page with dark theme, hero section, pricing table, testimonials, and contact form. Use modern UI/UX similar to Stripe and Vercel."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Precision-Engineered for Success</h2>
            <p className="text-gray-400">Everything you need to prompt like a Master of AI.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: MessageSquare, title: 'Guided Builder', desc: 'Step-by-step questionnaire that extracts the core essence of your business.' },
              { icon: Sparkles, title: 'AI Optimization', desc: 'Our algorithms refine your answers into prompt patterns that AI models love.' },
              { icon: Zap, title: 'Instant Output', desc: 'Generate complex website architectures and design systems in milliseconds.' }
            ].map((f, i) => (
              <motion.div key={i} variants={itemVariants} className="p-8 glass-card hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Jumpstart with Templates</h2>
              <p className="text-gray-400">Pre-configured blueprints for common website types.</p>
            </div>
            <Link to="/generate" className="text-blue-500 font-semibold flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <span>View all templates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['SaaS Platform', 'Personal Portfolio', 'Agency Site', 'E-commerce', 'Creative Studio', 'Blog/News'].map((t, i) => (
              <div key={i} className="group relative aspect-video glass-card overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-lg font-bold group-hover:text-blue-400 transition-colors">{t}</h4>
                  <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to use this template</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 -z-10" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full" />
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Site?</h2>
            <p className="text-gray-400 mb-10 text-lg">Join thousands of creators using AI Prompt Builder to streamline their workflow.</p>
            <Link to="/generate" className="px-10 py-4 rounded-full font-bold button-gradient text-lg inline-block">
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
