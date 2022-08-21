import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormLabel } from '@mui/material';

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
            <Grid container style={{ minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <img src="../imgs/bd-broe.jpg" style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
            <h1>Crie uma senha nova.</h1>
            <FormLabel>Crie uma senha nova com pelo menos 8 caracteres.</FormLabel>
            <div style={{height:40}} />
            <FormControl sx={{ m: 0, width: '45ch',['& fieldset']:{borderRadius:3}}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-passwor">Senha</InputLabel>
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
            <div style={{height:40}} />
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
            <div style={{height:40}} />
            <Link href="/login" passHref>
                <Button variant="contained" sx={{backgroundColor: '#382B57',borderRadius: 3}}>Finalizar</Button>
            </Link>
        </div>
            </Grid>
        </div>
        
    );
}

export default Redefinirsenhathirdstep