import { TextField, Stack, Button } from "@mui/material";
import { useState } from 'react';



function Random(){
  const [result,setResult]= useState(0)
  const [weight,setWeight]= useState(0)
  const [height,setHeight]= useState(0)
  const [isWeightValid,setIsWeightValid] = useState(true)
  const [isHeightValid,setIsHeightValid] = useState(true)


  const validateInput = (e)=>{
    const {name,value} = e.target 
    if(!!value.match(/^[0-9]+$/)){
      if(name==="weight"){
        setWeight(value)
        setIsWeightValid(true)
      } else if(name==="height"){
        setHeight(value)
        setIsHeightValid(true)
      }
    }else{
      if(name==="weight"){
        setWeight(value)
        setIsWeightValid(false)
    }else if(name==="height"){
      setHeight(value)
      setIsHeightValid(false)
    }
  }
}  

const handleCalculate = (e)=>{
  e.preventDefault()
  if(!weight || !height){
    alert("Please enter values..")
  }else{
    setResult((weight/(height*height))*10000)
  } if(result<18){
    alert("You are underweight!!")
  }else if(result>25){
    alert("You are overweight!!")
  }else{
    alert("You are healthy!!!")
  }
}

const handleReset = ()=>{
  setResult(0)
  setWeight(0)
  setHeight(0)
  setIsWeightValid(true)
  setIsHeightValid(true)
}
    return(
        <div style={{height:'100vh', background:'#488785'}} className='d-flex justify-content-center align-items-center w-100'>

      <div style={{width:'500px', background:'#a1bff0'}} className='p-5 rounded'>
      <h3>BMI App</h3>
      <p>Calculate your BMI using below app</p>

      <div style={{height:'150px', background:'#598a94'}} className="interst-card w-100  mt-5 d-flex justify-content-center align-items-center text-light rounded flex-column shadow">
        <h1> {result} </h1>
        <p className='fw-bolder'>BMI</p>
      </div>
      <form className="mt-5" onSubmit={handleCalculate}>
        <div className="mb-3">
        <TextField style={{color:'red'}} className='w-100' id="standard-basic" label="Weight[KG]" variant="standard"
        value={weight || ""} name='weight' onChange={(e)=>validateInput(e)} />
        </div>
        {
          !isWeightValid &&
          <div className="mb-3 text-danger">
            *Please Enter valid weight
          </div>
        }
        <div className="mb-3">
        <TextField className='w-100' id="standard-basic" label="Height[CM]" variant="standard"
        value={height || ""} name='height' onChange={(e)=>validateInput(e)} />
        </div>
        {
          !isHeightValid &&
          <div className="mb-3 text-danger">
            *Please Enter valid Height
          </div>
        }

        <Stack direction="row" spacing={2}>
            <Button type='submit' color="success" style={{height:'70px', width:'200px'}} variant="contained" disabled={isWeightValid && isHeightValid?false:true}>Calculate</Button>
              
          
            <Button onClick={handleReset} color="error" style={{height:'70px', width:'200px'}} variant="contained">Clear</Button>
  
            </Stack>

      </form>
      </div>

    </div>
    )
}
export default Random;