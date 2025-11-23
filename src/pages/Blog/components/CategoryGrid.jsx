import { motion } from 'framer-motion';
import { ChevronRight, GitCommit, FileCode, Rocket, Beaker, Tag, Scroll } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover } from '../../../utils/animations';
import blogData from '../../../data/blogData.json';

const iconMap = {
  GitCommit,
  FileCode,
  Rocket,
  Beaker,
  Tag,
  Scroll
};

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50/50 to-cyan-50/50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Explore by{' '}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Topic
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Dive deep into each phase of your career deployment pipeline
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogData.categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category }) => {
  const categoryArticles = blogData.articles.filter(
    article => article.category === category.id
  ).slice(0, 3);
  
  const Icon = iconMap[category.icon] || GitCommit;

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className="group cursor-pointer h-full"
      onClick={() => {/* TODO: Navigate to category page */}}
    >
      <motion.div
        className="h-full bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-300"
        variants={cardHover}
      >
        {/* Category Header */}
        <div className="mb-8">
          {/* Icon */}
          <motion.div 
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8" strokeWidth={2.5} />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

        {/* Recent Articles Preview */}
        <div className="space-y-4 mb-6">
          {categoryArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`} />
              <p className="text-sm text-slate-700 group-hover:text-sky-700 transition-colors line-clamp-2 leading-relaxed">
                {article.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div 
          className="flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-4 transition-all pt-4 border-t border-slate-100"
        >
          <span>View all articles</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CategoryGrid;
