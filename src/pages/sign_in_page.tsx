import LoginForm from '../components/forms/login/login_form';
import * as React from 'react';
import { FooterLogin } from '../components/footers/footerLogin';

const SignInPage = () => {
    return (<>
        <div className="p-grid custP" style={{ padding: '10% 0% 10% 0%', maxWidth: '100%', maxHeight: '100%' }}>
            <div className="p-md-3"></div>
            <div className="p-col-12 p-md-3" style={{ textAlign: 'left' }}>
                <img src='assets/doceree.png' width={180} />
                <LoginForm />
                <FooterLogin />
            </div>
            <div className="p-col-12 p-sm-12 p-md-3 p-lg-3">
                <img src='assets/laptop.png' className="img" style={{ marginTop: '-80px' }} />
            </div>
            <div className="p-md-3"></div>
        </div>
    </>);
};

export default SignInPage;