import { Button, TextField } from "@mui/material";
//import AdminHome from "./AdminHome";
import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import image from "../../imgs/background.png";


const Login = (props) => {

    const [login, toLog] = React.useState(false);
    const [username, SetUsername] = React.useState([]);
    const [password, SetPassword] = React.useState([]);

    const loginTo = (event) => {
        event.preventDefault();
        if (username === "hexa" && password === "#HexamTeam99") {
            toLog(true);
            console.log("submitted");
            props.changeState(true);


        } else {
            alert("Username or Password is Wrong...!");
        }
    }
 
    return (
        // <div className="art">
        <div >
                <div className="fontname"><center>Login To Admin Page</center></div>
                {/* <div class="row"> */}
                <Table>

                    <TableRow>
                        <TableCell width={'20%'}>
                    <div class="col-sm-5">
                        <div className="Img">

                            <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: 480, width: 580 }}>
                            </div>
                        </div>
                    </div>
                        </TableCell>
                        <TableCell>
                    {/* table */}
                    <div class="col-sm-4" >
                        


                            <form onSubmit={loginTo} className="al">

                                <table className="tbl">
                                    <tr className="spaceUnder">
                                        <td className="td">Enter Username</td>
                                        <td>
                                            <TextField
                                                label="Username"
                                                onChange={(e) => {
                                                    SetUsername(e.target.value);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a> </a></td>
                                        <td><a> </a></td>
                                    </tr>
                                    <tr className="spaceUnder">
                                        <td className="td">Enter password</td>
                                        <td>
                                            <TextField
                                                type="Password"
                                                label="Password"
                                                onChange={(e) => {
                                                    SetPassword(e.target.value);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                </table>
                                <div>
                                    <center>
                                        <Button
                                            size="large"
                                            // fullWidth={true}
                                            style={{maxWidth: '500px', maxHeight: '50px', minWidth: '100px', minHeight: '50px'}}
                                            type="submit"
                                            color="inherit"
                                        >Login</Button>
                                    </center>
                                </div>



                            </form>
                        
                    </div>
                    </TableCell>
                    </TableRow>
                {/* </div> */}
                </Table>
        </div>
    );


}

export default Login

