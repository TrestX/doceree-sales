import LoginForm from '../components/forms/login/login_form';
import * as React from 'react';
import { OutlinedCard } from '../components/cards/cards';
import SideNav from '../components/navigation/sidenav/sidenav';
import { Box } from '@mui/material';
import CollapsibleTable from '../components/tables/colapsable_table/colapsableTable';

const LoginPage = () => {
    return (<>
        <SideNav appbarComponent={<></>} sidebarComponent={<></>} contentComponent={<><Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <LoginForm />
            <div style={{ margin: '50px' }}><OutlinedCard imagePath='https://picsum.photos/id/674/2000' title='Sales Manager' imgWidth='30px' description='kjdjskld sf
    ddsfsdfdsfds dsfsdf sd f sd fs d fds f ds f sd f ds fsd f d sf sd f sd f' clickHandler={() => { console.log('clicked'); }} /></div>
        </Box>
            <div style={{ marginLeft: '100px', width: 'fit-context' }}><CollapsibleTable /></div></>} />

    </>);
};

export default LoginPage;