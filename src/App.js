import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import ScrollToTopButton from './components/ScrollToTopButton';
import { RecommendationsProvider } from './context/RecommendationsContext';

function App() {
  return (
    // Wrap the components that need context with the provider
    <RecommendationsProvider>
      <div className="font-sans bg-white text-gray-800">
        <Header />
        <main className="container mx-auto px-4 md:px-6 py-8">
          <About />
          <Skills />
          <Projects />
          <Recommendations />
        </main>
        <ScrollToTopButton />
      </div>
    </RecommendationsProvider>
  );
}

export default App;