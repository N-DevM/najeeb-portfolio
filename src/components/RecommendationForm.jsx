import { useContext } from 'react';
import { useFormInput } from '../hooks/useFormInput';
import { RecommendationsContext } from '../context/RecommendationsContext';

const RecommendationForm = () => {
  // Use the context to get the dispatch function
  const { dispatch } = useContext(RecommendationsContext);
  
  // Use our custom hook for form inputs
  const nameInput = useFormInput('');
  const messageInput = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageInput.value.trim() !== '') {
      const newRecommendation = {
        id: Date.now(), // Use a more robust ID in a real app
        text: messageInput.value,
        author: nameInput.value || 'Anonymous',
      };
      
      // Dispatch an action to the reducer
      dispatch({ type: 'ADD_RECOMMENDATION', payload: newRecommendation });
      
      // Reset form fields
      nameInput.reset();
      messageInput.reset();
    }
  };

  return (
    <div id="contact" className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <fieldset className="border border-gray-300 p-6 rounded-lg">
          <legend className="text-2xl font-semibold px-2 text-[#7600bc]">Leave a Recommendation</legend>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name (Optional)"
              {...nameInput} // Spread props from custom hook
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7600bc] focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              required
              {...messageInput} // Spread props from custom hook
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7600bc] focus:outline-none"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#7600bc] text-white font-bold rounded-lg hover:bg-[#5e0094] transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default RecommendationForm;