import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  /* </React.StrictMode> */
);
