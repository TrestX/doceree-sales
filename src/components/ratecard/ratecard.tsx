import * as React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import RateTable from '../tables/rateTable';
import { CustomizedPButtonsNI, CustomizedPrimeButton} from '../buttons/pbutton';
import './ratecard.css';
import { useState } from 'react';
import RateDiscountTable from '../tables/ratediscountTable';
const RateCard = () => {
    const tabList = ['US', 'UK', 'India'];
    const [tabNumb,setTabNum] = useState(0);
    const changeTab=(ctabnum:number)=>{
        if (tabNumb===0 && ctabnum===1){
            setTabNum(1);
        }else if(tabNumb===1 && ctabnum===0){
            setTabNum(0);
        }
    };
    return (<>
        <div style={{ marginTop: '80px', marginLeft: '100px', float: 'left' }}>
            <div style={{textAlign:'left',marginLeft:'25px'}}>
        <CustomizedPrimeButton label={'Master Card Rate'} fw={600} background={tabNumb===0?'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)':'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'}fs={'11px'} onClickHandler={()=>{changeTab(0);}}/>
                    <CustomizedPrimeButton label={'Discount Details'} background={tabNumb===1?'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)':'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} fw={600} brad={'7px 7px 0px 0px'} color={'white'}fs={'11px'} onClickHandler={()=>{changeTab(1);}}/>
            </div>
            <div className="p-card" style={{border:'1px solid black',borderRadius:'17px',padding:'15px',width:'100%'}}>

            <TabView>
                <TabPanel header='US'>
                    {tabNumb===0?<RateTable/>:<RateDiscountTable/>}
                </TabPanel>
                <TabPanel header='UK'>
                {tabNumb===0?<RateTable/>:<RateDiscountTable/>}
                </TabPanel>
                <TabPanel header='India'>
                {tabNumb===0?<RateTable/>:<RateDiscountTable/>}
                </TabPanel>
            </TabView>
            </div>
            {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType')==='admin' && <div style={{position:'absolute',
    top: '155px',
    left: '1000px'}}>
<CustomizedPButtonsNI label={'Add'} fw={600} background={'white'} border={'1px solid #6B42F6'} color={'grey'}fs={'12px'} onClickHandler={()=>{console.log('empty');}}/>
<span style={{marginLeft:'15px'}}>
    <CustomizedPrimeButton label={'Publish'} fw={600} background={'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)'} brad={'25px'} color={'white'}fs={'12px'} onClickHandler={()=>{console.log('empty');}}/>
</span>
</div>}
        </div>

    </>);
};
export default RateCard;