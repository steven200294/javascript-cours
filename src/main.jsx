import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Rooter from './Rooter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rooter />
  </StrictMode>
);
