import { CustomizedButtons } from '../../buttons/button';
import { CustomPrimeInputTextField, CustomPrimePasswordTextField } from '../../textfields/textfield';
import { Box } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './login_form.css';
const LoginForm = () => {
    const history = useNavigate();
    const handleOnClick = React.useCallback(() => history('/home'), [history]);
    return (
        <>
            <div style={{ fontWeight: 400, fontSize: '16px', marginLeft: '10px', marginTop: '10%' }}>LOGIN</div>
            <div style={{ fontWeight: 600, fontSize: '17px', marginTop: '6px', marginLeft: '10px' }}>Unlock the Power</div>
            <div className='p-grid' style={{ marginTop: '16px', marginLeft: '0px' }}>
                <div className='p-col-12 p-md-6'>
                    <CustomPrimeInputTextField placeholder={'Email'} />
                </div>
                <div className='p-col-12 p-md-6'>
                    <CustomPrimePasswordTextField placeholder={'Password'} />
                </div>

            </div>
            <div style={{ marginTop: '26px' }}>
                <CustomizedButtons label='Go to Dashboard' onClickHandler={handleOnClick} />
            </div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#6B42F6', marginLeft: '10px' }}>
                Forgot your Password?
            </div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'gray', marginTop: '10px', marginLeft: '10px' }}>
                Don&apos;t have an account? <a style={{ color: '#6B42F6' }} >Click here</a> to signup in less than 5 minutes!
            </div>
        </>
    );
};
export default LoginForm;