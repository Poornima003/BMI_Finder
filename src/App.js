import './App.css';
import Random from './components/Random';
// import { TextField, Stack, Button } from "@mui/material";


function App() {
  return (
    <div style={{height:'100vh', background:'#a1bff0'}} >
      
<div className='d-flex justify-content-center '>
       <h2 style={{color:'blue'}}><i>BMI[Body Mass Index] Finder</i></h2> <br /> <br /><br /><br /> 
       
   

      </div> 
      <div style={{width:'900px', paddingLeft:'30px'}}><p>Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m², resulting from mass in kilograms and height in metres. <br /><br /> </p></div>  
      <div  style={{paddingLeft:'450px'}}><p>If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. <br /> <br /> </p></div>  
      <div  style={{width:'900px', paddingLeft:'30px'}}> <p>Here is an application called BMI Finder, which helps you to find your BMI. All you have to do is please enter your weight and height and the app will calculate your BMI and will return the value to you. With the given value you can check whether it is stable or not</p>
        
         </div> 
         <div> <Random/> </div>
    </div>
    
  );
}

export default App;
