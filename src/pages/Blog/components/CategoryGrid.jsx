import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Users, Sparkles, FileText, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import blogData from '../../../data/blogData.json';
import article1 from '../images/article-images/article-1.jpg'; // Using as feature image
import article4 from '../images/article-images/article-4.jpg'; // Using for another block

const CategoryGrid = () => {
  // Pick a featured article (e.g., the first one from the list)
  const featuredArticle = blogData.articles.find(a => a.id === 'article-3-1') || blogData.articles[0];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-2">
              Featured <span className="text-cyan-600">Insights</span>
            </h2>
            <p className="text-lg text-slate-600">
              Curated resources to accelerate your career deployment.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-slate-600 font-semibold hover:text-cyan-600 transition-colors group"
          >
            View all archives
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* 1. Editor's Pick (Large 2x2 Card) */}
          <motion.div
            className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={article1} 
                alt="Featured Article" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-start">
              <div className="bg-cyan-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider shadow-lg">
                Editor's Pick
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-200 transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-slate-200 text-lg line-clamp-2 mb-6 max-w-xl">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  {featuredArticle.readTime}
                </span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Resource/Tool Card (1x1) */}
          <motion.div
            className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
              <FileText className="w-32 h-32 text-cyan-600" />
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Resume Templates
              </h4>
              <p className="text-slate-500 text-sm">
                ATS-friendly JSON & PDF templates for Senior Engineers.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mt-4">
              Download Now <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* 3. Community/Stat Card (1x1) */}
          <motion.div
            className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             
             <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <span className="bg-green-500/20 text-green-300 text-xs font-bold px-2 py-1 rounded-lg border border-green-500/30">
                  +12% this week
                </span>
              </div>
              
              <h4 className="text-4xl font-bold text-white mb-1">
                85<span className="text-green-400">%</span>
              </h4>
              <p className="text-slate-300 text-sm font-medium">
                Offer acceptance rate for prepared candidates.
              </p>
             </div>

             <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">
                  Weekly Stat
                </p>
                <p className="text-white text-sm hover:underline cursor-pointer flex items-center gap-1">
                  View Report <ChevronRight className="w-3 h-3" />
                </p>
             </div>
          </motion.div>

          {/* 4. Quick Tip / Discord (Wide 3x1 or similar, here using as bottom filler or category list) */}
          {/* Let's make a horizontal category scroller instead to fill space if needed, or another wide card */}
          <motion.div
            className="md:col-span-3 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Join the Engineering Circle</h4>
                <p className="text-slate-500 text-sm">Connect with 5,000+ developers sharing salary data & interview logs.</p>
              </div>
            </div>
            
            <button className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
              <Zap className="w-4 h-4" />
              Join Discord Community
            </button>
          </motion.div>

        </div>

        {/* Categories Pills - For navigation */}
        <div className="mt-12">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Browse by Pipeline Phase</p>
          <div className="flex flex-wrap gap-3">
            {blogData.categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all text-sm font-medium flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;
