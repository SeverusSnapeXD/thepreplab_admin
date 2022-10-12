import React, { useState } from "react";

import useTable from "./useTable";
import styles from "./Table.css";
import TableFooter from "./TableFooter/index";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {FormControl} from "@mui/material";

const TableD = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const deleteByIds = () => {
    let arrayids = [];
    data.forEach(d => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
};



  return (
    <div className="MainDiv">
        <h1>View Notifications</h1>
        <center>
        <FormControl sx={{ m: 0, maxWidth: 700 }}>
        <TextField
            label="Search"
            InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
        />
        </FormControl>
        </center>
        <div>
        <Link to="/notifications">
        
        <AddCircleIcon variant="outlined" color="secondary" />
      </Link>
      <div className="btsp"></div>
      {/* <Link to={`edit/`}>
          <EditIcon color="primary"/>
        </Link> */}
      <div className="btsp"></div>
      <DeleteIcon  variant="outlined" color="error" onClick={() => deleteByIds()}/>
      </div>
    <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
      <Table className="table">
        <TableHead >
          <TableRow>
            <TableCell></TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {slice.map((el) => (
            <TableRow  key={el.id}>
                <TableCell><Checkbox/></TableCell>
              <TableCell >{el.name}</TableCell>
              <TableCell >{el.capital}</TableCell>
              <TableCell>
            <Link to={`edit/`}>
                <EditIcon color="primary"/>
                </Link>
                <div className="btsp"></div>
                <DeleteIcon  variant="outlined" color="error" onClick={() => deleteByIds()}/>
            </TableCell>
            {/* <TableCell><PhotoCameraIcon/></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <br/>
      <center>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </center>
    </div>
  );
};

export default TableD;