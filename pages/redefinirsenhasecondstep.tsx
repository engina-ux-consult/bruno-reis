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
import FormLabel from '@mui/material/FormLabel';

function Redefinirsenhasecondstep(){
    return(
        <div>   
            <Grid container style={{ minHeight: '100vh'}}>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
                    <h1>Acabamos de enviar um código para seu e-mail</h1>
                    <FormLabel>Insira o código de verificação de 6 dígitos enviando para t*****@gmail.com. <Link href="/redefinirsenha" passHref>Alterar</Link></FormLabel>
                    <div style={{height:40}} />
                    <TextField type="text" id="codigo" label="Código" variant="outlined" name="codigo"/>
                    <FormLabel>
                       <Button>Reenviar código</Button> 
                    </FormLabel> 
                    <div style={{height:40}} />
                    <Link href="/redefinirsenhathirdstep" passHref>
                        <Button variant="contained" >Continuar</Button>
                    </Link>
                    <FormLabel>Se não encontrar o e-mail na sua caixa de entrada, verifique a pasta de spam.</FormLabel>
                 </div>
            </Grid>
        </div>
        
    );
}

export default Redefinirsenhasecondstep