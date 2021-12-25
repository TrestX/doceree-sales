import { TextField } from '@mui/material';
import * as React from 'react';

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