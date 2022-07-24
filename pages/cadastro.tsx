import TextField from '@mui/material/TextField';
import React, {useState} from "react";
function Cadastro(){
   
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
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
                    <TextField type="password" id="senha" label="Senha" variant="outlined" name="senha" onChange={handleInputChange} value={formValues.senha || ''}/>    
                </div>
            </form>
      </div>
    )
}

export default Cadastro