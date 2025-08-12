import { useContext, useCallback } from 'react';
import { RecommendationsContext } from '../context/RecommendationsContext';
import CheckmarkIcon from '../assets/checkmark--outline.svg';

const Popup = () => {
  const { dispatch } = useContext(RecommendationsContext);

  // useCallback ensures this function isn't recreated on every render
  const handleClose = useCallback(() => {
    dispatch({ type: 'HIDE_POPUP' });
  }, [dispatch]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#e8bcf0] text-center p-8 rounded-lg shadow-xl w-11/12 max-w-md">
        <img src={CheckmarkIcon} alt="Success" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Your recommendation has been submitted!</h3>
        <button
          onClick={handleClose}
          className="px-8 py-2 bg-white text-[#7600bc] font-bold border-2 border-[#7600bc] rounded-lg hover:bg-gray-100 transition-colors"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Popup;