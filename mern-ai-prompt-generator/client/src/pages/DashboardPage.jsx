import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  History, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink, 
  Trash2, 
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import axios from 'axios';

const DashboardPage = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/prompts/history');
      setPrompts(data);
    } catch (error) {
      console.error('Failed to fetch history');
    } finally {
      setLoading(false);
    }
  };

  const deletePrompt = async (id) => {
    if (!window.confirm('Are you sure you want to delete this prompt?')) return;
    
    try {
      await axios.delete(`http://localhost:5000/api/prompts/${id}`);
      setPrompts(prev => prev.filter(p => p._id !== id));
    } catch (error) {
      alert('Delete failed');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your generated prompts and history</p>
          </div>
          <Link 
            to="/generate" 
            className="flex items-center space-x-2 px-6 py-3 rounded-full button-gradient font-bold shadow-lg shadow-blue-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>New Prompt</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Stats / Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-xl">
                  A
                </div>
                <div>
                  <h3 className="font-bold">Public Explorer</h3>
                  <p className="text-xs text-gray-500">Anonymous Access</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Prompts</span>
                  <span className="font-bold text-white">{prompts.length}</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-4">
              <nav className="space-y-1">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 font-medium">
                  <History className="w-5 h-5" />
                  <span>Prompt History</span>
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search prompts..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {loading ? (
              <div className="py-20 flex justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : prompts.length > 0 ? (
              <div className="space-y-4">
                {prompts.map((p) => (
                  <motion.div 
                    key={p._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-5 group hover:bg-white/[0.05] transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-bold text-lg">{p.websiteName}</h4>
                          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider">{p.businessType}</span>
                        </div>
                        <p className="text-gray-500 text-sm line-clamp-1 mb-4 italic">
                          "{p.generatedPrompt}"
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{new Date(p.createdAt).toLocaleDateString()}</span>
                          </span>
                          <span>{p.features?.length || 0} features</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all text-gray-400 hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deletePrompt(p._id)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 glass-card">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <History className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">No history found</h3>
                <p className="text-gray-500 mb-8 max-w-xs mx-auto">Start generating prompts to see your history appear here.</p>
                <Link to="/generate" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-bold">
                  Generate First Prompt
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
