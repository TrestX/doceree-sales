import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import { sideBarContentFinance } from './sidebarcontentConst';
import ManageCommercialProposal from '../components/manage_commerce_proposals/manage_commerce_proposal';
const ManageFinancePage = () => {
    return (<>
        {sessionStorage.getItem('accountType') && (sessionStorage.getItem('accountType') === 'finance' || sessionStorage.getItem('accountType') === 'admin') &&
            <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContentFinance} /></>} contentComponent={<ManageCommercialProposal />} />
        }
    </>
    );
};

export default ManageFinancePage;

