import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TextSearchPage from '../pages/TextSearchPage';
import ImageSearchPage from '../pages/ImageSearchPage';
import ResultsPage from '../pages/ResultPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search" element={<TextSearchPage/>} />
    <Route path="/image-search" element={<ImageSearchPage />} />
    <Route path="/results" element={<ResultsPage />} />
  </Routes>
);
export default AppRoutes;