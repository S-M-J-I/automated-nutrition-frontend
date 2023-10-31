import { FormControl, Select, InputLabel, MenuItem, Box, Grid, Typography, TextField, Button, Paper, Card } from '@mui/material';
import './App.css';
import { useState } from 'react';
import ListView from './components/ListView';

function App() {

  const [age, setAge] = useState()
  const [gender, setGender] = useState("")
  const [country, setCountry] = useState("")
  const [culture, setCulture] = useState("")
  const [income, setIncome] = useState("")
  const [medConds, setMedicalConds] = useState("")

  const [totalPrice, setTotalPrice] = useState(0)

  const [foodList, setFoodList] = useState([])
  const [nutritionMeasureList, setNutritionMeasureList] = useState([])
  const [foodPriceList, setFoodPriceList] = useState([])

  const [foodAvoidList, setFoodAvoidList] = useState()

  const [totalItems, setTotalItems] = useState(0)


  const generateFoodList = () => {
    let ageGroup = ""
    if (age >= 9 && age <= 13) {
      ageGroup = "K"
    }
    else if (age >= 14 && age <= 50) {
      ageGroup = "A"
    }
    else {
      ageGroup = "E"
    }

    let cultureGroup = culture.charAt(0)
    let genderGroup = gender.charAt(0)
    let countryGroup = country.charAt(0)
    let economicCond = income.charAt(0)

    setMedicalConds(medConds.toLowerCase())


    const med = {
      diabetes: 0,
      cardiovascular: 0,
      kidney: 0,
      gastrological: 0,
      normal: 0
    }

    med[medConds] = 1

    const body = {
      country: countryGroup,
      culture: cultureGroup,
      economicCond: economicCond,
      gender: genderGroup,
      ageGroup: ageGroup,
      ...med
    }


    fetch("http://127.0.0.1:5000/get-food", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then(data => {
        const nLi = []
        const fLi = []

        for (let key in data[0]) {
          if (key.includes("/day")) {
            const obj = {}
            if (data[0][key] !== NaN) {
              obj[key] = data[0][key]
              nLi.push(obj)
            }

          } else {
            fLi.push({ name: key })
          }
        }

        // console.log(nutritionMeasureList)
        console.log(data[1])

        setFoodList(fLi)
        setNutritionMeasureList(nLi)
        setFoodPriceList(data[1])

        if (data.length === 3) {
          setFoodAvoidList(data[2].avoid)
        }

      })
      .catch((err) => {
        alert(err)
      })


  }


  return (
    <div className="App">
      <Grid container spacing={0} sx={{ paddingTop: 5, paddingLeft: 10 }} >
        <Grid item xs={4} sx={{ justifyContent: "left", textAlign: "left" }} >
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
              <InputLabel id="demo-simple-select-required-label">Select your medical condition</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select"
                value={medConds}
                label="Medical Condition"
                onChange={(event) => { setMedicalConds(event.target.value) }}
              >
                <MenuItem value={"normal"}>No Medical Conditions</MenuItem>
                <MenuItem value={"diabetes"}>Diabetes</MenuItem>
                <MenuItem value={"cardiovascular"}>Cardiovascular</MenuItem>
                <MenuItem value={"kidney"}>Kidney</MenuItem>
                <MenuItem value={"gastrological"}>Gastrological</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant='contained' color='success' fullWidth sx={{ maxWidth: 400 }} onClick={generateFoodList}>
            Generate Food List
          </Button>
        </Grid>
        <Grid item xs={4} justifyContent={"center"} alignItems={"center"} >
          <Typography color={"green"} variant='h6'>{foodList.length > 0 ? "Your Recommended Food Items" : ""}</Typography>
          <div>{"\n"}</div>
          {
            foodList.length > 0 &&
            <Paper style={{ height: '600px', overflow: 'auto', marginTop: 10 }}>
              <ListView foodItems={foodList} foodPrice={foodPriceList} totalPrice={totalPrice} setTotalPrice={setTotalPrice} totalItems={totalItems} setTotalItems={setTotalItems} />
            </Paper>
          }
          {foodList.length > 0 && <Typography color={"green"} variant='h6' sx={{ marginTop: 3 }}>Price: $ {totalPrice}</Typography>}
        </Grid>
        {
          medConds !== "normal" &&
          <Grid item xs={4} textAlign={"center"} justifyContent={"center"} alignItems={"center"} >
            <Typography color={"green"} variant='h6'>{foodList.length > 0 ? "Food Not Recommended" : ""}</Typography>
            {foodList.length > 0 &&
              <Card sx={{ marginLeft: 8, marginRight: 8, padding: 2, marginTop: 1, backgroundColor: "pink" }}>
                <strong>Disclaimer:<br />These are the lists of food we recommend that you do not take. We advise, for more accuracy and safety, that you consult a doctor.</strong>
                <hr />
                {foodAvoidList}
              </Card>}
          </Grid>
        }
      </Grid>
    </div >
  );
}

export default App;
