import * as React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import './sidebarcontent.css';
import { Divider } from 'primereact/divider';
const SideBarContent = () => {
    return (<>
 
                <Accordion className="sidebarcontent" activeIndex={0}>
                    <AccordionTab header="Proposal number 2343">
                    
                            <p style={{fontSize:'10px',color:'#6B42F6'}}>Finance has approved your request. <span style={{color:'skyblue',fontWeight:600}}>Review</span></p>
                        <p style={{fontSize:'8px',color:'gray'}}>12 Dec 2021</p>
                        <Divider />
                        <p style={{fontSize:'10px' ,color:'grey'}}>Finance has approved your request. <span style={{color:'skyblue',fontWeight:600}}>Review</span></p>
                        <p style={{fontSize:'8px',color:'gray'}}>02 Dec 2021</p>
                        <Divider />
                        <p style={{fontSize:'10px',color:'grey'}}>Finance has approved your request. <span style={{color:'skyblue',fontWeight:600}}>Review</span></p>
                        <p style={{fontSize:'8px',color:'gray'}}>02 Dec 2021</p>
                    </AccordionTab>
                    <AccordionTab header="Proposal number 2343">
                    </AccordionTab>
                </Accordion>
    </>);
};

export default SideBarContent;