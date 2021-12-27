import {CustomizedButtons} from '../../buttons/button';
import { CustomPrimeInputTextField,CustomPrimePasswordTextField } from '../../textfields/textfield';
import { Box } from '@mui/material';
import * as React from 'react';
import './login_form.css';
const LoginForm = () => {
    return (
        <>
        <div className="p-grid custP" style={{padding:'10% 5% 10% 15%',maxWidth: '100%',maxHeight:'100%'}}>
            <div className="p-col-12 p-md-6 p-lg-6" style={{textAlign:'left'}}>
            <img src='assets/doceree.png' />
            <div style={{fontWeight:400,fontSize:'16px',marginLeft:'10px',marginTop:'10%'}}>LOGIN</div>
            <div style={{fontWeight:600,fontSize:'17px',marginTop:'6px',marginLeft:'10px'}}>Unlock the Power</div>
            <div className="p-grid" style={{marginTop:'16px',marginLeft:'10px'}}>
                <CustomPrimeInputTextField  placeholder={'Email'}/>
                <span style={{marginLeft:'16px'}}>
                <CustomPrimePasswordTextField placeholder={'Password'}/>
                </span>
                
            </div>
            <div style={{marginTop:'26px'}}>
            <CustomizedButtons label='Go to Dashboard' onClickHandler={() => { console.log(''); }} />
            </div>
            <div style={{fontSize:'11px',fontWeight:600,color:'#6B42F6',marginLeft:'10px'}}>
                Forgot your Password?
            </div>
            <div style={{fontSize:'11px',fontWeight:600,color:'gray',marginTop:'10px',marginLeft:'10px'}}>
                Don&apos;t have an account? <a style={{color:'#6B42F6'}} >Click here</a> to signup in less than 5 minutes!
            </div>
        </div>
        <div className="p-col-12 p-sm-12 p-md-6 p-lg-6">
            <img src='assets/laptop.png' className="img"/>
        </div>
        
        </div>
        </>
    );
};
export default LoginForm;