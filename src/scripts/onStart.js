import allProducts from './allProducts';
import setCurrentYear from './setCurrentYear';
import scrollToTop from './scrollToTop';

const onStart = () => {
  scrollToTop();
  allProducts();
  setCurrentYear();
}

export default onStart;
