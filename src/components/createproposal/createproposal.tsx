import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import './createproposal.css';
import BasicCardForm from './basiccardform';
import MaterialStepper from '../stepper/materialStepper';
import { Chart } from 'primereact/chart';
import { Divider } from 'primereact/divider';
import { Accordion, AccordionTab } from 'primereact/accordion';
const CreateProposal = () => {
     const [agency,setAgency] = useState('');
     const [client,setClient] = useState('');
     const [brand,setBrand] = useState('');
     const [businessObj,setBusinessObj] = useState('');
     const [market, setMarket] = useState<any>(null);
     const [network,setNetwork] = useState('');
     const [campaignType,setCampaignType] = useState('');
     const [campaignObj,setCampaignObj] = useState('');
     const [audience,setAudience] = useState('');
     const [channel, setChannel] = useState('');
     const [bidStr, setBidstr] = useState<any>(null);
     const [durationf, setDurationf] = useState<any>(null);
     const [durationt, setDurationt] = useState<any>(null);
     const [reach, setReach] = useState('');
     const [businessRule, setBusinessRule] = useState(false);
     const [freq,setFreq] = useState<any>(null);
     const [manageService, setManageService] = useState(false);
     const [dataPro,setDataPro] = useState('');
    const chartData = {
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                borderWidth: 2

            }]
    };
    const option = {
        rotation: -90,
        circumference: 180,
        cutout: '85%',
    };
    return (
        <>
            <div style={{ marginTop: '40px', marginLeft: '100px', float: 'left', minWidth: '100%', width: '100%',maxWidth:'100%' }}>
                <h1 style={{ fontSize: '25px', fontWeight: 700, color: '#5e5d5d', textAlign: 'left' }}>Create Proposal</h1>
                 <div className="p-grid">
                    <div className="p-col-5">
                    <MaterialStepper manageService={manageService} setManageService={setManageService}
     dataPro={dataPro} setDataPro={setDataPro} network={network} setNetwork={setNetwork} setCampaignType={setCampaignType}
campaignObj={campaignObj} setCampaignObj={setCampaignObj} audience={audience} setAudience={setAudience}
channel={channel} setChannel={setChannel} bidStr={bidStr} setBidstr={setBidstr} durationf={durationf}
durationt={durationt} reach={reach} businessRule={businessRule} freq={freq} setDurationf={setDurationf} setDurationt={setDurationt}
setReach={setReach} setBusinessRule={setBusinessRule} setFreq={setFreq} agency={agency} client={client} brand={brand} businessObj={businessObj} market={market} setAgency={setAgency} setClient={setClient} setBrand={setBrand} setBusinessObj={setBusinessObj} setMarket={setMarket}/>
                    </div>
                    <div className="p-col-7" style={{borderRadius:'8px'}}>
                         <div className=" p-card" style={{textAlign:'left',borderRadius:'8px',float:'left',maxWidth:'420px',width:'420px'}}>
                         <Chart type="doughnut" data={chartData} options={option} style={{ position: 'relative', width: '40%',marginLeft:'auto',marginRight:'auto' }} />
                            <div style={{position:'relative',fontSize:'14px',fontWeight:600,marginTop:'-60px',marginLeft:'180px'}}>$280,90</div>
                            <div style={{position:'relative',fontSize:'9px',marginLeft:'170px'}}>Estimated budget</div>
                            <Divider/>
                            <div style={{fontSize:'11px',color:'grey',fontWeight:500,paddingLeft:'10px'}}>
                                 Proposal Name
                            </div>
                            <Divider/>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Agency: <span style={{color:'grey'}}>{agency}</span>
                            </div>
                            <Divider/>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Client: <span style={{color:'grey'}}> {client} <span style={{color:'#A45BE4',marginLeft:'6px'}}> Brand: <span style={{color:'grey'}}> {brand}</span></span></span>
                            </div>
                            <Divider/>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Geo: <span style={{color:'grey'}}>New York, Delaware, Georgia, Parsippanyr</span>
                            </div>
                            <Divider/>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Market: <span style={{color:'grey'}}>{market && market.name}</span>
                            </div>
                            <Divider/>
                            <Accordion activeIndex={0}>
                    <AccordionTab header="Campaign 1" style={{color:'#A45BE4 !important'}}>
                    
                    <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Network: <span style={{color:'grey'}}>{network}</span>
                            </div>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Campaign Type: <span style={{color:'grey'}}>{campaignType}</span>
                            </div>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Audience: <span style={{color:'grey'}}>{audience}</span>
                            </div>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Channel: <span style={{color:'grey'}}>{channel}</span>
                            </div>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Reach: <span style={{color:'grey'}}>{reach}</span>
                            </div>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Frequency: <span style={{color:'grey'}}>312</span>
                            </div>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Duration: <span style={{color:'grey'}}>{Math.abs(durationt - durationf) / (1000 * 60 * 60 * 24)}</span>
                            </div>
                    </AccordionTab>
                    <AccordionTab header="Campaign 2" style={{color:'#A45BE4'}}>
                    </AccordionTab>
                    <AccordionTab header="Campaign 3" style={{color:'#A45BE4'}}>
                    </AccordionTab>
                </Accordion>
                <Divider/>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Data Products: <span style={{color:'grey'}}>{dataPro}</span>
                            </div>
                            <div style={{fontSize:'11px',color:'#A45BE4',fontWeight:500,paddingLeft:'10px'}}>
                                 Managed Service: <span style={{color:'grey'}}>{manageService?'Yes':'No'}</span>
                            </div>
                            <Divider/>

                         </div>
                    </div>
                 </div>



            </div>
        </>
    );
};

export default CreateProposal;

