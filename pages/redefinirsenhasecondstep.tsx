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
import {ArrowBack} from '@mui/icons-material';

function Redefinirsenhasecondstep(){
    return(
        <div>   
            <Grid container style={{ minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <img src="../imgs/bd-broe.jpg" style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
                <Grid style={{  flexDirection: 'row', }}>
                        <Link href="/redefinirsenha" passHref>
                            <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
                        </Link>
                        <Grid  style={{ float: "right"}}>
                            Não possui uma conta? <Link href="/" passHref>Acesse aqui</Link> 
                        </Grid>
                </Grid>   
                    <h1>Enviamos o código para seu e-mail</h1>
                    <FormLabel>Insira o código de verificação de 6 dígitos enviando para *****@gmail.com. <Link href="/redefinirsenha" passHref>Alterar</Link></FormLabel>
                    <div style={{height:40}} />
                    <TextField sx={{['& fieldset']:{borderRadius:3}}} type="text" id="codigo" label="Código" variant="outlined" name="codigo"/>
                    <FormLabel>
                       <Button sx={{color: '#382B57'}}>Reenviar código</Button> 
                    </FormLabel> 
                    <div style={{height:40}} />
                    <Link href="/redefinirsenhathirdstep" passHref>
                        <Button variant="contained" sx={{backgroundColor: '#382B57',borderRadius: 3}}>Continuar</Button>
                    </Link>
                    <FormLabel>Se não encontrar o e-mail na sua caixa de entrada, verifique a pasta de spam.</FormLabel>
                 </div>
            </Grid>
        </div>
        
    );
}

export default Redefinirsenhasecondstep