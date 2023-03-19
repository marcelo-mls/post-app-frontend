import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Wall from '../pages/wall';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/wall" />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/wall/login" element={<Login />} />
        <Route path="/wall/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
