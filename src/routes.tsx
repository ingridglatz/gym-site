import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './pages/Home';
import { Plans } from './pages/Plans';
import { FAQ } from './pages/FAQ';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/faq" element={<FAQ />} />
    </Route>,
  ),
);
