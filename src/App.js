import { useRef, useState } from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  let [valObj,setVal] =useState({
    x_pos:"0px",
    y_pos:"0px",
    rotate:"0deg"
  })
  function updateVal(payload){
         let tempObj = {...valObj}
         if( typeof(payload.x_pos)==="string"){
          tempObj.x_pos =payload.x_pos+"px"
         }
         if( typeof(payload.y_pos)==="string"){
          tempObj.y_pos =payload.y_pos+"px"
         }
         if( typeof(payload.rotate)==="string"){
          tempObj.rotate =payload.rotate+"deg"
         }
         setVal(tempObj)
  }
  return (
    <div className="app">
      <Box valObj={valObj}/>
    <div> 
<div className='slider'>
  <label htmlFor="x_pos">X ({valObj.x_pos})</label>
  <input onChange={(e)=>updateVal({x_pos:e.target.value})}  type="range" name="x_pos"  min="0" max="300" defaultValue={0}/>
</div>
<div className='slider'>
  <label htmlFor="y_pos">Y ({valObj.y_pos})</label>
  <input onChange={(e)=>updateVal({y_pos:e.target.value})}type="range" name="y_pos"  min="0" max="300" defaultValue={0}/>
</div>
<div className='slider'>
  <label htmlFor="rot">Rotate ({valObj.rotate})</label>
  <input onChange={(e)=>updateVal({rotate:e.target.value})} type="range" name="rot"  min="0" max="360" defaultValue={0}/>
</div>
      
    </div>
    </div>
  );
}

export default App;
