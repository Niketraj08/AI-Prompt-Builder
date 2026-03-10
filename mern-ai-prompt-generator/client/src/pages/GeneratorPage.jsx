import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Copy, 
  Download, 
  RefreshCw, 
  Check,
  Layout,
  Palette,
  Target,
  Rocket,
  Plus
} from 'lucide-react';
import axios from 'axios';

const GeneratorPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    websiteName: '',
    businessType: '',
    targetAudience: '',
    websiteStyle: 'Modern & Clean',
    colorTheme: 'Dark Mode',
    features: [],
    pages: [],
    designInspiration: '',
    extraInstructions: ''
  });

  const steps = [
    { title: 'Core Info', icon: Rocket },
    { title: 'Identity', icon: Target },
    { title: 'Style & Feel', icon: Palette },
    { title: 'Essentials', icon: Layout }
  ];

  const featureOptions = ['Hero Section', 'Pricing Table', 'Testimonials', 'Contact Form', 'About Section', 'Blog Feed', 'Portfolio Gallery', 'Product Catalog', 'Newsletter Signup', 'Live Chat'];
  const pageOptions = ['Home', 'About Us', 'Services', 'Products', 'Pricing', 'Contact', 'Blog', 'Portfolio', 'Privacy Policy', 'FAQ'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleArrayItem = (name, item) => {
    setFormData(prev => {
      const items = prev[name].includes(item)
        ? prev[name].filter(i => i !== item)
        : [...prev[name], item];
      return { ...prev, [name]: items };
    });
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/prompts/generate', formData);
      setGeneratedPrompt(response.data.generatedPrompt);
      setStep(5); // Move to results step
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSavePrompt = async () => {
    try {
      await axios.post('http://localhost:5000/api/prompts/save', {
        ...formData,
        generatedPrompt
      });
      alert('Prompt saved to history!');
    } catch (error) {
      console.error('Save failed:', error);
      alert('Failed to save prompt.');
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedPrompt], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${formData.websiteName || 'website'}-prompt.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold mb-6 text-white">What's your website called?</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Website Name</label>
                <input 
                  type="text" 
                  name="websiteName"
                  value={formData.websiteName}
                  onChange={handleInputChange}
                  placeholder="e.g. NexaFlow, TechGear"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Business Type</label>
                <input 
                  type="text" 
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  placeholder="e.g. SaaS Startup, E-commerce Store"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold mb-6 text-white">Define your audience</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Target Audience</label>
                <textarea 
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  placeholder="Describe who will use this website..."
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold mb-6 text-white">Style and Feel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Website Style</label>
                <select 
                  name="websiteStyle"
                  value={formData.websiteStyle}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Modern & Clean" className="bg-gray-900 text-white">Modern & Clean</option>
                  <option value="Minimalist" className="bg-gray-900 text-white">Minimalist</option>
                  <option value="Brutalist" className="bg-gray-900 text-white">Brutalist</option>
                  <option value="Corporate" className="bg-gray-900 text-white">Corporate</option>
                  <option value="Playful & Vibrant" className="bg-gray-900 text-white">Playful & Vibrant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Color Theme</label>
                <select 
                  name="colorTheme"
                  value={formData.colorTheme}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Dark Mode" className="bg-gray-900 text-white">Dark Mode</option>
                  <option value="Light Mode" className="bg-gray-900 text-white">Light Mode</option>
                  <option value="High Contrast" className="bg-gray-900 text-white">High Contrast</option>
                  <option value="Pastel Colors" className="bg-gray-900 text-white">Pastel Colors</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Features & Content</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-200 mb-3">Key Features</label>
              <div className="flex flex-wrap gap-2">
                {featureOptions.map(f => (
                  <button
                    key={f}
                    onClick={() => toggleArrayItem('features', f)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      formData.features.includes(f) 
                        ? 'bg-blue-500/20 border-blue-500 text-blue-400' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-3">Pages Needed</label>
              <div className="flex flex-wrap gap-2">
                {pageOptions.map(p => (
                  <button
                    key={p}
                    onClick={() => toggleArrayItem('pages', p)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      formData.pages.includes(p) 
                        ? 'bg-purple-500/20 border-purple-500 text-purple-400' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your AI Prompt</h2>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
                <button 
                  onClick={handleDownload}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                  title="Download as .txt"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setStep(1)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                  title="Restart"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-black/50 border border-white/10 rounded-2xl p-6 font-mono text-sm text-gray-300 leading-relaxed relative group">
              <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 bg-white/5 px-2 py-1 rounded">PROMPT-128-X</div>
              {generatedPrompt}
            </div>
            
            <div className="mt-8 flex justify-center">
              <button 
                onClick={handleSavePrompt}
                className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
              >
                Save to History
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {step < 5 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step > i + 1 ? 'bg-blue-500 border-blue-500' : 
                    step === i + 1 ? 'bg-blue-500/20 border-blue-500 text-blue-500' : 'bg-transparent border-white/10 text-gray-600'
                  }`}>
                    {step > i + 1 ? <Check className="w-5 h-5 text-white" /> : <s.icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${step === i + 1 ? 'text-white' : 'text-gray-400'}`}>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="glass-card p-8 md:p-12 relative">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          {step < 5 && (
            <div className="mt-12 flex items-center justify-between">
              <button
                onClick={() => setStep(s => Math.max(1, s - 1))}
                disabled={step === 1}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors ${step === 1 ? 'opacity-0' : 'text-gray-400 hover:text-white'}`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              
              {step < 4 ? (
                <button
                  onClick={() => setStep(s => s + 1)}
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="flex items-center space-x-2 px-8 py-3 rounded-full button-gradient font-bold shadow-lg shadow-blue-500/20 disabled:opacity-50"
                >
                  {loading ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Generate Prompt</span>
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-blue-500/5 to-transparent -z-10 pointer-events-none" />
    </div>
  );
};

export default GeneratorPage;
