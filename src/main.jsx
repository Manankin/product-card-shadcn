import { createRoot } from 'react-dom/client';
import ProductCard from './components/ProductCard';

const element =document.querySelector('#root');
createRoot(element).render(
  <div>
    <ProductCard />
  </div>
);