import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import ManageProposal from '../components/manageproposal/manageproposal';
const ManageProposalPage = () => {
    const sideBarContent = [
        { icon: 'user', title: 'Manage Proposal', link: '/manage' },
        { icon: 'pencil', title: 'Create Proposal', link: '/createproposal' },
        { icon: 'percentage', title: 'Rate Card', link: '/rate' },
        { icon: 'file', title: 'Discount Request', link: '/discount' }
    ];
    return (<>
        <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><ManageProposal />
        </>} />

    </>);
};

export default ManageProposalPage;