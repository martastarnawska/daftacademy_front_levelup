import allProducts from './allProducts';
import setCurrentYear from './setCurrentYear';
import scrollToTop from './scrollToTop';
import createExposition from './createExposition';
import createSliderItems from './createSliderItems';
import createCollections from './createCollections';

const onStart = () => {
  createExposition(4209);
  createSliderItems();
  createCollections();
  scrollToTop();
  allProducts();
  setCurrentYear();
}

export default onStart;
