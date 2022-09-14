import React, { useState, useEffect } from "react";
//import axios from "axios";
import FoodRow from "./FoodRow";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './ViewFood.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';

function Food(props) {
  const [stateFood, setFoodState] = useState([]);

  useEffect(() => {
    getFood();
  }, []);

  const getFood = () => {
    // axios
    //   .get("http://localhost:8080/customers")
    //   .then(data => {
    //     let customer = data.data;
    //     setCustomerState(
    //       customer.map(d => {
    //         return {
    //           select: false,
    //           id: d.id,
    //           name: d.name,
    //           dob: new Date(d.dob).toDateString(),
    //           creditlimit: d.creditlimit
    //         };
    //       })
    //     );
    //   })
    //   .catch(err => alert(err));
  };

  const deleteFoodByIds = () => {
    let arrayids = [];
    stateFood.forEach(d => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    // axios
    //   .delete(`http://localhost:8080/customers/${arrayids}`)
    //   .then(data => {
    //     console.log(data);
    //     getCustomer();
    //   })
    //   .catch(err => alert(err));
  };

  return (
    <div>
      <Link to="/addfood">
        
        <AddCircleIcon variant="outlined" color="secondary" />
      </Link>
      <div className="btsp"></div>
      {/* <Link to={`edit/`}>
          <EditIcon color="primary"/>
        </Link> */}
      <div className="btsp"></div>
      <DeleteIcon  variant="outlined" color="error" onClick={() => deleteFoodByIds()}/>
      <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
      <Table className="table">
        <TableHead>
            <TableRow>        
                <TableCell>
                {/* <Checkbox
                    onChange={e => {
                    let value = e.target.checked;
                    setFoodState(
                        stateFood.map(d => {
                        d.select = value;
                        return d;
                        })
                    );
                    }}
                /> */}
                </TableCell>
                <TableCell >#</TableCell>
                <TableCell >Food Name</TableCell>
                <TableCell >Description</TableCell>
                <TableCell >Food Type</TableCell>
                <TableCell >Week Number</TableCell>
                <TableCell >Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody> 
            <TableRow >
                {/* Setup of the row is in FoodRow.jsx  */}
            <TableCell>
                <Checkbox
                onChange={e => {
                    let value = e.target.checked;
                    setFoodState(
                        stateFood.map(d => {
                        d.select = value;
                        return d;
                        })
                    );
                    }}
                />
            </TableCell>
            <TableCell >1</TableCell>
            <TableCell>Fried Rice</TableCell>
            <TableCell>Chicken Fried Rice</TableCell>
            <TableCell>Chinese</TableCell>
            <TableCell>10</TableCell>
            <TableCell>
            <Link to={`edit/`}>
                <EditIcon color="primary"/>
                </Link>
                <div className="btsp"></div>
                <DeleteIcon  variant="outlined" color="error" onClick={() => deleteFoodByIds()}/>
            </TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}

export default Food;