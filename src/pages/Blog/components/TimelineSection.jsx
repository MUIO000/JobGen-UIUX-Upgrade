/**
 * Fiber Optic Timeline Component
 * 
 * Container Structure:
 * - Parent Container: The component's root <div> with ref={containerRef}
 *   This is the scroll target for useScroll hook
 * 
 * - Scroll Detection:
 *   The timeline's scroll progress is calculated based on the container's
 *   position relative to the viewport. When the container enters/leaves
 *   the viewport, scrollYProgress changes from 0 to 1.
 * 
 * - Blue Fill Animation:
 *   The central fiber optic tube fills from top to bottom as scrollYProgress
 *   increases. This creates the "flowing light" effect.
 * 
 * - Phase Node Activation:
 *   Each phase node detects when the blue fill passes through it and changes
 *   the Phase Tag color from slate (gray) to sky blue.
 */

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, FileCode, Rocket, Beaker, Tag, Scroll, ArrowRight } from 'lucide-react';
import { fadeInLeft, fadeInRight, timelineItem } from '../../../utils/animations';
import blogData from '../../../data/blogData.json';

// Import phase images
import phase1Image from '../images/phase-images/phase-1.jpg';
import phase2Image from '../images/phase-images/phase-2.jpg';
import phase3Image from '../images/phase-images/phase-3.jpg';
import phase4Image from '../images/phase-images/phase-4.jpg';
import phase5Image from '../images/phase-images/phase-5.jpg';
import phase6Image from '../images/phase-images/phase-6.jpg';

// Import article thumbnail images (for Recommended Logs cards)
import article1 from '../images/article-images/article-1.jpg';
import article2 from '../images/article-images/article-2.jpg';
import article3 from '../images/article-images/article-3.jpg';
import article4 from '../images/article-images/article-4.jpg';
import article5 from '../images/article-images/article-5.jpg';
import article6 from '../images/article-images/article-6.jpg';

// Phase images array - each index corresponds to a phase
const phaseImages = [
  phase1Image,  // Phase 1: init
  phase2Image,  // Phase 2: build
  phase3Image,  // Phase 3: deploy
  phase4Image,  // Phase 4: test
  phase5Image,  // Phase 5: release
  phase6Image   // Phase 6: logs
];

// Article thumbnail images for Recommended Logs cards
const articleImages = [article1, article2, article3, article4, article5, article6];

// Randomly shuffle function for article images
const getRandomArticleImage = (articleId, index) => {
  // Create a deterministic but seemingly random selection based on article ID
  // This ensures the same article always gets the same image (good for preloading)
  // Uses a simple hash-like function to distribute images more randomly
  let hash = 0;
  const str = articleId + index.toString();
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Make sure we get a positive number
  const imageIndex = Math.abs(hash) % articleImages.length;
  return articleImages[imageIndex];
};

// Icon mapping for each phase
const phaseIcons = {
  init: Terminal,
  build: FileCode,
  deploy: Rocket,
  test: Beaker,
  release: Tag,
  logs: Scroll
};

const FiberOpticTimeline = () => {
  // Container Reference: This is the timeline section's root container
  // The scroll detection is relative to this container's position in the viewport
  const containerRef = useRef(null);
  
  // Scroll Progress Detection:
  // - target: containerRef (the timeline section itself)
  // - offset: ["start 80%", "end 50%"]
  //   * "start 80%": When container's top reaches 80% down the viewport, progress = 0
  //   * "end 50%": When container's bottom reaches 50% (middle) of viewport, progress = 1
  // This means the fill animation happens as the user scrolls through the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  // Smooth spring animation for the main fiber fill
  // scaleY transforms the fill from 0 (top) to 1 (bottom) as scrollYProgress increases
  // Clamp scrollYProgress to ensure it's always between 0 and 1, prevent initial jitter
  const clampedProgress = useTransform(scrollYProgress, (latest) => {
    // Ensure value is always between 0 and 1, with safe defaults
    if (latest === null || latest === undefined || isNaN(latest)) return 0;
    return Math.max(0, Math.min(1, latest));
  });
  const minProgress = useTransform(clampedProgress, v => 0.01 + v * 0.99);
  const scaleY = useSpring(minProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0001,
    mass: 0.5,
    restSpeed: 0.01
  });

  return (
    // Outer Wrapper: Contains Header and Timeline separately
    <div 
      id="timeline-start" 
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30"
    >
      {/* Section Header - Outside of scroll container */}
      <div className="text-center pt-32 pb-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Career{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-mono">
              CI/CD Pipeline
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A systematic workflow to build, test, and deploy your career.
          </p>
        </motion.div>
      </div>

      {/* Timeline Scroll Container - This is the scroll target */}
      {/* containerRef only points to the actual timeline content, not the header */}
      <div 
        className="relative py-16 min-h-screen" 
        ref={containerRef}
        style={{
          transform: 'translateZ(0)',
          willChange: 'auto'
        }}
      >
        {/* Main Timeline Container */}
        <div 
          className="relative max-w-7xl mx-auto px-4 md:px-8"
        >
        
        {/* Central Fiber Optic Tube */}
        <div 
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 z-0"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        >
          {/* Background tube */}
          <div className="absolute inset-0 bg-slate-200/50 rounded-full" />
          
          {/* Flowing liquid fill - Animated via Framer Motion */}
          <motion.div 
            className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-full origin-top"
            // initial={{ scaleY: 0 }}
            initial={false}
            style={{ 
              scaleY: scaleY,
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)'
            }}
            layout={false}
          >
            {/* Inner shimmer effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent rounded-full"
              animate={{ 
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-48 md:space-y-56 relative z-10">
          {blogData.timeline.map((step, index) => (
            <TimelineNode 
              key={step.id} 
              step={step} 
              index={index}
              containerRef={containerRef}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

// ... existing imports ...

const TimelineNode = ({ step, index, containerRef }) => {
  const nodeRef = useRef(null);
  const imageOnRight = index % 2 === 0;
  const PhaseIcon = phaseIcons[step.step] || Terminal;
  
  const articles = blogData.articles.filter(article => 
    step.articles.includes(article.id)
  ).slice(0, 3);

  // Full viewport tracking for bi-directional fade
  // Offset adjusted so animation starts when element is 15% from bottom of viewport
  const { scrollYProgress } = useScroll({
    target: nodeRef,
    offset: ["start 85%", "end 15%"] // progress = 0 at 85% viewport (15% from bottom), progress = 1 at 15% viewport
  });

  // Map scroll progress to opacity/y/scale for enter/exit animations
  // [0, 0.2]: Fade In (enter from bottom)
  // [0.2, 0.8]: Stay Visible
  // [0.8, 1]: Fade Out (exit to top)
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [100, 0, 0, -100]);

  // Node Hub specific animations - Optimized
  const hubScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 1.2, 1]);
  const hubBorderColor = useTransform(scrollYProgress, [0.2, 0.5, 0.8], ["rgb(241, 245, 249)", "rgb(34, 211, 238)", "rgb(241, 245, 249)"]);
  // Removed expensive box-shadow animation
  const hubIconColor = useTransform(scrollYProgress, [0.2, 0.5, 0.8], ["rgb(148, 163, 184)", "rgb(14, 165, 233)", "rgb(148, 163, 184)"]);

  return (
    <motion.div 
      ref={nodeRef} 
      className="relative grid md:grid-cols-2 gap-12 md:gap-32 items-center min-h-[400px]"
      style={{ opacity, scale, y }} // Driven directly by scroll
    >
      
      {/* Central Node (Hub) */}
      <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
          className="relative w-16 h-16 rounded-full flex items-center justify-center bg-white border-4 border-slate-100 shadow-lg"
          style={{
            borderColor: hubBorderColor,
            scale: hubScale,
            willChange: 'transform, border-color',
            backfaceVisibility: 'hidden'
          }}
          layout={false}
        >
          <PhaseIcon 
            className="w-7 h-7 text-slate-400" 
            style={{
              color: hubIconColor,
              willChange: 'color'
            }} 
            strokeWidth={2} 
          />
        </motion.div>
      </div>

      {/* Left Column */}
      <div className={`pl-16 md:pl-0 ${imageOnRight ? 'md:col-start-1 md:pr-8' : 'md:col-start-1 md:pr-8'}`}>
        {imageOnRight ? (
          <ContentCard step={step} articles={articles} isRightAligned={false} scrollYProgress={scrollYProgress} />
        ) : (
          <ImageCard step={step} icon={PhaseIcon} index={index} scrollYProgress={scrollYProgress} />
        )}
      </div>

      {/* Right Column */}
      <div className={`pl-16 md:pl-0 ${imageOnRight ? 'md:col-start-2 md:pl-8' : 'md:col-start-2 md:pl-8'}`}>
        {imageOnRight ? (
          <ImageCard step={step} icon={PhaseIcon} index={index} scrollYProgress={scrollYProgress} />
        ) : (
          <ContentCard step={step} articles={articles} isRightAligned={false} scrollYProgress={scrollYProgress} />
        )}
      </div>

    </motion.div>
  );
};

const ContentCard = ({ step, articles, isRightAligned, scrollYProgress }) => {
  // Content activation based on scroll
  const isActive = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const contentX = useTransform(scrollYProgress, [0, 0.15], isRightAligned ? [50, 0] : [-50, 0]); // Slight slide in

  // Recommended Logs Horizontal Slide-in Animation
  // Each card slides in at a slightly different scroll threshold
  const card1X = useTransform(scrollYProgress, [0.1, 0.25], [100, 0]);
  const card2X = useTransform(scrollYProgress, [0.15, 0.3], [100, 0]);
  const card3X = useTransform(scrollYProgress, [0.2, 0.35], [100, 0]);
  
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  // Interpolate colors
  const bgColor = useTransform(scrollYProgress, [0.2, 0.4, 0.6], ["rgb(241, 245, 249)", "rgb(224, 242, 254)", "rgb(241, 245, 249)"]);
  const textColor = useTransform(scrollYProgress, [0.2, 0.4, 0.6], ["rgb(71, 85, 105)", "rgb(3, 105, 161)", "rgb(71, 85, 105)"]);

  return (
    <motion.div
      className={`space-y-4 ${isRightAligned ? 'md:items-end' : 'md:items-start'}`}
      style={{ x: contentX }} // Base slide for whole content
    >
      {/* Phase Tag */}
      <motion.div 
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold ${isRightAligned ? 'md:ml-auto' : ''}`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          willChange: 'background-color, color'
        }}
      >
        {step.step}
      </motion.div>

      {/* Title & Desc */}
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
        {step.title}
      </h3>
      <p className="text-lg text-cyan-700 font-medium">{step.subtitle}</p>
      
      <p className="text-slate-600 leading-relaxed">
        {step.description}
      </p>

      {/* Articles List - Horizontal Slide In */}
      <div className="pt-6 space-y-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Recommended Logs
        </p>
        <div className="grid grid-cols-1 gap-3 overflow-visible">
          {articles.map((article, i) => {
            // Select transform based on index
            const x = i === 0 ? card1X : i === 1 ? card2X : card3X;
            const opacity = i === 0 ? card1Opacity : i === 1 ? card2Opacity : card3Opacity;
            
            return (
              <motion.div 
                key={article.id}
                className="group relative rounded-xl border-2 border-slate-100 bg-white hover:border-sky-200 hover:shadow-lg transition-all cursor-pointer"
                style={{ 
                  x, 
                  opacity,
                  willChange: 'transform, opacity' // Hint browser to optimize
                }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Thumbnail Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200 bg-slate-100">
                    <img 
                      src={getRandomArticleImage(article.id, i)} 
                      alt={article.title}
                      decoding="async"
                      loading="eager" // Ensure it's ready since preloaded
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ willChange: 'transform' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      {article.category}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        className={`mt-4 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold shadow-lg hover:bg-cyan-600 transition-colors inline-flex items-center gap-2 ${isRightAligned ? 'md:flex-row-reverse' : ''}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => window.location.href = step.cta.link}
      >
        {step.cta.text}
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

const ImageCard = ({ step, icon: Icon, index, scrollYProgress }) => {
  const imageUrl = phaseImages[index] || phase1Image;
  
  // Image specific parallax/fade
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  
  return (
    <motion.div
      className="hidden md:block h-full"
      style={{ 
        scale,
        willChange: 'transform' // Hint optimization
      }}
    >
      <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-100 shadow-xl group hover:shadow-2xl hover:border-sky-200 transition-all duration-300`}>
        {/* Preloaded Image - Optimized */}
        <img 
          src={imageUrl} 
          alt={`${step.title} illustration`}
          decoding="async"
          loading="eager"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform'
          }}
        />
        
        {/* Gradient Overlay - Optimized opacity transition */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} style={{ willChange: 'opacity' }} />
        
        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
              <Icon className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <div className="text-sm font-semibold">{step.title}</div>
              <div className="text-xs text-slate-300 font-mono">Phase {index + 1}</div>
            </div>
          </div>
        </div>

        {/* Corner Accents - Simplified */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default FiberOpticTimeline;
