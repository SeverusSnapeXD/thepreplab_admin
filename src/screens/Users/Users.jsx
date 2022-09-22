import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Users.css";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(userId, userName, profilePic) {
  return { userId, userName, profilePic,};
}

const rows = [
  createData(100, "Kamal","Pic"),
  createData(101, "Sunil", "Pic"),
  createData(102, "Vimal", "Pic"),
  createData(103, "Sirpala", "Pic"),
  createData(104, "Jayamaha", "Pic"),
  createData(105, "Somee", "Pic"),
  createData(107, "Sumith", "Pic"),
];

const deleteByIds = () => {
    let arrayids = [];
    // userId.forEach(d => {
    //   if (d.select) {
    //     arrayids.push(d.id);
    //   }
    // });
};



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
                <TableCell>User ID</TableCell>
                <TableCell align="left">User Name</TableCell>
                <TableCell align="left">Profile Picture</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.userId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell align="left"><Link to="/userdetails">{row.userName}</Link></TableCell>
                  <TableCell align="left">{row.profilePic}</TableCell>
                  
                  <TableCell>
                    <Link to={`edit/`}>
                        <EditIcon color="primary"/>
                    </Link>
                        <div className="btsp"></div>
                        <DeleteIcon  variant="outlined" color="error" onClick={() => deleteByIds()}/>
                   </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}

//export default