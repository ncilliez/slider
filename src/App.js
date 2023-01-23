import React from "react";
import {useState} from "react";
import Bouton from "./compenents/bouton";
import Puces from "./compenents/puces";
import './Style.css';

function App() {




const [imageactuel, setImageactuel] = useState(1);
const images=[
    {id: 1, txt: '1.jpg'},
    {id: 2, txt: '2.jpg'},
    {id: 3, txt: '3.jpg'},
    {id: 4, txt: '4.jpg'},
    {id: 5, txt: '5.jpg'},
    {id: 6, txt: '6.jpg'}
];






const next = () =>{
  setTimeout(() => {
    if(imageactuel !== images.length){
      setImageactuel(imageactuel+1);
    }
    else{
      setImageactuel(1);
    }
  }, "300");

 
};



const previous = () =>{ 
  setTimeout(() => { 
    if(imageactuel === 1){
      setImageactuel(images.length);
      
    }
    else{
      setImageactuel(imageactuel-1);
    }
  }, "300");
};


const target = (variable, i)=>{

  setTimeout(() => { 
    variable = i+1;
    setImageactuel(variable);
  }, "300");

}


return <div className='slider'>

        <figure>
          <img src={`images/${imageactuel}.jpg`} alt={images[imageactuel-1].txt} />
        </figure>
        

        <div className='mesboutons'>
          <Bouton unbtn='previous' evenement={previous} icon='fa-solid fa-arrow-left'/>
          <Bouton unbtn='next' evenement={next} icon='fa-solid fa-arrow-right'/>
        </div>

        <div className="puces">
          <ul>
            {images.map((uneimage, i) => (
              
              <Puces cuneimage={uneimage} cimageactuel={imageactuel} ctarget={target} ci={i} />
      
            ))}      
          </ul>
        </div>

      </div>;

}


export default App;
