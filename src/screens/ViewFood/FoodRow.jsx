import React from "react";
import { Link } from "react-router-dom";
import './ViewFood.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from '@mui/material/Checkbox';

function FoodRow(props) {
  return props.stateFood.map(d => (
    <TableRow key={d.id}>
      <TableCell>
        <Checkbox
          checked={d.select}
          onChange={e => {
            let value = e.target.checked;
            props.setFoodState(
              props.stateFood.map(sd => {
                if (sd.id === d.id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}
        />
      </TableCell>
      <TableHead scope="row">1</TableHead>
      <TableCell>Fried Rice</TableCell>
      <TableCell>Chicken Fried Rice</TableCell>
      <TableCell>Image</TableCell>
      <TableCell>Chinese</TableCell>
      <TableCell>10</TableCell>
      <TableCell>70</TableCell>
      <TableCell>Rice</TableCell>
      <TableCell>R..e..r..</TableCell>
      <TableCell>qwertyui</TableCell>
      <TableCell>
        
      </TableCell>
    </TableRow>
  ));
}

export default FoodRow;