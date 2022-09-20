import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {ArrowBack} from '@mui/icons-material';
import ST from './styles';
import Head from 'next/head';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }

function Redefinirsenhathirdstep(){
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, [prop]: event.target.value });
        };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    return(
        <div>    
          <ST/>
          <Head>
            <title>Iknow - Redefinir Senha</title>  
          </Head>
            <Grid container style={{ minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <img src="../imgs/bd-broe.jpg" className='inv' style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
                <Grid style={{  flexDirection: 'row', }}>
                        <Link href="/redefinirsenhasecondstep" >
                            <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
                        </Link>
                        <Grid  style={{ float: "right"}}>
                            Não possui uma conta? <Link className='Link' href="/" underline='none'>Acesse aqui</Link> 
                        </Grid>
                </Grid>   
            <p className='subT'>Crie uma senha nova.</p>
            <p className='text'>Crie uma senha nova com pelo menos 8 caracteres.</p>
            <div className='h' />
            <FormControl sx={{ m: 0, width: '45ch',['& fieldset']:{borderRadius:3}}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-passwor">Nova senha</InputLabel>
          <OutlinedInput
            id="senha"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>   
            <div className='h' />
            <FormControl sx={{ m: 0, width: '45ch',['& fieldset']:{borderRadius:3}}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Repetir senha</InputLabel>
          <OutlinedInput
            id="repetirsenha"
            type={values.showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repetir senha"
          />
        </FormControl>   
            <div className='h' />
            <Link underline="none" href='/login' style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
              <Button variant="contained" className='Button'>Atualizar senha</Button>
            </Link>
        </div>
            </Grid>
        </div>
        
    );
}

export default Redefinirsenhathirdstep