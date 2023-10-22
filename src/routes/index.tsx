import { Outlet, Route, Routes } from 'react-router-dom';
import App from '@/App';
import { BasicRoute } from '@/components/basic-route';
import { ProtectedRoute } from '@/components/protected-route';
import { ErrorPage } from '@/pages/ErrorPage';
import PostsView from '@/pages/Posts';

export const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <BasicRoute>
          <Outlet />
        </BasicRoute>
      )}
    >
      <Route path="/" element={<App />} />
    </Route>
    <Route
      element={(
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      )}
    >
      <Route path="posts" element={<PostsView />} />
    </Route>

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);
