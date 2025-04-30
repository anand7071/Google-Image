
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import "./styles/global.scss"

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
export default App