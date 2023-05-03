import { Routes, Route } from 'react-router-dom';
import { Home, About, FormPage, Page404 } from '../../pages';
import { ROUTES } from './routes';

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.form} element={<FormPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
