import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, {useState} from "react";
import FormLabel from '@mui/material/FormLabel';
import {ArrowBack} from '@mui/icons-material';
import ST from './styles';
import Head from 'next/head';

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
            <ST/>
            <Head>
              <title>Iknow - Redefinir Senha</title>  
            </Head>
            <Grid container style={{ minHeight: '100vh'}}>
            <Grid item  sm={6}  style={{   display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                <img src="../imgs/bd-broe.jpg" className='inv' style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>
            <Grid item xs={12} sm={6} style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
            
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
                <Grid style={{  flexDirection: 'row', }}>
                        <Link className='Link' href="/login" underline="none">
                            <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
                        </Link>
                        <Grid  style={{ float: "right"}}>
                            Não possui uma conta? <Link className='Link' href="/" underline="none" >Acesse aqui</Link> 
                        </Grid>
                </Grid>   
                <p className='subT'>Esqueceu a senha?</p>
            <p className='text'>Digite seu e-mail cadastrado para enviarmos um código de alteração de senha.</p>
           
            <TextField sx={{['& fieldset']:{borderRadius:3}}} type="email" id="email" label="E-mail" variant="outlined" name="email"
            value={email} helperText={message} onChange={handleOnChange}/>
                <div className='h' />
                <Link underline="none" href='/redefinirsenhasecondstep' style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    <Button variant="contained" className='Button'>Enviar código</Button>
                </Link>
                    
                </div>
                </Grid>
            </Grid>
        </div>
        
    );
}

export default Redefinir