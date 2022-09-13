import {React, useState} from 'react'
import './Explore.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Input, InputLabel, MenuItem, Select, FormControl, IconButton} from "@mui/material";

function Explore() {
    const [formValue, setformValue] = useState({
        Title:'',
        Vdo: null,
        Description:'',
        PostType:''
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

//Tags
const [formFields, setFormFields] = useState([
    { tags: '' },
  ]);
  
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }
  
  const addFields = () => {
    let object = {
      tags:'',
      colors:''
    }
  
    setFormFields([...formFields, object])
  }
  
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }
  
  //Ingredients
  const [formIngr, setFormIngr] = useState([
    { Ingredients: '' },
  ]);
  
  const handleFormChangeIngr = (event, index) => {
    let data = [...formIngr];
    data[index][event.target.name] = event.target.value;
    setFormIngr(data);
  }
  
  const addIngr = () => {
    let object = {
      Ingredients:'',
      IngImg:''
    }
  
    setFormIngr([...formIngr, object])
  }
  
  const removeIngr = (index) => {
    let data = [...formIngr];
    data.splice(index, 1)
    setFormIngr(data)
  }
  
  //Nutritions
  const [formNut, setFormNut] = useState([
    { Nutritions: '' },
  ]);
  
  const handleFormChangeNut = (event, index) => {
    let data = [...formIngr];
    data[index][event.target.name] = event.target.value;
    setFormIngr(data);
  }
  
  const addNut = () => {
    let object = {
      Nutritions:'',
      Value:''
    }
  
    setFormNut([...formNut, object])
  }
  
  const removeNut = (index) => {
    let data = [...formNut];
    data.splice(index, 1)
    setFormNut(data)
  }

//ReceipeSteps
const [formReStp, setFormReStp] = useState([
    { RecipeSteps:'' },
  ]);
  
  const handleFormChangeReStp = (event, index) => {
    let data = [...formReStp];
    data[index][event.target.name] = event.target.value;
    setFormReStp(data);
  }
  
  const addReStp = () => {
    let object = {
        RecipeSteps:'',
        Step:''
    }
  
    setFormReStp([...formReStp, object])
  }
  
  const removeReStp = (index) => {
    let data = [...formReStp];
    data.splice(index, 1)
    setFormReStp(data)
  }

//Image
const [formImge, setFormImge] = useState([
    { Imge: null },
  ]);
  
  const handleFormChangeImge = (event, index) => {
    let data = [...formImge];
    data[index][event.target.name] = event.target.value;
    setFormImge(data);
  }
  
  const addImge = () => {
    let object = {
        Imge: null
    }
  
    setFormImge([...formImge, object])
  }
  
  const removeImge = (index) => {
    let data = [...formImge];
    data.splice(index, 1)
    setFormImge(data)
  }


  return (
    <div className="MainDiv">
        <h1>Explore</h1>
        <form onSubmit={handleSubmit} id="create-course-form">
            <table>
                <tr className="spaceUnder">
                    <td className="td">
                        <TextField
                            name='Title'
                            label='Title'
                            value={formValue.Title}
                            onChange={handleChange}
                        />
                    </td>
                    <td className="td" rowSpan={'2'}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            name="Description"
                            multiline
                            rows={5}
                            value={formValue.Description}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr className="spaceUnder">
                    <td className="td">
                        <FormControl sx={{ m: 0, minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-helper-label">Post Type</InputLabel>
                            <Select
                                    label="Post Type"
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={formValue.PostType}
                                    onChange={handleChange}
                            >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'1'}>Ten</MenuItem>
                                    <MenuItem value={'2'}>Twenty</MenuItem>
                                    <MenuItem value={'3'}>Thirty</MenuItem>
                            </Select>
                         </FormControl>
                    </td>
                </tr>
                
                <tr className="spaceUnder">
                    <td className="td">
                        <h3>Video</h3>
                        <TextField
                            name='Vdo'
                            type="file"
                            value={formValue.Vdo}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <h3>Tags <AddCircleIcon variant="outlined" color="secondary" onClick={addFields}/></h3>
                </tr>
                <tr >
                    <td colSpan={'2'}>
                        {formFields.map((form, index) => {
                        return (
                        <div key={index}>
                            <TextField
                                name='tags'
                                label="Tags"
                                onChange={event => handleFormChange(event, index)}
                                value={form.tags}
                            />
              
                            <FormControl sx={{ m: 0, minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-helper-label">Colors</InputLabel>
                                <Select
                                label="Colors"
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formFields.color}
                                onChange={event => handleFormChange(event, index)}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'1'}>Ten</MenuItem>
                                <MenuItem value={'2'}>Twenty</MenuItem>
                                <MenuItem value={'3'}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <DeleteIcon sx={{m:1.5}} variant="outlined" color="error" onClick={() => removeFields(index)}/>
                        </div>
                        )
                        })} 
                    </td>
                </tr>
                <tr><h3>Ingredients <AddCircleIcon variant="outlined" color="secondary" onClick={addIngr}/></h3></tr>
                <tr>
                    <td colSpan={'2'}>
                        {formIngr.map((form, index) => {
                        return (
                        <div key={index}>

                            <TextField
                                name='Ingredients'
                                label="Ingredients"
                                
                                onChange={event => handleFormChangeIngr(event, index)}
                                value={formIngr.Ingredients}
                            />
                            <TextField
                                // label="Ingredient Image"
                                name="IngImg"
                                type="file"
                                value={formIngr.IngImg}
                                onChange={event => handleFormChangeIngr(event, index)}
                            />
                            
                            <DeleteIcon sx={{m:1.5}} variant="outlined" color="error" onClick={() => removeIngr(index)}/>
                        </div>
                        )
                        })} 
                    </td>
          
                </tr>
                <tr><h3>Nutritions <AddCircleIcon variant="outlined" color="secondary" onClick={addNut}/></h3></tr>
                <tr>
                    <td colSpan={'2'}>
                        {formNut.map((form, index) => {
                        return (
                        <div key={index}>

                            <FormControl sx={{ m: 0, minWidth: 150 }}>
                                <InputLabel id="demo-simple-select-helper-label">Nutritions</InputLabel>
                                <Select
                                    label="Nutritions"
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={formNut.Nutritions}
                                    onChange={event => handleFormChangeNut(event, index)}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'1'}>Ten</MenuItem>
                                    <MenuItem value={'2'}>Twenty</MenuItem>
                                    <MenuItem value={'3'}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                name='Value'
                                label="Value"
                                
                                onChange={event => handleFormChangeNut(event, index)}
                                value={formIngr.Ingredients}
                            />

                            <DeleteIcon sx={{m:1.5}} variant="outlined" color="error" onClick={() => removeNut(index)}/>
                        </div>
                        )
                        })} 
                    </td>
                </tr>
                <tr><h3>Receipe Step <AddCircleIcon variant="outlined" color="secondary" onClick={addReStp}/></h3></tr>
                <tr>
                    <td colSpan={'2'}>
                        {formReStp.map((form, index) => {
                        return (
                        <div key={index}>

                            <TextField 
                                name='Step'
                                label="Step"
                                onChange={event => handleFormChangeReStp(event, index)}
                                value={formReStp.Step}
                            />
                            <TextField
                                name='ReceipeSteps'
                                label="Receipe Description"
                                onChange={event => handleFormChangeReStp(event, index)}
                                value={formReStp.RecipeSteps}
                            />
                            
                            <DeleteIcon sx={{m:1.5}} variant="outlined" color="error" onClick={() => removeReStp(index)}/>
                        </div>
                        )
                        })} 
                    </td>
          
                </tr>
                <tr><h3>Image <AddCircleIcon variant="outlined" color="secondary" onClick={addImge}/></h3></tr>
                <tr>
                    <td colSpan={'2'}>
                        {formImge.map((form, index) => {
                        return (
                        <div key={index}>
                            <TextField
                                // label="Ingredient Image"
                                name="Imge"
                                type="file"
                                value={formImge.Imge}
                                onChange={event => handleFormChangeImge(event, index)}
                            />
                            
                            <DeleteIcon sx={{m:1.5}} variant="outlined" color="error" onClick={() => removeImge(index)}/>
                        </div>
                        )
                        })} 
                    </td>
          
                </tr>
            </table>
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

export default Explore