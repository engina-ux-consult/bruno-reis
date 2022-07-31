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

function Redefinirsenhathirdstep(){
    return(
        <div>    
            <Grid container style={{ minHeight: '100vh'}}>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
            <h1>Crie uma senha nova.</h1>
            <p>Crie uma senha nova com pelo menos 8 caracteres.</p>
            <div style={{height:40}} />
            <TextField type="password" id="senha" label="Senha" variant="outlined" name="senha" />
            <div style={{height:40}} />
            <TextField type="password" id="repetirsenha" label="Repetir senha" variant="outlined" name="repetirsenha" />
            <div style={{height:40}} />
            <Link href="/login" passHref>
                <Button variant="contained">Finalizar</Button>
            </Link>
        </div>
            </Grid>
        </div>
        
    );
}

export default Redefinirsenhathirdstep