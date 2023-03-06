import './App.css';
import { useContext } from 'react';
import Intro from './components/intro/intro';
import About from './components/about/about';
import TimeLine from './components/productList/timeline';
import Contact from './components/contact/contact';
import Toggle from './components/toggle/toggle';
import { ThemeContext } from './context';


const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white"
    }}>
      <Toggle />
      <Intro />
      <About />
      <TimeLine />
      <Contact />
    </div>
  )
}

export default App;