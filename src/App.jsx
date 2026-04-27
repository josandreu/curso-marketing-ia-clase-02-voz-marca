import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Presentation from './pages/Presentation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
