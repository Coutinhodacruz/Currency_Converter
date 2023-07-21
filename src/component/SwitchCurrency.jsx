
import { Button, Grid } from "@mui/material";
import React from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";


const SwitchCurrency = () => {
    const{
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
    } = useContext(CurrencyContext)

    const handleSwitch = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency)
    }


    return(
        <Grid item xs={12} md={3}>
            <Button onClick={handleSwitch} sx={{
                borderRadius: 1,
                height: "100%"
            }}>
               <CompareArrowsIcon  sx={{ fontSize: 30 }}/>
            </Button>
        </Grid>
        
    )
}
export default SwitchCurrency