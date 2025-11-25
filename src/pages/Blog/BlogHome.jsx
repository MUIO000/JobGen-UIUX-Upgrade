import { AnimatePresence } from 'framer-motion';
import BlogLayout from './BlogLayout';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import CategoryGrid from './components/CategoryGrid';
import CTASection from './components/CTASection';
import LoadingScreen from './components/LoadingScreen';
import useImagePreloader from './hooks/useImagePreloader';

// Import all images that need to be preloaded
import phase1Image from './images/phase-images/phase-1.jpg';
import phase2Image from './images/phase-images/phase-2.jpg';
import phase3Image from './images/phase-images/phase-3.jpg';
import phase4Image from './images/phase-images/phase-4.jpg';
import phase5Image from './images/phase-images/phase-5.jpg';
import phase6Image from './images/phase-images/phase-6.jpg';
import article1 from './images/article-images/article-1.jpg';
import article2 from './images/article-images/article-2.jpg';
import article3 from './images/article-images/article-3.jpg';
import article4 from './images/article-images/article-4.jpg';
import article5 from './images/article-images/article-5.jpg';
import article6 from './images/article-images/article-6.jpg';

// All images to preload
const imagesToPreload = [
  phase1Image,
  phase2Image,
  phase3Image,
  phase4Image,
  phase5Image,
  phase6Image,
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
];

const BlogHome = () => {
  const { loading, progress } = useImagePreloader(imagesToPreload);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" progress={progress} />}
      </AnimatePresence>
      
      {!loading && (
        <BlogLayout>
          <HeroSection />
          <TimelineSection />
          <CategoryGrid />
          <CTASection />
        </BlogLayout>
      )}
    </>
  );
};

export default BlogHome;

