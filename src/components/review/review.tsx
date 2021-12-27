import * as React from 'react';
import ReviewTable from '../tables/reviewTable';
import {CustomizedPButtons} from '../buttons/pbutton';
const Review = () => {
    return (<>
        <div style={{ marginTop: '40px', marginLeft: '100px', float: 'left' }}>
            <h1 style={{ fontSize: '25px', fontWeight: 700, color: '#5e5d5d',textAlign:'left' }}>Review Template</h1>
            <div style={{marginBottom:'7px',textAlign:'right'}}>
            <CustomizedPButtons label='Export' icon='external-link' onClickHandler={() => { console.log(''); }} />
            <CustomizedPButtons label='PDF' icon='file' onClickHandler={() => { console.log(''); }} />
            <CustomizedPButtons label='Share' icon='hashtag' onClickHandler={() => { console.log(''); }} />
            </div>
            <ReviewTable/>
        </div>

    </>);
};
export default Review;