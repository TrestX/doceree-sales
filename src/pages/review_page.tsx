import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import Review from '../components/review/review';
import { sideBarContentAdmin, sideBarContent } from './sidebarcontentConst';
const ReviewPage = () => {

    return (<>

        {sessionStorage.getItem('accountType') && (sessionStorage.getItem('accountType') === 'finance' || sessionStorage.getItem('accountType') === 'admin') &&
            <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContentAdmin} /></>} contentComponent={<><Review />
            </>} />
        }
        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'sales' &&
            <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><Review />
            </>} />
        }
    </>);
};

export default ReviewPage;