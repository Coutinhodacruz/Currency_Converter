import { useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Grid, Typography } from '@mui/material'
import InputAmount from './component/InputAmount'
import SelectCountry from './component/SelectCountry'
import SwitchCurrency from './component/SwitchCurrency'
import { CurrencyContext } from './context/CurrencyContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount

  } = useContext(CurrencyContext)
   const [resultCurrency, setResultCurrency] = useState(0);
   const codeFromCurrency = fromCurrency.split("")[1];
   const codeToCurrency = toCurrency.split("")[1];
   console.log(codeFromCurrency)

  useEffect(() =>{
    if(firstAmount){
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params:{
          apiKey: import.meta.env.VITE_API_KEY,
          base_currency: codeFromCurrency,
          currencies: codeToCurrency
        }
      })
      .then(response => setResultCurrency(response.data.data[codeToCurrency]))
      .catch(error => console.log(error))
    }

  }, [firstAmount, fromCurrency, toCurrency])

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant='h5' sx={{marginBottom: "2rem"}} >Currency Converter
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
      </Grid>

      {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem"}}>
          <Typography>{firstAmount} {fromCurrency}</Typography>
          <Typography variant='h5' sx={{marginTop: "5px", fontWeight: "bold"}}>{resultCurrency * firstAmount} {toCurrency}</Typography>
        </Box>

      ) : ""}
    </Container>
  )
}

export default App
