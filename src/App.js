

import { Route } from "react-router-dom";

import Temp from "./components/temp";
import DefaultHOC from "./HOC/Default.HOC";
function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={Temp} />
      
    </>
  );
}

export default App;



// coolors.co ----- website to pick amezing colors.
// https://smart-swatch.netlify.app/  ---------- To get shades of color
