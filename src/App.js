import React from 'react';
import './App.css';


import { Steps, Step } from "react-step-builder";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Finalstep from "./components/Finalstep";

function App() {

// const [movies, setMovie] = useState([]);
// const [selectedMovie, setSelectedMovie] = useState(null);



  return (
    <div className="App">
    <Steps>
      <Step component={Step1} />
      <Step component={Step2} />
      <Step component={Finalstep} />
    </Steps>
  </div>
    // <div className="App">
    //   <header className="App-header">
    //    <h1> Movie Rater</h1>
     
    //   </header>
      
    //   <div className='layout'>
    //     <MovieList movies={movies} movieClicked={movieClicked}/>

        
    //      <MovieDetails movie={selectedMovie}/>
    //    </div>
       
    // </div>
    
  );
}

export default App;
