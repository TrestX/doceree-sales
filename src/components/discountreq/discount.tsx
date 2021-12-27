import * as React from 'react';
import DiscountTable from '../tables/discountTable';
const Discount = () => {
    return (<>
        <div style={{ marginTop: '40px', marginLeft: '100px', float: 'left' }}>
            <h1 style={{ fontSize: '25px', fontWeight: 700, color: '#5e5d5d',textAlign:'left' }}>Discount Request</h1>
            <div style={{marginBottom:'7px'}}>
            </div>
            <DiscountTable/>
        </div>

    </>);
};
export default Discount;