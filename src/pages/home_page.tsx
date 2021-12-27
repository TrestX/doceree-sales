
import TopBarMenu from '../components/topbarmenu/topbarmenu';
import HomePageCards from '../components/homepagecards/homepagecards';
import * as React from 'react';

const HomePage = () => {
    return (<>
    <div>
    <img src='assets/doceree.png' style={{width:'130px',position:'fixed',left:'40px',top:'20px'}}/>
    </div>
<TopBarMenu/>
<h3 style={{display:'block',marginLeft:'auto',marginRight:'auto',marginTop:'180px',fontWeight:500,fontSize:'22px',color:'gray'}}>Welcome to doceree</h3>

<HomePageCards/>
   
    </>);
};

export default HomePage;