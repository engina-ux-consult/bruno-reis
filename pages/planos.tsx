import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const steps = [
    'Conta',
    'Planos',
    'Pagamento',
  ];

export default function HorizontalLabelPositionBelowStepper()

export default function RadioButtonsGroup()


function IndexPage() {


  return (

      <div>
            <Head>
            <title>Iknow - Crie sua conta</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

        <Grid container style={{ minHeight: '100vh'}}>
            
            <Grid item xs xs={12} sm={6} style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',}}>
                <h1 style={{ maxWidth: '650px', fontSize: '2.5rem', color: 'white', position: 'absolute', padding: '64px', }} >Lorem ipsum class sodales vivamus aptent, quis sagittis euismod dictumst nulla.</h1>
                <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg" style={{ width: '100%', height: '100vh', objectFit: 'cover'}} alt="brand" />
            </Grid>

            <Grid container item xs xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{ justifyContent: 'center', padding: 16,}}>
                
                <div />

                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>

                    <Grid container justify="center" style={{ justifyContent: 'center'}}>
                        <img src="../imgs/logo-brand.svg" width={200} alt="logo" />
                    </Grid>

                    <div style={{height:40}} />

                    <div style={{ justifyContent: 'center'}}>
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                    </div>

                    <div style={{height:40}} />
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Selecione o plano que melhor combina com você:</FormLabel>
                        <div style={{height:24}} />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group">

                            <div style={{ padding: '1.5rem', border: "2px solid #333333", borderRadius: "0.5rem",}}><FormControlLabel value="trimestral" control={<Radio />} label="Trimestral R$19,00" /></div>
                            <div style={{height:24}} />
                            <div style={{ padding: '1.5rem', border: "2px solid #333333", borderRadius: "0.5rem",}}><FormControlLabel value="semestral" control={<Radio />} label="Semestral R$15,00" /></div>
                            <div style={{height:24}} />
                            <div style={{ padding: '1.5rem', border: "2px solid #333333", borderRadius: "0.5rem",}}><FormControlLabel value="anual" control={<Radio />} label="Anual R$10,00" /></div>
                        </RadioGroup>
                    </FormControl>
                    
                    <div style={{height:40}} />

                    <Link href="/checkout" passHref>
                    <Button variant="contained" onClick={() => chamaLogin()}>Continuar</Button>
                    </Link>

                    <div style={{height:40}} />

                </div>

                <div />
            </Grid>

        </Grid>
      </div>
  );
};

export default IndexPage
