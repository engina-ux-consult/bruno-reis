import Head from 'next/head'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from 'next/link';
import React, {useState} from "react";
import Planos from './planos';
import Pagamento from './checkout';

function Cadastro(){
    return(
        <div>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    
                    <div style={{height:40}} />
                  
                    <TextField id="outlined-basic" label="Nome" variant="outlined"/>

                    <div style={{height:40}} />

                    <TextField id="outlined-basic" label="E-mail" variant="outlined"  />

                    <div style={{height:40}} />

                    <TextField id="outlined-basic" label="Senha" variant="outlined" />    
                </div>
      </div>
    )
}

export default Cadastro