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


export function CustomPrimePasswordTextField({ placeholder}: { placeholder: string}) {
    return <Password placeholder={placeholder} toggleMask feedback={false}/>;
}

export function CustomPrimeInputTextField({ placeholder }: { placeholder: string}) {
    return <InputText placeholder={placeholder} />;
}

export function CustomPrimeInputTextFieldLeftIcon({ placeholder,icon,width }: { placeholder: string,icon:string,width:string}) {
    return <span className="p-input-icon-left" style={{width:width+'%'}}>
    <i className={`pi pi-${icon}`} />
    <InputText placeholder={placeholder} style={{backgroundColor:'white !important',width:'100% !important'}}/>
    </span>;
}

