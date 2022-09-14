import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, {useState} from "react";
import FormLabel from '@mui/material/FormLabel';
import {ArrowBack} from '@mui/icons-material';
import ST from './styles';

function Redefinirsenhasecondstep(){
    return(
        <div>   
            <ST/>
            <Grid container style={{ minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <img src="../imgs/bd-broe.jpg" style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
                <Grid style={{  flexDirection: 'row', }}>
                        <Link href="/redefinirsenha" >
                            <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
                        </Link>
                        <Grid  style={{ float: "right"}}>
                            Não possui uma conta? <Link className='Link' underline='none' href="/" >Acesse aqui</Link> 
                        </Grid>
                </Grid>   
                    <p className='subT'>Enviamos o código para seu e-mail</p>
                    <p className='text'>Insira o código de verificação de 6 dígitos enviando para *****@gmail.com. <Link className='Link' href="/redefinirsenha"underline='none' >Alterar</Link></p>
                    <div style={{height:40}} />
                    <TextField sx={{['& fieldset']:{borderRadius:3}}} type="text" id="codigo" label="Código" variant="outlined" name="codigo"/>
                    <FormLabel>
                       <Button style={{color: '#382B57', textTransform: 'none', fontWeight: 'bold'}}>Reenviar código</Button> 
                    </FormLabel> 
                    <div style={{height:40}} />
                        <Button variant="contained" className='Button'>Continuar</Button>
                    <p className='text' style={{textAlign:'center'}}>Se não encontrar o e-mail na sua caixa de entrada, verifique a pasta de spam.</p>
                 </div>
            </Grid>
        </div>
        
    );
}

export default Redefinirsenhasecondstep