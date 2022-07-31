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
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, margin: 'auto' }}>
            <h1>Crie uma senha nova.</h1>
            <p>Crie uma senha nova com pelo menos 8 caracteres.</p>
            <div style={{height:40}} />
            <FormControl sx={{ m: 0, width: '45ch' }} variant="outlined">
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
            <FormControl sx={{ m: 0, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Repetir senha</InputLabel>
          <OutlinedInput
            id="repetirsenha"
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
            label="Repetir senha"
          />
        </FormControl>   
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