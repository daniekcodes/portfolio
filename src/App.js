import './App.css';

import Intro from './components/intro/intro';
import About from './components/about/about';
import ProductList from './components/productList/productlist';
import Contact from './components/contact/contact';
import Toggle from './components/toggle/toggle';


const App = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App;



// https://www.youtube.com/watch?v=hQjlM-8C4Ps&list=PLj-4DlPRT48nfYgDK00oTjlDF4O0ZZyG8&index=25&ab_channel=LamaDev
// 1:18:27