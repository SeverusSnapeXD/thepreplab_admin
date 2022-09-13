import { React, useState} from 'react'
import './AddFood.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Input, InputLabel, MenuItem, Select, FormControl} from "@mui/material";

function AddFood() {

  const [formValue, setformValue] = React.useState({
      Name:'',
      Description:'',
      Price: '',
      FoodImage: null,
      FoodType:'',
      WeekNumber: Number,
      ItemQuantity: Number,
      
      nutritions:'',
      Ingredients:''
  });

  const [formFields, setFormFields] = useState([
    { tags: 'abc' },
  ])

  const handleChange = (event, index) => {
    setformValue({
      ...formValue,
    [event.target.name]: event.target.value
    });
    // let data = [...formValue];
    // data[index][event.target.name] = event.target.value;
    // setformValue(data);
}

const handleFormChange = (event, index) => {
  let data = [...formFields];
  data[index][event.target.name] = event.target.value;
  setFormFields(data);
}

const handleReset = () => {
  setformValue("");
  document.getElementById("create-course-form").reset();
  
};

const addFields = () => {
  let object = {
    name: '',
    age: ''
  }

  setFormFields([...formFields, object])
}

const removeFields = (index) => {
  let data = [...formFields];
  data.splice(index, 1)
  setFormFields(data)
}

const handleSubmit = async(event) => {
  event.preventDefault();
}

  return (
    <div className="MainDiv">
      <h1>Add Food</h1>
      <form onSubmit={handleSubmit}
    id="create-course-form">
        <table>
        <tr className="spaceUnder">
           
           <td className="td">
             <TextField
             
             name="Name"
             label="Enter Food Name"
             value={formValue.Name}
             onChange={handleChange}
              
           />
           </td>
 
           <td className="td">
           <TextField
              id="outlined-multiline-static"
              label="Description"
              name="Description"
              multiline
              rows={3}
              value={formValue.Description}
             onChange={handleChange}
            />
           </td>
 
        </tr>

        <tr className="spaceUnder" >
          <td className="td" >
            <TextField
            label="Food Image"
            name="FoodImage"
            type="file"
            value={formValue.FoodImage}
            onChange={handleChange}
            />
            
          </td>
          
        {/* </tr>

        <tr className="spaceUnder"> */}
           
          <td className="td">
             <TextField
             
             name="Price"
             label="Price"
             value={formValue.Price}
             onChange={handleChange}
           />
           </td>

          </tr>

        <tr className="spaceUnder">
           <td className="td" >
           <FormControl fullWidth>
           <InputLabel id="demo-simple-select-helper-label">Food Type</InputLabel>
            <Select
              label="Food Type"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formValue.FoodType}
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

           <td className="td">
             <TextField
             
             name="WeekNumber"
             label="Week Number"
             value={formValue.WeekNumber}
             onChange={handleChange}
           />
           </td>

           <td className="td">
             <TextField
             
             name="ItemQuantity"
             label="Quantity"
             value={formValue.ItemQuantity}
             onChange={handleChange}
           />
           </td>
        </tr>
        <tr >
          <td>
          {formFields.map((form, index) => {
          return (
          <div key={index}>
              <input
                name='tags'
                placeholder='Tags'
                onChange={event => handleFormChange(event, index)}
                value={form.tags}
              />
              
              <button onClick={() => removeFields(index)}>Remove</button>
              <button onClick={addFields}>Add More..</button>
            </div>
             )
          })} 
          </td>
        </tr>

        <tr className="spaceUnder">
                        <td className="td">
                            <Button type="submit">Save</Button>
                        </td>
                        <td className="td">
                            <Button onClick={handleReset}>Clear</Button>
                        </td>
                        
                    </tr>

        </table>

    </form>
    </div>
  )
}

export default AddFood