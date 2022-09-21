import {React, useState} from 'react'
import './Events.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Checkbox from '@mui/material/Checkbox';
import { Input, InputLabel, MenuItem, Select, FormControl, IconButton} from "@mui/material";

function Events() {
    const [formValue, setformValue] = useState({
        Title:'',
        date: Date,
        image: null,
        Description:'',
        Paid: Number
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
        <h1>Events</h1>
        <form onSubmit={handleSubmit} id="create-course-form">
        <Table>
            <TableRow className="spaceUnder" style={{borderBottom:"none"}}>
                <TableCell className="td">
                    <FormControl sx={{ m: 0, minWidth: 250 }}>
                        <TextField
                            name='Title'
                            label='Title'
                            value={formValue.Title}
                            onChange={handleChange}
                        />
                    </FormControl>
                </TableCell>
                <TableCell className="td">
                    <FormControl sx={{ m: 0, maxWidth: 250 }}>
                        <TextField
                            name='image'
                            type="file"
                            value={formValue.image}
                            onChange={handleChange}
                        />
                    </FormControl>
                </TableCell>
            </TableRow>
            <TableRow className="spaceUnder" style={{borderBottom:"none"}}>
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
                <TableCell className="td">
                    <FormControl sx={{ m: 0, minWidth: 250 }}>
                        <TextField
                            name='date'
                            type="date"
                            value={formValue.date}
                            onChange={handleChange}
                        />
                    </FormControl>
                </TableCell>
            </TableRow>
            <TableRow className="spaceUnder" style={{borderBottom:"none"}}>
                <TableCell className="td">
                
                    <Checkbox/>
                    <FormControl sx={{ m: 0, maxWidth: 210 }}>
                    <TextField
                            name='Paid'
                            label='Paid'
                            value={formValue.Paid}
                            onChange={handleChange}
                        />
                    </FormControl>
                </TableCell>
            </TableRow>
        </Table>
        <br/>
            <div className="spaceBtn">
            <Button variant="outlined" color="success" type="submit">Save</Button>
                <div className="btsp"></div>
            <Button variant="outlined" onClick={handleReset}>Clear</Button>
            </div>
        </form>
    </div>
  )
}

export default Events