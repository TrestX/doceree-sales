import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import './createproposal.css';
import BasicCardForm from './basiccardform';
import MaterialStepper from '../stepper/materialStepper';
import { Chart } from 'primereact/chart';
import { Divider } from 'primereact/divider';
import { Accordion, AccordionTab } from 'primereact/accordion';
const CreateProposal = () => {
     const [agency, setAgency] = useState('');
     const [client, setClient] = useState('');
     const [brand, setBrand] = useState('');
     const [businessObj, setBusinessObj] = useState('');
     const [market, setMarket] = useState<string>('');
     const [network, setNetwork] = useState<Map<string, string>>();
     const [campaignType, setCampaignType] = useState<Map<string, string>>();
     const [campaignObj, setCampaignObj] = useState<Map<string, string>>();
     const [audience, setAudience] = useState<Map<string, string>>();
     const [channel, setChannel] = useState<Map<string, string>>();
     const [tabs, setTabs] = useState<string[]>([]);
     const [bidStr, setBidstr] = useState<Map<string, string>>();
     const [durationf, setDurationf] = useState<Map<string, any>>();
     const [durationt, setDurationt] = useState<Map<string, any>>();
     const [reach, setReach] = useState<Map<string, string>>();
     const [businessRule, setBusinessRule] = useState<Map<string, boolean>>();
     const [freq, setFreq] = useState<any>(null);
     const [manageService, setManageService] = useState(false);
     const [dataPro, setDataPro] = useState('');
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
     React.useEffect(() => {
          console.log(network, 'n /n',
               campaignType, 'c /n',
               campaignObj, 'cO /n',
               audience, 'a /n',
               channel, 'chan /n',
               tabs, 'tabs /n',
               bidStr, 'bidS /n',
               durationf, 'df /n',
               durationt, 'dt /n',
               reach, 're /n',
               businessRule, 'br /n',
               freq, 'f /n',
               manageService, 'mS /n');
     }, [network,
          campaignType,
          campaignObj,
          audience,
          channel,
          tabs,
          bidStr,
          durationf,
          durationt,
          reach,
          businessRule,
          freq,
          manageService,]);
     const option = {
          rotation: -90,
          circumference: 180,
          cutout: '85%',
     };
     return (
          <>
               <div style={{ marginTop: '40px', marginLeft: '100px', float: 'left', minWidth: '100%', width: '100%', maxWidth: '100%' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 600, marginLeft: '40px', color: '#5e5d5d', textAlign: 'left' }}>Create Proposal</h1>
                    <div className="p-grid">
                         <div className="p-col-8">
                              <MaterialStepper manageService={manageService} setManageService={setManageService}
                                   dataPro={dataPro} setDataPro={setDataPro} network={network} setNetwork={setNetwork} setCampaignType={setCampaignType}
                                   campaignType={campaignType}
                                   campaignObj={campaignObj} setCampaignObj={setCampaignObj} audience={audience} setAudience={setAudience}
                                   channel={channel} setChannel={setChannel} bidStr={bidStr} setBidstr={setBidstr} durationf={durationf}
                                   durationt={durationt} reach={reach} businessRule={businessRule} freq={freq} setDurationf={setDurationf} setDurationt={setDurationt}
                                   setReach={setReach} setBusinessRule={setBusinessRule} setFreq={setFreq} agency={agency} client={client} brand={brand} businessObj={businessObj} market={market} setAgency={setAgency} setClient={setClient} setBrand={setBrand} setBusinessObj={setBusinessObj} setMarket={setMarket} tabs={tabs} setTabs={setTabs} />
                         </div>
                         <div className="p-col-4" style={{ borderRadius: '4px', marginTop: '8px' }}>
                              <div style={{ textAlign: 'left', borderRadius: '4px', float: 'left', maxWidth: '420px', border: '1px solid lightgray' }}>
                                   <Chart type="doughnut" data={chartData} options={option} style={{ position: 'relative', width: '40%', marginLeft: 'auto', marginRight: 'auto' }} />
                                   <div style={{ position: 'relative', fontSize: '14px', fontWeight: 600, marginTop: '-60px', marginLeft: '120px' }}>$280,90</div>
                                   <div style={{ position: 'relative', fontSize: '9px', marginLeft: '110px' }}>Estimated budget</div>
                                   <Divider />
                                   <div style={{ fontSize: '11px', color: 'grey', fontWeight: 500, paddingLeft: '10px' }}>
                                        Proposal Name
                                   </div>
                                   <Divider />
                                   <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                        Agency: <span style={{ color: 'grey' }}>{agency}</span>
                                   </div>
                                   <Divider />
                                   <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                        Client: <span style={{ color: 'grey' }}> {client} <span style={{ color: '#A45BE4', marginLeft: '6px' }}> Brand: <span style={{ color: 'grey' }}> {brand}</span></span></span>
                                   </div>
                                   <Divider />
                                   <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                        Geo: <span style={{ color: 'grey' }}>New York, Delaware, Georgia, Parsippanyr</span>
                                   </div>
                                   <Divider />
                                   <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                        Market: <span style={{ color: 'grey' }}>{market}</span>
                                   </div>
                                   {tabs !== undefined && <Divider />}
                                   {tabs !== undefined && tabs.map((tab, index) => <>
                                        <Accordion>
                                             <AccordionTab key={tab} header={tab} style={{ color: '#A45BE4 !important' }}>

                                                  <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                                       Network: <span style={{ color: 'grey' }}>{network !== undefined ? network.get(index.toString()) : ''}</span>
                                                  </div>
                                                  <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                                       Campaign Type: <span style={{ color: 'grey' }}>{campaignType != undefined && campaignType.get(index.toString())}</span>
                                                  </div>
                                                  <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                                       Audience: <span style={{ color: 'grey' }}>{audience != undefined && audience.get(index.toString())}</span>
                                                  </div>
                                                  <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                                       Channel: <span style={{ color: 'grey' }}>{channel != undefined && channel.get(index.toString())}</span>
                                                  </div>
                                                  <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                                       Reach: <span style={{ color: 'grey' }}>{reach != undefined && reach.get(index.toString())}</span>
                                                  </div>
                                                  <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                                       Frequency: <span style={{ color: 'grey' }}>312</span>
                                                  </div>
                                                  <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                                       Duration: <span style={{ color: 'grey' }}>{durationf != undefined && durationt != undefined && Math.abs(durationt.get(index.toString()) - durationf.get(index.toString())) / (1000 * 60 * 60 * 24)}</span>
                                                  </div>
                                             </AccordionTab>

                                        </Accordion></>
                                   )}
                                   <Divider />
                                   <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                        Data Products: <span style={{ color: 'grey' }}>{dataPro}</span>
                                   </div>
                                   <div style={{ fontSize: '11px', color: '#A45BE4', fontWeight: 500, paddingLeft: '10px' }}>
                                        Managed Service: <span style={{ color: 'grey' }}>{manageService ? 'Yes' : 'No'}</span>
                                   </div>
                                   <Divider />

                              </div>
                         </div>
                    </div>



               </div>
          </>
     );
};

export default CreateProposal;

