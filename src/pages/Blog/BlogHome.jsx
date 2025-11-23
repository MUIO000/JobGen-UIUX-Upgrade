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
import image1 from './images/article-images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg';
import image2 from './images/article-images/the-connected-narrative-aEv8ednzJ2E-unsplash.jpg';
import image3 from './images/article-images/icons8-team-CrW-TbykPBQ-unsplash.jpg';

// All images to preload
const imagesToPreload = [
  phase1Image,
  phase2Image,
  phase3Image,
  phase4Image,
  phase5Image,
  phase6Image,
  image1,
  image2,
  image3,
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

