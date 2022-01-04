import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import ManageProposal from '../components/manageproposal/manageproposal';
import { sideBarContentAdmin, sideBarContent } from './sidebarcontentConst';
const ManageProposalPage = () => {

    return (<>
        {sessionStorage.getItem('accountType') && (sessionStorage.getItem('accountType') === 'finance' || sessionStorage.getItem('accountType') === 'admin') &&
            <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContentAdmin} /></>} contentComponent={<><ManageProposal />
            </>} />
        }
        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'sales' &&
            <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><ManageProposal />
            </>} />
        }

    </>);
};

export default ManageProposalPage;