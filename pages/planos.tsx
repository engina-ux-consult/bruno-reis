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


function Planos() {


  return (

      <div>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 400, }}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Selecione o plano que melhor combina com você:</FormLabel>
                        <div style={{height:24}} />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group">

                            <div style={{ padding: '0.5rem', border: "2px solid #333333", borderRadius: "0.5rem",}}><FormControlLabel value="trimestral" control={<Radio />} label="Trimestral R$19,00" /></div>
                            <div style={{height:24}} />
                            <div style={{ padding: '0.5rem', border: "2px solid #333333", borderRadius: "0.5rem",}}><FormControlLabel value="semestral" control={<Radio />} label="Semestral R$15,00" /></div>
                            <div style={{height:24}} />
                            <div style={{ padding: '0.5rem', border: "2px solid #333333", borderRadius: "0.5rem",}}><FormControlLabel value="anual" control={<Radio />} label="Anual R$10,00" /></div>
                        </RadioGroup>
                    </FormControl>
                </div>
      </div>
  );
};

export default Planos
