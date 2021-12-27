import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import RateCard from '../components/ratecard/ratecard';
const RatePage = () => {
    const sideBarContent = [
        { icon: 'user', title: 'Manage Proposal', link: '/manage' },
        { icon: 'pencil', title: 'Create Proposal', link: '/createproposal' },
        { icon: 'percentage', title: 'Rate Card', link: '/rate' },
        { icon: 'file', title: 'Discount Request', link: '/discount' }
    ];
    return (<>
        <SideNav appbarComponent={<><SalesTopBar /></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><RateCard />
        </>} />

    </>);
};

export default RatePage;