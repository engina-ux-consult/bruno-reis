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
import FormLabel from '@mui/material/FormLabel';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }

function IndexPage() {    

const [page, setPage] = useState(0);
const [step, setStep] = useState(0);

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

  return (

      <div>
            <Head>
           
            </Head>

        <Grid container style={{ minHeight: '100vh'}}>
            
            <Grid item xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <h1 style={{ maxWidth: '650px', fontSize: '2.5rem', color: 'white', position: 'absolute', padding: '64px', }} >Lorem ipsum class sodales vivamus aptent, quis sagittis euismod dictumst nulla.</h1>
                <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg" style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>

            <Grid item xs={12} sm={6} style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>

                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    <form>
                    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    <div style={{height:40}} />
                    <TextField type="email" id="email" label="E-mail" variant="outlined" name="email" 
                    value={email} error={message} helperText={message} onChange={handleOnChange} />
                    <div style={{height:40}} />
                    <div>               
      <div>
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
            label="Password"
          />
        </FormControl>
      </div>
      </div>   
                </div>
                    </form>
                    <FormLabel>
                      Esqueceu a senha?<Link href="/redefinirsenha" passHref> Clique aqui</Link>
                    </FormLabel>
                    
                    <div style={{height:40}} />
                        <Button variant="contained" type="submit"
                        >Continuar</Button>

                    </div>
            </Grid>

        </Grid>
      </div>
  );
};

export default IndexPage
