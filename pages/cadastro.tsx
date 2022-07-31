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

function Cadastro(){
   
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    };

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

    console.log('*** formValues', formValues);
    return(
        <div>
            <form>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    
                    <div style={{height:40}} />
                    <TextField type="text" id="nome" label="Nome" name="name" variant="outlined" placeholder="nome" onChange={handleInputChange} value={formValues.name || ''}/>
                    <div style={{height:40}} />
                    <TextField type="email" id="email" label="E-mail" variant="outlined" name="email" onChange={handleInputChange} value={formValues.email || ''}/>
                    <div style={{height:40}} />
                    <FormControl sx={{ m: 0, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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
                </div>
            </form>
      </div>
    )
}

export default Cadastro