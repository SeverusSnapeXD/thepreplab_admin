import React from 'react'
import './UsersDetails.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function OrderDetails() {
  return (
    
    <div className="MainDiv">
        <h1>User Details</h1>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
        
        <br/>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody style={{ color: "white" }}>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell><b>User Id</b></TableCell>
                    <TableCell>101</TableCell>
                </TableRow>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell><b>User Name</b></TableCell>
                    <TableCell>Nimal</TableCell>
                </TableRow>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell><b>Profile Picture</b></TableCell>
                    <TableCell>PIC</TableCell>
                </TableRow>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell><b>Contact Number</b></TableCell>
                    <TableCell>0785423456</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <br/>
        <br/>
        <a href='\users'><Button variant="outlined" color="success" type="submit">Back</Button></a>
    </div>
  )
}

export default OrderDetails