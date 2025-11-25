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
import image2 from '../images/article-images/the-connected-narrative-aEv8ednzJ2E-unsplash.jpg';
import image3 from '../images/article-images/icons8-team-CrW-TbykPBQ-unsplash.jpg';
import image1 from '../images/article-images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg';

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
const articleImages = [image1, image2, image3];

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

const TimelineNode = ({ step, index, containerRef }) => {
  const nodeRef = useRef(null);
  // Phase 1 (index 0): 图片在右，文字在左
  // Phase 2 (index 1): 图片在左，文字在右
  // Phase 3 (index 2): 图片在右，文字在左
  // 奇数索引 (0, 2, 4): 图片在右，文字在左
  // 偶数索引 (1, 3, 5): 图片在左，文字在右
  const imageOnRight = index % 2 === 0; // Phase 1, 3, 5: image right
  const PhaseIcon = phaseIcons[step.step] || Terminal;
  
  // Get relevant articles
  const articles = blogData.articles.filter(article => 
    step.articles.includes(article.id)
  ).slice(0, 3); // Top 3 articles

  // Calculate progress relative to this specific node
  const { scrollYProgress } = useScroll({
    target: nodeRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress into activation state (0 to 1)
  const isActive = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={nodeRef} className="relative grid md:grid-cols-2 gap-12 md:gap-32 items-center min-h-[400px]">
      
      {/* Central Node (Hub) */}
      <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
          className="relative w-16 h-16 rounded-full flex items-center justify-center bg-white border-4 border-slate-100 shadow-lg"
          initial={{ scale: 1 }}
          style={{
            borderColor: useTransform(scrollYProgress, [0, 0.5], ["rgb(241, 245, 249)", "rgb(34, 211, 238)"]), // slate-100 to cyan-400
            boxShadow: useTransform(scrollYProgress, [0, 0.5], ["0 4px 6px -1px rgba(0, 0, 0, 0.1)", "0 0 30px rgba(34, 211, 238, 0.6)"]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]),
            willChange: 'transform, border-color, box-shadow',
            backfaceVisibility: 'hidden'
          }}
          layout={false}
        >
          <PhaseIcon 
            className="w-7 h-7 text-slate-400" 
            style={{
              color: useTransform(scrollYProgress, [0, 0.5], ["rgb(148, 163, 184)", "rgb(14, 165, 233)"]), // slate-400 to sky-500
              willChange: 'color'
            }} 
            strokeWidth={2} 
          />
        </motion.div>
      </div>

      {/* Left Column - Text when imageOnRight, Image when !imageOnRight */}
      <div className={`pl-16 md:pl-0 ${imageOnRight ? 'md:col-start-1 md:pr-8' : 'md:col-start-1 md:pr-8'}`}>
        {imageOnRight ? (
          <ContentCard step={step} articles={articles} isRightAligned={false} scrollYProgress={scrollYProgress} />
        ) : (
          <ImageCard step={step} icon={PhaseIcon} index={index} />
        )}
      </div>

      {/* Right Column - Image when imageOnRight, Text when !imageOnRight */}
      <div className={`pl-16 md:pl-0 ${imageOnRight ? 'md:col-start-2 md:pl-8' : 'md:col-start-2 md:pl-8'}`}>
        {imageOnRight ? (
          <ImageCard step={step} icon={PhaseIcon} index={index} />
        ) : (
          <ContentCard step={step} articles={articles} isRightAligned={false} scrollYProgress={scrollYProgress} />
        )}
      </div>

    </div>
  );
};

const ContentCard = ({ step, articles, isRightAligned, scrollYProgress }) => {
  // Transform scroll progress to determine if phase is active (when progress > 0.4)
  // When blue fill passes through, the tag should turn blue-dominant
  const isActive = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 1, 1]);
  
  // Interpolate colors based on activation
  // From slate (inactive) to sky blue (active)
  const bgColor = useTransform(
    isActive,
    [0, 1],
    ["rgb(241, 245, 249)", "rgb(224, 242, 254)"] // slate-100 to sky-100
  );
  const textColor = useTransform(
    isActive,
    [0, 1],
    ["rgb(71, 85, 105)", "rgb(3, 105, 161)"] // slate-600 to sky-700
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`space-y-4 ${isRightAligned ? 'md:items-end' : 'md:items-start'}`}
    >
      {/* Phase Tag - Dynamic color based on scroll progress */}
      <motion.div 
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold ${isRightAligned ? 'md:ml-auto' : ''}`}
        initial={{ backgroundColor: "rgb(241, 245, 249)", color: "rgb(71, 85, 105)" }}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          willChange: 'background-color, color',
          backfaceVisibility: 'hidden'
        }}
        layout={false}
      >
        {step.step}
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
        {step.title}
      </h3>
      <p className="text-lg text-cyan-700 font-medium">{step.subtitle}</p>
      
      {/* Description */}
      <p className="text-slate-600 leading-relaxed">
        {step.description}
      </p>

      {/* Articles List - Three Cards with Images */}
      <div className="pt-6 space-y-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Recommended Logs
        </p>
        <div className="grid grid-cols-1 gap-3">
          {articles.map((article, i) => (
            <motion.div 
              key={article.id}
              className="group relative rounded-xl border-2 border-slate-100 bg-white hover:border-sky-200 hover:shadow-lg transition-all cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                delay: i * 0.15, 
                duration: 0.5, 
                ease: [0.22, 1, 0.36, 1] // 自定义缓动曲线，更流畅
              }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-center gap-4 p-4">
                {/* Thumbnail Image - Preloaded */}
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200 bg-slate-100">
                  <img 
                    src={articleImages[i % 3]} 
                    alt={article.title}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{
                      willChange: 'transform',
                      backfaceVisibility: 'hidden'
                    }}
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
          ))}
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

const ImageCard = ({ step, icon: Icon, index }) => {
  // Each phase uses its corresponding image from phaseImages array
  const imageUrl = phaseImages[index] || phase1Image; // Fallback to phase1Image if index out of range
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden md:block h-full"
    >
      <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-100 shadow-xl group hover:shadow-2xl hover:border-sky-200 transition-all duration-300`}>
        {/* Preloaded Image - No lazy loading needed */}
        <img 
          src={imageUrl} 
          alt={`${step.title} illustration`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
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

        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default FiberOpticTimeline;
