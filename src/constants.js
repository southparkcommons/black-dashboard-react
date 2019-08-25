/**
 * Global Constants
 */

// The backend GRAPHQL endpoint
export const GRAPHQL_ENDPOINT = (process.env.NODE_ENV === 'development' ?
  'https://backend-commons-web.onrender.com/graphql' :
  'https://backend-commons-web.onrender.com/graphql'
);

// The color themes for the app
export const THEME = {
  background: '#0A0A0A',
  black: '#000000',
  gold: '#DCA55E',
  text: '#f3f4f5',
  gray: '#A9A9A9',
  darkGray: '#333333',
  link: '#fff',
  error: '#FF5555',
  label: '#b6c4d2',
  lightGray: '#999',
  mediumGray: '#888',
  blue: '#0A16F2',
};
