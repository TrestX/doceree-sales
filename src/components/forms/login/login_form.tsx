import CustomizedButtons from '../../buttons/button';
import { CustomRequiedTextField } from '../../textfields/textfield';
import { Box } from '@mui/material';
import * as React from 'react';

const LoginForm = () => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>LOGIN</div>
            <div>Unlock the Power</div>
            <div>
                <CustomRequiedTextField label='Email' placeholder={'Email'} type={'string'} />
                <CustomRequiedTextField label='Password' placeholder={'Password'} type={'password'} />
            </div>
            <CustomizedButtons label='Go to Dashboard' onClickHandler={() => { console.log(''); }} />
        </Box>
    );
};
export default LoginForm;