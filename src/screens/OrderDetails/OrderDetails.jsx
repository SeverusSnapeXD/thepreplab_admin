import React from 'react'
import './OrderDetails.css';
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
        <h1>Order Details</h1>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Unit Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
                <TableRow>
                    <TableCell>Chicken</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>1000</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Chicken</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>1000</TableCell>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableCell><b>Total</b></TableCell> 
                    <TableCell></TableCell>
                    <TableCell>2000</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <br/>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody style={{ color: "white" }}>
                <TableRow>
                    <TableCell><b>Address</b></TableCell>
                    <TableCell>Kurunegala, Ibbagamuwa</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Delivery Date</b></TableCell>
                    <TableCell>2022/09/22</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Special Instruction</b></TableCell>
                    <TableCell>Parcel is on the way</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <br/>
        <br/>
        <a href='\orders'><Button variant="outlined" color="success" type="submit">Back</Button></a>
    </div>
  )
}

export default OrderDetails