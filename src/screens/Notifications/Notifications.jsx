import React from 'react'
import './Notifications.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Input, InputLabel, MenuItem, Select, FormControl, IconButton} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Notifications() {
    const [formValue, setformValue] = useState({
        Description:''
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

  return (
    <div className="MainDiv">
        <h1>Add Notifications</h1>
        <form onSubmit={handleSubmit}
            id="create-course-form">
            <Table>
                <TableRow className="spaceUnder">
                <TableCell className="td" rowSpan={'2'}>
                    <FormControl sx={{ m: 0, minWidth: 250 }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            name="Description"
                            multiline
                            rows={5}
                            value={formValue.Description}
                            onChange={handleChange}
                        />
                        </FormControl>
                    </TableCell>
                </TableRow>
                
            </Table>
            <br/>
                <div className="spaceBtn">
                    <Button variant="outlined" color="success" type="submit">Send</Button>
                    <div className="btsp"></div>
                    <Button variant="outlined" onClick={handleReset}>Clear</Button>
                </div>
        </form>
    </div>
  )
}

export default Notifications