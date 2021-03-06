

import { Route } from "react-router-dom";


//import axios
import axios from "axios";

// Import Home Page
import HomePage from "./pages/Home.page";

// Import Movie page
import MoviePage from "./pages/Movie.page";

// Import Play Page
import Plays from "./pages/Playes.page";

//Import Default HOC
import DefaultHOC from "./HOC/Default.HOC";

// Import Movie HOC
import MovietHOC from "./HOC/Movie.HOC";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_MOVIEAPI_KEY;



function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovietHOC path="/movie/:id" exact component={MoviePage }/>
      <DefaultHOC path="/playes" exact component={Plays}/>      
    </>
  );
}

export default App;



// coolors.co ----- website to pick amezing colors.
// https://smart-swatch.netlify.app/  ---------- To get shades of color
