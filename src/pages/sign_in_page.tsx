import LoginForm from '../components/forms/login/login_form';
import * as React from 'react';
import { FooterLogin } from '../components/footers/footerLogin';

const SignInPage = () => {
    return (<>
        <div className="p-grid" style={{ padding: '2% 0% 2% 0%', maxWidth: '100%', maxHeight: '100%',overflow:'hidden' }}>
            <div className="p-md-1 p-lg-1"></div>
            <div className="p-col-12 p-md-6 p-lg-5 p-xl-5" style={{ textAlign: 'left',overflow:'hidden' }}>
                <img src='assets/doceree.png' width={242} />
                <LoginForm />
                <FooterLogin />
            </div>
            <div className="p-col-12 p-sm-12 p-md-5 p-lg-5 p-xl-5">
                <img src='assets/laptop.png' className="img" style={{ width: '82.6%', height: '100%' }} />
            </div>
            <div className="p-md-0 p-lg-1"></div>
        </div>
    </>);
};

export default SignInPage;