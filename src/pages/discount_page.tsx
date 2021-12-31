import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import Discount from '../components/discountreq/discount';
import {sideBarContentAdmin,sideBarContent} from './sidebarcontentConst';
const DiscountPage = () => {

    return (<>

        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType')==='admin' &&
        <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContentAdmin} /></>} contentComponent={<><Discount />
        
            </>} />
}
{sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType')==='sales' &&
        <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><Discount />
        
            </>} />
}
    </>);
};

export default DiscountPage;