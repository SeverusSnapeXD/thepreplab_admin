import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Order.css";
import { Link } from "react-router-dom";

function createData(orderId, userName, orderPlace, date, status) {
  return { orderId, userName, orderPlace, date, status };
}

const rows = [
  createData(18908424, "Kamal","Kurunegala", "2 March 2022", "Approved"),
  createData(18908423, "Sunil", "Kandy", "2 March 2022", "Pending"),
  createData(18908426, "Vimal", "Gampaha", "2 March 2022", "Approved"),
  createData(18908421, "Sirpala", "Mathara", "2 March 2022", "Delivered"),
  createData(18908427, "Jayamaha", "Ella", "2 March 2022", "Pending"),
  createData(18908426, "Somee", "Jaffna", "2 March 2022", "Approved"),
  createData(18908422, "Sumith", "Galle", "2 March 2022", "Delivered"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="MainDiv Table">
      <h1>Recent Orders</h1>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="left">User Name</TableCell>
                <TableCell align="left">Order Place</TableCell>
                <TableCell align="left">Delivery Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.orderId}
                  </TableCell>
                  <TableCell align="left">{row.userName}</TableCell>
                  <TableCell align="left">{row.orderPlace}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details"><Link to="/orderdetails">Details</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}

//export default