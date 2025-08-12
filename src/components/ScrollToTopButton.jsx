import { useScrollVisibility } from '../hooks/useScrollVisibility';

const ScrollToTopButton = () => {
  const isVisible = useScrollVisibility(200); // Show after 200px scroll

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 bg-[#7600bc] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#5e0094] transition-colors duration-300 z-40"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;