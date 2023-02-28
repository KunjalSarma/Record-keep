import React from 'react';
import Delete from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


const Fields = ({name,email,index}) => {
  return (
   
    <div className='data_val'>
          <h4>{name}</h4>
          <h4>{email}</h4>
          <Button onClick={()=>removeItem(index)} color="error" variant="contained"><Delete/> </Button>
    </div>
  )
}

export default Fields
