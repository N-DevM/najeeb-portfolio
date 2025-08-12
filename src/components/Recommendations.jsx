import { useContext } from 'react';
import { RecommendationsContext } from '../context/RecommendationsContext';
import RecommendationCard from './RecommendationCard';
import RecommendationForm from './RecommendationForm';
import Popup from './Popup';

const Recommendations = () => {
  // Get the global state from the context
  const { state } = useContext(RecommendationsContext);
  const { recommendations, showPopup } = state;

  return (
    <section id="recommendations" className="py-16 md:py-24 bg-gray-50 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7600bc] mb-12">Recommendations</h2>
      
      <div className="flex flex-wrap justify-center gap-8 px-4 mb-16">
        {recommendations.map(rec => (
          <RecommendationCard key={rec.id} text={rec.text} />
        ))}
      </div>

      <RecommendationForm />

      {/* The popup visibility is also controlled by the global state */}
      {showPopup && <Popup />}
    </section>
  );
};

export default Recommendations;