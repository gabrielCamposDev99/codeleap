import React from 'react';
import {
  BrowserRouter, Outlet, Route, Routes
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from './components/theme-provider.tsx';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthProvider.tsx';
import { ProtectedRoute } from './components/protected-route.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route
                element={(
                  <ProtectedRoute>
                    <Outlet />
                  </ProtectedRoute>
                )}
              >
                <Route path="private" element={<div>private</div>} />
              </Route>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
