import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import RateCard from '../components/ratecard/ratecard';
import {sideBarContentAdmin,sideBarContent} from './sidebarcontentConst';
const RatePage = () => {
    return (<>

        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType')==='admin' &&
        <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContentAdmin} /></>} contentComponent={<><RateCard />
            </>} />
}
{sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType')==='sales' &&
        <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><RateCard />
            </>} />
}
    </>);
};

export default RatePage;