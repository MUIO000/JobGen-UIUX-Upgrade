import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight, Share2, Bookmark } from 'lucide-react';
import BlogLayout from './BlogLayout';
import blogData from '../../data/blogData.json';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Import article thumbnail images (same as TimelineSection)
import article1 from './images/article-images/article-1.jpg';
import article2 from './images/article-images/article-2.jpg';
import article3 from './images/article-images/article-3.jpg';
import article4 from './images/article-images/article-4.jpg';
import article5 from './images/article-images/article-5.jpg';
import article6 from './images/article-images/article-6.jpg';

// Article thumbnail images array
const articleImages = [article1, article2, article3, article4, article5, article6];

// Get article image based on articleId (same logic as TimelineSection)
const getArticleImage = (articleId) => {
  // Create a deterministic but seemingly random selection based on article ID
  // This ensures the same article always gets the same image
  let hash = 0;
  const str = articleId;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Make sure we get a positive number
  const imageIndex = Math.abs(hash) % articleImages.length;
  return articleImages[imageIndex];
};

const ArticlePage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top on article change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const article = blogData.articles.find(a => a.id === articleId);
  
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const phase = blogData.timeline.find(p => p.articles.includes(articleId));
  const category = blogData.categories.find(c => c.id === article.category);
  
  // Get cover image - use article's own image (same as Recommended Logs cards)
  const coverImage = getArticleImage(articleId);
  
  // Filter related articles
  const relatedArticles = blogData.articles
    .filter(a => a.category === article.category && a.id !== articleId)
    .slice(0, 3);
    
  // Fallback if not enough related articles in same category
  if (relatedArticles.length < 3) {
    const others = blogData.articles
      .filter(a => a.id !== articleId && !relatedArticles.find(r => r.id === a.id))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...others);
  }

  // Combine content array into a single markdown string if it's an array
  const content = Array.isArray(article.content) 
    ? article.content.join('\n\n') 
    : (article.content || "Content not available.");

  const navigateToBlog = (target = '/blog') => {
    if (sessionStorage.getItem('blogScrollPosition')) {
      sessionStorage.setItem('skipHeroAnimation', 'true');
    }
    navigate(target);
  };

  return (
    <BlogLayout>
      <article className="min-h-screen pb-20">
        {/* Header / Hero */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
            <motion.button 
              onClick={() => navigateToBlog('/blog')}
              className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors mb-8 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Timeline
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${category?.color || 'from-slate-500 to-slate-600'} text-white`}>
                  {category?.name || 'Article'}
                </span>
                {phase && (
                  <span className="text-xs font-mono text-slate-500 bg-slate-200 px-2 py-1 rounded">
                    Phase: {phase.step}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Cover Image */}
          <motion.div 
            className="mb-12 rounded-2xl overflow-hidden shadow-lg aspect-video"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src={coverImage} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            className="prose prose-lg prose-slate mx-auto prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ReactMarkdown 
              components={{
                // Custom renderer for links to add styling classes if needed (though prose handles most)
                a: ({node, ...props}) => (
                  <a {...props} className="text-sky-600 font-bold hover:underline transition-colors" />
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </motion.div>

          {/* Product CTA - Important feature */}
          {phase && (
            <motion.div 
              className="my-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="relative z-10 md:flex items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to apply this?</h3>
                  <p className="text-slate-300 mb-6 md:mb-0 max-w-md">
                    {phase.description} Use our <strong>{phase.title}</strong> tools to accelerate your career.
                  </p>
                </div>
                <button
                  onClick={() => window.location.href = phase.cta.link}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 rounded-xl font-bold shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  {phase.cta.text}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Related Articles */}
        <div className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Recommended Logs</h2>
              <button 
                onClick={() => navigateToBlog('/blog')}
                className="text-sky-600 font-semibold hover:text-sky-700 flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((item, index) => (
                <div 
                  key={item.id}
                  onClick={() => navigate(`/blog/article/${item.id}`)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:border-sky-200 transition-all cursor-pointer group"
                >
                  {/* Article Cover Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={getArticleImage(item.id)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-xs font-mono text-slate-500 mb-3 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${blogData.categories.find(c => c.id === item.category)?.color}`} />
                      {blogData.categories.find(c => c.id === item.category)?.name}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 mt-auto">
                      <span>{item.readTime}</span>
                      <span className="group-hover:translate-x-1 transition-transform text-sky-500">Read Article →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
};

export default ArticlePage;

