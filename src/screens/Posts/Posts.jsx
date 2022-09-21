import React from 'react'
import { useState } from 'react';
import './Posts.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Input, InputLabel, MenuItem, Select, FormControl, IconButton} from "@mui/material";

function Posts() {

    const [formValue, setformValue] = useState({
        email:'',
        caption:''
    });
    const handleChange = (event, index) => {
        setformValue({
          ...formValue,
        [event.target.name]: event.target.value
        });
        // let data = [...formValue];
        // data[index][event.target.name] = event.target.value;
        // setformValue(data);
    }
    
    const handleReset = () => {
      setformValue("");
      document.getElementById("create-course-form").reset();
      
    };
    
    const handleSubmit = async(event) => {
      event.preventDefault();
    }

    //Img
    const [formImg, setFormImg] = useState([
    { Img: null },
    ]);
  
    const handleFormChangeImg = (event, index) => {
    let data = [...formImg];
    data[index][event.target.name] = event.target.value;
    setFormImg(data);
    }
  
    const addImg = () => {
    let object = {
      Img: null
    }
  
    setFormImg([...formImg, object])
    }
  
    const removeImg = (index) => {
    let data = [...formImg];
    data.splice(index, 1)
    setFormImg(data)
    }
  
  return (
    <div className="MainDiv">
        <h1>Add Posts</h1>
        <center>
        <form onSubmit={handleSubmit}
            id="create-course-form">
            <table>
                <tr className="spaceUnder">
           
                    <td className="td">
                        <FormControl sx={{ m: 0, minWidth: 250 }}>
                            <TextField
                                name="email"
                                label="Enter Email"
                                value={formValue.email}
                                onChange={handleChange}
                                
                            />
                        </FormControl>
                    </td>
                    <td className="td">
                        <FormControl sx={{ m: 0, minWidth: 250 }}>
                            <TextField
                                name="caption"
                                label="Caption"
                                value={formValue.caption}
                                onChange={handleChange}
                                
                            />
                        </FormControl>
                    </td>
                </tr>
                <tr>
                    <h3>Add Images / Videos <AddCircleIcon variant="outlined" color="secondary" onClick={addImg}/></h3>
                </tr>
                <tr className="spaceUnder">
                    <td colSpan={'2'}>
                        {formImg.map((form, index) => {
                            return(
                                <div key={index}>
                                    <FormControl sx={{ m: 0, minWidth: 500 }}>
                                        <TextField
                                            name="Img"
                                            type="file"
                                            value={formImg.Img}
                                            onChange={event => handleFormChangeImg(event, index)}
                                        />
                                    </FormControl>
                                    <DeleteIcon sx={{m:1.5}} variant="outlined" color="error" onClick={() => removeImg(index)}/>
                                </div>
                            )
                        })}
                    </td>
                </tr>
            </table>
                <br/>
                <div className="spaceBtn">
                    <Button variant="outlined" color="success" type="submit">Save</Button>
                    <div className="btsp"></div>
                    <Button variant="outlined" onClick={handleReset}>Clear</Button>
                </div>
        </form>
        </center>
    </div>
  )
}

export default Posts