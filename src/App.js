import { FormControl, Select, InputLabel, MenuItem, Box, Grid, Typography, TextField, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const [age, setAge] = useState()
  const [gender, setGender] = useState("")
  const [country, setCountry] = useState("")
  const [culture, setCulture] = useState("")
  const [income, setIncome] = useState("")
  const [medConds, setMedicalConds] = useState("")


  return (
    <div className="App">
      <Grid container spacing={0} sx={{ paddingTop: 5, paddingLeft: 30, paddingRight: 50 }} >
        <Grid item xs={6} sx={{ justifyContent: "left", textAlign: "left" }} >
          <Typography sx={{ marginBottom: 5, textAlign: "left", color: "green", fontWeight: "bold" }} variant='h4'>Enter details</Typography>
          <Box sx={{ marginBottom: 5 }}>
            <FormControl fullWidth sx={{ maxWidth: 400 }}>
              <TextField
                labelId="demo-simple-select-required-label"
                id="demo-simple-select"
                value={age}
                type='number'
                label='Select your age'
                onChange={(event) => { setAge(event.target.value) }}
              />
            </FormControl>
          </Box>
          <Box sx={{ marginBottom: 5 }}>
            <FormControl fullWidth sx={{ maxWidth: 400 }}>
              <InputLabel id="demo-simple-select-required-label">Select your gender</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(event) => { setGender(event.target.value) }}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ marginBottom: 5 }}>
            <FormControl fullWidth sx={{ maxWidth: 400 }}>
              <InputLabel id="demo-simple-select-required-label">Select your country</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select"
                value={country}
                label="Country"
                onChange={(event) => { setCountry(event.target.value) }}
              >
                <MenuItem value={"Bangladesh"}>Bangladesh 🇧🇩</MenuItem>
                <MenuItem value={"Canada"}>Canada 🇨🇦</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ marginBottom: 5 }}>
            <FormControl fullWidth sx={{ maxWidth: 400 }}>
              <InputLabel id="demo-simple-select-required-label">Select your food culture</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select"
                value={culture}
                label="Culture"
                onChange={(event) => { setCulture(event.target.value) }}
              >
                <MenuItem value={"Veg"}>Veg 🥬</MenuItem>
                <MenuItem value={"Non-Veg"}>Non-Veg 🥩</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ marginBottom: 5 }}>
            <FormControl fullWidth sx={{ maxWidth: 400 }}>
              <InputLabel id="demo-simple-select-required-label">Select your economic condition</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select"
                value={income}
                label="Income"
                onChange={(event) => { setIncome(event.target.value) }}
              >
                <MenuItem value={"LI"}>Lower Income</MenuItem>
                <MenuItem value={"MI"}>Middle Income</MenuItem>
                <MenuItem value={"HI"}>Higher Income</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ marginBottom: 5 }}>
            <FormControl fullWidth sx={{ maxWidth: 400 }}>
              <TextField
                label="Enter medical conditions (separated by commas)"
                placeholder='Ex: Diabetes, Heart Disease, ...'
                value={medConds}
                onChange={(event) => setMedicalConds(event.target.value)}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography>List will go here</Typography>
        </Grid>
        <Button variant='contained' color='success' fullWidth sx={{ maxWidth: 400 }}>
          Generate Food List
        </Button>
      </Grid>
    </div>
  );
}

export default App;
