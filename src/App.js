
import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Delete from '@mui/icons-material/Delete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';




function App() {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [data,setData]=useState([]);
const [fontColor,setfontColor]=useState('black');

const addData=()=>{
  setData([...data,{name, email}]);

  setName("");
  setEmail("");
}  //spread operator

const removeItem=(index)=>{
  let arr = data;
  arr.splice(index,1); 
 setData([...arr]);

}
const [mode,setMode]= useState('dark');
const toggleMode=()=>{

  if(mode=='light')
{setMode('dark');
document.body.style.backgroundColor="rgb(2 25 31)";


}
else{

setMode ('light');
document.body.style.backgroundColor="#b2bec3";

}
const styleTextform=()=>{
  setfontColor(mode=='dark'?'white':'#009432');
};

}


  return (
    <div className="App">
      <Header mode={mode}/>
      <FormGroup>
      <FormControlLabel  onClick={toggleMode}  control={<Switch defaultChecked />} label="Dark Mode" style={{color:mode==='dark'?'white':'#009432'}}/>
      
    </FormGroup>
      <div className='form'>
      <Stack spacing={2} direction="row">

      <TextField value ={name} 
      onChange={(event)=> setName(event.target.value)}
       id="outlined-basic" label="name" variant="outlined" InputLabelProps={{style : {color : mode==='dark'?'white':'#009432'} }}/>


      <TextField value ={email}
      onChange={(event)=> setEmail (event.target.value)}
      
      id="outlined-basic" label="email" variant="outlined" InputLabelProps={{style : {color : mode==='dark'?'white':'#009432'} }}/>


      <Button onClick={addData} color="success" variant="contained"><AddIcon/> </Button>
      
      
      </Stack>
      </div>
       {/* data section  */}

      <div className='data'>
 
        <div className='data_val' style={{color:mode==='dark'?'white':'#009432'}}>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        {  /*<div className='deleteicon'><Delete/></div>*/}
        
        </div>
       {
        data.map((element,index)=>{
          return(
           
    <div className='data_val' style={{color:mode==='dark'?'white':'#009432'}}>
    <h4>{element.name}</h4>
    <h4>{element.email}</h4>
    <Button onClick={()=>removeItem(index)} color="error" variant="contained"><Delete/> </Button>
</div>
          )
        })
       } 
      </div>
    </div>
  );
}

export default App;
