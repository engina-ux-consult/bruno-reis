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
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
                <h1>Esqueceu a senha?</h1>
            <FormLabel>Redefina a senha nas etapas seguintes</FormLabel>
            <div style={{height:40}} />
            <TextField type="email" id="email" label="E-mail" variant="outlined" name="email"
            value={email} error={message} helperText={message} onChange={handleOnChange}/>
                <div style={{height:40}} />
                <Link href="/redefinirsenhasecondstep" passHref>
                    <Button variant="contained">Redefinir senha</Button>
                </Link>
                <Link href="/login" passHref>
                <Button>Voltar</Button>
            </Link>
                </div>
            </Grid>
        </div>
        
    );
}

export default Redefinir