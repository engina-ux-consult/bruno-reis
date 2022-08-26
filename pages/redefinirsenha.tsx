import Head from 'next/head'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from 'next/link';
import React, {useState} from "react";
import { display } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {ArrowBack} from '@mui/icons-material';

function Redefinir(){
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
  
    const handleOnChange = (e: any) => {
      setEmail(e.target.value);
      if (e.target.value.match(regEx)) {
        setMessage("");
        return
      } else {
        setMessage("Email não é valido");
      }
    };
    return(
        <div>
            <Grid container style={{ minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} style={{   display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                <img src="../imgs/bd-broe.jpg" style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>
            <Grid item xs={12} sm={6} style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
            
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
                <Grid style={{  flexDirection: 'row', }}>
                        <Link href="/login" passHref>
                            <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
                        </Link>
                        <Grid  style={{ float: "right"}}>
                            Não possui uma conta? <Link href="/" passHref>Acesse aqui</Link> 
                        </Grid>
                </Grid>   
                <h1>Esqueceu a senha?</h1>
            <FormLabel>Digite seu e-mail cadastrado para enviarmos um código de alteração de senha.</FormLabel>
            <div style={{height:40}} />
            <TextField sx={{['& fieldset']:{borderRadius:3}}} type="email" id="email" label="E-mail" variant="outlined" name="email"
            value={email} helperText={message} onChange={handleOnChange}/>
                <div style={{height:40}} />
                <Link href="/redefinirsenhasecondstep" passHref>
                    <Button variant="contained" sx={{backgroundColor: '#382B57',borderRadius: 3}}>Enviar código</Button>
                </Link>
                </div>
                </Grid>
            </Grid>
        </div>
        
    );
}

export default Redefinir