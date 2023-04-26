import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home, About, FormPage, Page404 } from './pages';
import './css/entry.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </>
  );
}
