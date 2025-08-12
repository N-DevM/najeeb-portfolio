import { createContext, useReducer, useMemo } from 'react';
import { initialRecommendations } from '../data';

// Create the context
export const RecommendationsContext = createContext();

// Define the reducer function to handle state changes
const recommendationsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECOMMENDATION':
      return {
        ...state,
        recommendations: [...state.recommendations, action.payload],
        showPopup: true,
      };
    case 'HIDE_POPUP':
      return {
        ...state,
        showPopup: false,
      };
    default:
      return state;
  }
};

// Create the Provider component
export const RecommendationsProvider = ({ children }) => {
  const initialState = {
    recommendations: initialRecommendations,
    showPopup: false,
  };

  const [state, dispatch] = useReducer(recommendationsReducer, initialState);

  // useMemo ensures the context value object is only recreated when state changes
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <RecommendationsContext.Provider value={contextValue}>
      {children}
    </RecommendationsContext.Provider>
  );
};