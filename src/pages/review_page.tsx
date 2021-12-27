import * as React from 'react';
import SideNav from '../components/navigation/sidenav/sidenav';
import SalesTopBar from '../components/salestopbar/salestopbar';
import SalesSideBarContent from '../components/salessidebarcontent/salessidebarcontent';
import Review from '../components/review/review';
const ReviewPage = () => {
    const sideBarContent=[
        {icon:'user',title:'Manage Proposal'},
        {icon:'pencil',title:'Create Proposal'},
        {icon:'percentage',title:'Rate Card'},
        {icon:'file',title:'Discount Request'}
    ];
    return (<>
        <SideNav appbarComponent={<><SalesTopBar/></>} sidebarComponent={<><SalesSideBarContent list={sideBarContent} /></>} contentComponent={<><Review/>
            </>} />

    </>);
};

export default ReviewPage;