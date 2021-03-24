import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


function MovieDetails(props){

    return (


           
           <div>

                { props.movie ? (
                    <div>
  <h1>{props.movie.title}</h1>
  <p>{props.movie.description}</p>
  <FontAwesomeIcon icon={faCoffee} />
  </div>
                ) : null}

             
            </div>
            
         
         

    )


}

export default MovieDetails;