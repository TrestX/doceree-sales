import { TextField } from '@mui/material';
import * as React from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import './textfield.css';
export function CustomRequiedTextField({ label, placeholder, type = 'string' }: { label: string, placeholder: string, type: string }) {
    return <TextField
        required
        id="outlined-required"
        label={label}
        placeholder={placeholder}
        type={type}
        defaultValue=""
        style={{ backgroundColor: '#FAFBFD', borderRadius: '15px' }}
    />;
}
export function CustomTextField({ label, placeholder, type = 'string' }: { label: string, placeholder: string, type: string }) {
    return <TextField
        required
        id="outlined"
        label={label}
        placeholder={placeholder}
        type={type}
        defaultValue=""
        style={{ backgroundColor: '#FAFBFD', borderRadius: '15px' }}
    />;

}

export function CustomTextFieldWithIcon({ label, placeholder, type = 'string', icon }: { label: string, placeholder: string, type: string, icon: React.ReactNode }) {
    return <TextField
        required
        id="outlined"
        InputProps={{
            startAdornment: icon
        }}
        label={label}
        placeholder={placeholder}
        type={type}
        defaultValue=""
        style={{ backgroundColor: '#FAFBFD', borderRadius: '15px' }}
    />;

}


export function CustomPrimePasswordTextField({ placeholder,password}: { placeholder: string, password:React.Dispatch<React.SetStateAction<string>>}) {
    return <Password placeholder={placeholder} toggleMask feedback={false} onChange={(e)=>{password(e.target.value);}}/>;
}

export function CustomPrimeInputTextField({ placeholder,email }: { placeholder: string,email:React.Dispatch<React.SetStateAction<string>>}) {
    return <InputText placeholder={placeholder} onChange={(e)=>{email(e.target.value);}}/>;
}

export function CustomPrimeInputTextFieldLeftIcon({ placeholder,icon,width }: { placeholder: string,icon:string,width:string}) {
    return <span className="p-input-icon-left" style={{width:width+'%'}}>
    <i className={`pi pi-${icon}`} />
    <InputText placeholder={placeholder} style={{backgroundColor:'white !important',width:'100% !important'}}/>
    </span>;
}

