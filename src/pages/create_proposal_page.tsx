import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import CreateProposal from '../components/createproposal/createproposal';
import { sideBarContentAdmin, sideBarContent } from './sidebarcontentConst';
const CreateProposalPage = () => {
    return (<>

        {sessionStorage.getItem('accountType') && (sessionStorage.getItem('accountType') === 'finance' || sessionStorage.getItem('accountType') === 'admin') &&
            <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContentAdmin} /></>} contentComponent={<><CreateProposal />
            </>} />
        }
        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'sales' &&
            <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><CreateProposal />
            </>} />
        }
    </>);
};

export default CreateProposalPage;