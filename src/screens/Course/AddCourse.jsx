import React, { useEffect, useState } from 'react'
import './style.css'
import { TextField, Select, MenuItem, Checkbox } from '@mui/material'

function AddCourse() {

  const [coverImage, setCoverImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };


  useEffect(() => {
    if (coverImage) {
      setImageUrl(URL.createObjectURL(coverImage))
    }
  }, [coverImage])

  const onImageChange = (e) => {
    setCoverImage(e.target.files[0])
    console.log(e)
  }

  return (
    <div className='container'>
      <h1>Add Course</h1>
      <section style={{overflow:'auto',maxHeight:600}}>
        <form className='form' id="create-course-form">
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Name</p>
            <TextField placeholder='Course Name' style={{ flex: 1 }} />
          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Description</p>
            <TextField placeholder='Course Name' style={{ flex: 1, }} multiline />
          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Cover Image</p>
            <div style={{ flexDirection: 'column' }}>
              <input type="file" accept="image/*" onChange={onImageChange} />
              {imageUrl && <img src={imageUrl} />}
            </div>
          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Category</p>
            <Select
              style={{ flex: 1 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Level</p>
            <Select
              style={{ flex: 1 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Beginner</MenuItem>
              <MenuItem value={20}>Intermediate</MenuItem>
              <MenuItem value={30}>Advanced</MenuItem>
            </Select>

          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Duration</p>
            <Select
              style={{ flex: 1 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Beginner</MenuItem>
              <MenuItem value={20}>Intermediate</MenuItem>
              <MenuItem value={30}>Advanced</MenuItem>
            </Select>

          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Requirements</p>
            <TextField placeholder='Course Name' style={{ flex: 1 }} />
          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Price</p>
            <TextField placeholder='Course Name' style={{ flex: 1 }} inputMode='decimal' />
          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Offer certificate</p>
            <Checkbox />
          </div>
          {/* dee;te */}
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Requirements</p>
            <TextField placeholder='Course Name' style={{ flex: 1 }} />
          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Course Price</p>
            <TextField placeholder='Course Name' style={{ flex: 1 }} inputMode='decimal' />
          </div>
          <div className="row" style={{ display: 'flex' }}>
            <p>Offer certificate</p>
            <Checkbox />
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddCourse
