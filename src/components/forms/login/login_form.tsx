import { CustomizedButtons } from '../../buttons/button';
import { CustomPrimeInputTextField, CustomPrimePasswordTextField } from '../../textfields/textfield';
import { Box } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './login_form.css';
import { Toast } from 'primereact/toast';
import { useState, useRef } from 'react';
const LoginForm = () => {
    const toast = useRef(null);
    const history = useNavigate();
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const handleOnClick = () => {
        if (email === 'admin@doceree.com' && pass === 'admin@123') {
            sessionStorage.setItem('accountType', 'admin');
            history('/home');
            // React.useCallback(() => history('/home'), [history]);
        } else if (email === 'sales@doceree.com' && pass === 'sales@123') {
            sessionStorage.setItem('accountType', 'sales');
            history('/manage');
            // React.useCallback(() => history('/home'), [history]);
        } else if (email === 'finance@doceree.com' && pass === 'finance@123') {
            sessionStorage.setItem('accountType', 'finance');
            history('/home');
            // React.useCallback(() => history('/home'), [history]);
        } else {
            toast.current.show({ severity: 'error', summary: 'Invalid Credentials', detail: 'User not found', life: 3000 });
        }

    };
    // 
    return (
        <>
            <Toast ref={toast} />
            <div style={{ fontWeight: 500, fontSize: '1.5rem', marginLeft: '10px', marginTop: '90px' }}>LOGIN</div>
            <div style={{ fontWeight: 600, fontSize: '28px', marginTop: '15px', marginLeft: '10px' }}>Unlock the Power</div>
            <div className='p-grid' style={{ marginTop: '16px', marginLeft: '0px' }}>
                <div className='p-col-12 p-md-6'>
                    <CustomPrimeInputTextField placeholder={'Email'} email={setEmail} />
                </div>
                <div className='p-col-12 p-md-6'>
                    <CustomPrimePasswordTextField placeholder={'Password'} password={setPass} />
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