

import { Route } from "react-router-dom";


// Import Home Page
import HomePage from "./pages/Home.page";

import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
      
    </>
  );
}

export default App;



// coolors.co ----- website to pick amezing colors.
// https://smart-swatch.netlify.app/  ---------- To get shades of color
