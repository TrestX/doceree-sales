import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import * as React from 'react';
import { RadioButton } from 'primereact/radiobutton';
import './proposal.css';
import { Checkbox } from 'primereact/checkbox';
import { Tooltip } from 'primereact/tooltip';
import { CustomizedPTButtons, CustomizedPButtonsNI, CustomizedPrimeButton, CustomizedPrimeDButton } from '../../buttons/pbutton';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { MultiSelect } from 'primereact/multiselect';

import { Dialog } from 'primereact/dialog';
import { CampaignName } from '../../dialog/primedialog';
import { TabPanel, TabView } from 'primereact/tabview';
import { InputSwitch } from 'primereact/inputswitch';
import CreateAudienceTabView from './createAudienceTabView';
import { CustomizedButtons } from '../../buttons/button';
import TabList from './tablist';

const ProposalBuilderForm = ({ manageService, setManageService, dataPro, setDataPro, network, setNetwork, setCampaignType,
    campaignObj, setCampaignObj, audience, setAudience,
    channel, setChannel, bidStr, setBidstr, durationf,
    durationt, reach, businessRule, freq, setDurationf, setDurationt,
    setReach, setBusinessRule, setFreq }: {
        manageService: boolean, setManageService: React.Dispatch<React.SetStateAction<boolean>>, dataPro: string, setDataPro: React.Dispatch<React.SetStateAction<string>>, network: string, setNetwork: React.Dispatch<React.SetStateAction<string>>, setCampaignType: React.Dispatch<React.SetStateAction<string>>,
        campaignObj: string, setCampaignObj: React.Dispatch<React.SetStateAction<string>>, audience: string, setAudience: React.Dispatch<React.SetStateAction<string>>,
        channel: any, setChannel: React.Dispatch<any>, bidStr: any, setBidstr: React.Dispatch<any>, durationf: any,
        durationt: any, reach: string, businessRule: boolean, freq: any, setDurationf: React.Dispatch<any>, setDurationt: React.Dispatch<any>,
        setReach: React.Dispatch<React.SetStateAction<string>>, setBusinessRule: React.Dispatch<React.SetStateAction<boolean>>, setFreq: React.Dispatch<any>,
    }) => {
    const [tabNumb, setTabNum] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [openAddAudDialog, setOpenAddAudDialog] = useState(false);

    const [advancedSwitch, setAdvancedSwitch] = useState(false);

    const changeTab = (ctabnum: number) => {
        if (ctabnum !== tabNumb) {
            setTabNum(ctabnum);
        }
    };
    const [number,setNumber] = useState(1);
    const [names,setNames] = useState(['New Campaign']);

    const stra = [
        { name: 'CPM', code: 'CPM' },
        { name: 'CPC', code: 'CPC' },
        { name: 'CPV', code: 'CPV' }
    ];

    const [selectedAud, setSelectedAud] = useState(null);
    const [campValue, setCampValue] = useState([]);
    const campaignOptions = [
        { name: 'Banner', value: 'Banner',icon: 'pi pi-image' },
        { name: 'Text', value: 'Text',icon: 'pi pi-qrcode', },
        { name: 'Email', value: 'Email',icon: 'pi pi-envelope', },
        { name: 'SMS', value: 'SMS',icon: 'pi pi-comment', },
    ];
    const aud = [
        { name: 'Radiology', code: 'Radiology' },
        { name: 'Psychiatry', code: 'Psychiatry' },
        { name: 'Pediatrics', code: 'Pediatrics' },
    ];

    React.useEffect(() => {
        setCampaignType(campValue.join(','));

    }, [campValue]);
    const multiCheck = (e: any) => {
        const channelL = channel.length > 2 ? channel.toString().split(',') : [];
        if (channelL.includes(e.value)) {
            const index = channelL.indexOf(e.value);
            const newC = [...channelL];
            newC.splice(index, 1);

            setChannel(newC.join(','));
        } else {
            const newC = [...channelL];
            newC.push(e.value);
            setChannel(newC.join(','));

        }
    };
    React.useEffect(() => {
        if (selectedAud && selectedAud.length > 0) {
            let str = '';
            for (let i = 0; i < selectedAud.length; i++) {
                if (i === 0) {
                    str = selectedAud[i].name;
                } else {
                    str = str + ',' + selectedAud[i].name;
                }
            }
            setAudience(str);
        }
    }, [selectedAud]);
    const dataproducts = (e: any) => {
        const dataProL = dataPro.length > 2 ? dataPro.toString().split(',') : [];
        if (dataProL.includes(e.value)) {
            const index = dataProL.indexOf(e.value);
            const newC = [...dataProL];
            newC.splice(index, 1);

            setDataPro(newC.join(','));
        } else {
            const newC = [...dataProL];
            newC.push(e.value);
            setDataPro(newC.join(','));

        }
    };
    const campOptsTemplate = (option) => {
        return <i className={option.icon}><span > {option.name}</span></i>;
    };
    return (
        <>
            <div className="p-grid" style={{ padding: '4% 10% 4% 10%' }}>
                <div className="p-col-2" style={{ textAlign: 'left' }}>
                    <Tooltip target=".custom-target-icon-agency" />

                    <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }} >Campaign <i className="custom-target-icon-agency pi pi-info-circle" data-pr-tooltip="Campaigns" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '11px', marginTop: '-6px' }}></i></span>
                </div>
                <div className="p-col-10">
                    <div style={{ textAlign: 'left', marginLeft: '25px' }}>
                        <TabList setOpenDialog={setOpenDialog} changeTab={changeTab} names={names} number={number} tabNumb={tabNumb} setNumber={setNumber} setNames={setNames} />
                    </div>
                    <div className="p-card" style={{ border: '1px solid black', borderRadius: '17px', padding: '15px', width: '100%' }}>
                        <div className="p-grid" style={{ textAlign: 'left' }}>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Network</span>
                            </div>
                            <div className="p-col-9">
                                <span className="p-field-radiobutton" style={{ display: 'inline' }}>
                                    <RadioButton value="POC" onChange={(e) => { setNetwork(e.value); }} checked={network === 'POC'} />
                                    <label style={{ fontSize: '11px' }}>POC</label>
                                </span>
                                <span className="p-field-radiobutton" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <RadioButton value="Endemic" onChange={(e) => { setNetwork(e.value); }} checked={network === 'Endemic'} />
                                    <label style={{ fontSize: '11px' }}>Endemic</label>
                                </span>
                                <span className="p-field-radiobutton" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <RadioButton value="Opti-Channel" onChange={(e) => { setNetwork(e.value); }} checked={network === 'Opti-Channel'} />
                                    <label style={{ fontSize: '11px' }}>Opti-Channel</label>
                                </span>
                            </div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Campaign Type</span>
                            </div>
                            <div className="p-col-6">
                                <SelectButton value={campValue} options={campaignOptions} onChange={(e) => { setCampValue(e.value); }} itemTemplate={campOptsTemplate} multiple style={{ borderRadius: '25px', marginTop: '0px' }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Campaign Objective</span>
                            </div>
                            <div className="p-col-6">
                                <InputTextarea rows={4} value={campaignObj} onChange={(e) => { setCampaignObj(e.target.value); }} style={{ width: '100%' }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Audience</span>
                            </div>
                            <div className="p-col-6">
                                <div style={{marginLeft:'-17px'}}>
                                <CustomizedPTButtons label='Add Audience' onClickHandler={() => { setOpenAddAudDialog(true); }} icon={'plus-circle'} />
                                {/* <MultiSelect style={{ width: '100%', padding: '2px' }} value={selectedAud} options={aud} onChange={(e) => { setSelectedAud(e.value); }} optionLabel="name" placeholder="Choose audience list" display="chip" /> */}
                                </div>
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Channel</span>
                            </div>
                            <div className="p-col-6">
                                <span className="p-field-checkbox" style={{ display: 'inline' }}>
                                    <Checkbox value="Web" onChange={(e) => { multiCheck(e); }} checked={channel.length > 2 ? channel.toString().split(',').includes('Web') : [].includes('Web')} />
                                    <label style={{ fontSize: '11px', marginTop: '4px' }}>Web</label>
                                </span>
                                <span className="p-field-checkbox" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <Checkbox value="Mobile" onChange={(e) => { multiCheck(e); }} checked={channel.length > 2 ? channel.toString().split(',').includes('Mobile') : [].includes('Mobile')} />
                                    <label style={{ fontSize: '11px', marginTop: '4px' }}>Mobile</label>
                                </span>
                                <span className="p-field-checkbox" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <Checkbox value="Email" onChange={(e) => { multiCheck(e); }} checked={channel.length > 2 ? channel.toString().split(',').includes('Email') : [].includes('Email')} />
                                    <label style={{ fontSize: '11px', marginTop: '4px' }}>Email</label>
                                </span>
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Duration</span>
                            </div>
                            <div className="p-col-6">
                                <span>
                                    <Calendar id="icon" showIcon style={{ width: '45%', maxHeight: '28px', fontSize: '10px' }} value={durationf} onChange={(e) => setDurationf(e.value)} />
                                    <span>
                                        <Calendar id="icon" showIcon style={{ width: '45%', marginLeft: '10px', maxHeight: '28px', fontSize: '10px' }} value={durationt} onChange={(e) => setDurationt(e.value)} />
                                    </span>
                                </span>
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Bid Strategy</span>
                            </div>
                            <div className="p-col-6">
                                <Dropdown options={stra} value={bidStr} onChange={(e) => { setBidstr(e.value); }} optionLabel="name" style={{ width: '12rem', fontSize: '8px', color: 'gray' }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Reach</span>
                            </div>
                            <div className="p-col-6">
                                <InputText className="custInp" placeholder="" value={reach} onChange={(e) => { setReach(e.target.value); }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Frequency</span>
                            </div>
                            <div className="p-col-6">
                                <span>
                                    <Dropdown options={[]} optionLabel="name" style={{ width: '45%' }} />
                                    {/* <span>
                            <InputText placeholder="" style={{width:'45%',marginLeft:'10px',maxHeight:'18px',marginTop:'-20px'}}/>
                            </span> */}
                                </span>
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Business Rule</span>
                            </div>
                            <div className="p-col-6">
                                <span className="p-field-radiobutton" style={{ display: 'inline' }}>
                                    <RadioButton checked={true} />
                                    <label style={{ fontSize: '11px' }}>Yes</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-col-3" style={{ textAlign: 'left' }}>
                    <Tooltip target=".custom-target-icon-client" />
                    <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}>Data Products <i className="custom-target-icon-client pi pi-info-circle" data-pr-tooltip="Data Products" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '11px', marginTop: '-6px' }}></i></span>
                </div>
                <div className="p-col-8" style={{ textAlign: 'left' }}>
                    <span className="p-field-checkbox" style={{ display: 'inline' }}>
                        <Checkbox value="Perform" onChange={(e) => { dataproducts(e); }} checked={dataPro.length > 2 ? dataPro.toString().split(',').includes('Perform') : [].includes('Perform')} />
                        <label style={{ fontSize: '11px', marginTop: '4px' }}>Perform</label>
                    </span>
                    <span className="p-field-checkbox" style={{ display: 'inline', marginLeft: '15px' }}>
                        <Checkbox value="PLD" onChange={(e) => { dataproducts(e); }} checked={dataPro.length > 2 ? dataPro.toString().split(',').includes('PLD') : [].includes('PLD')} />
                        <label style={{ fontSize: '11px', marginTop: '4px' }}>PLD</label>
                    </span>
                    <span className="p-field-checkbox" style={{ display: 'inline', marginLeft: '15px' }}>
                        <Checkbox value="Target" onChange={(e) => { dataproducts(e); }} checked={dataPro.length > 2 ? dataPro.toString().split(',').includes('Target') : [].includes('Target')} />
                        <label style={{ fontSize: '11px', marginTop: '4px' }}>Target</label>
                    </span>
                </div>
                <div className="p-col-3" style={{ textAlign: 'left' }}>
                    <Tooltip target=".custom-target-icon-brand" />
                    <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600, paddingTop: '15px' }}>Managed Service <i className="custom-target-icon-brand pi pi-info-circle" data-pr-tooltip="Managed Service" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '11px', marginTop: '-6px' }}></i></span>
                </div>
                <div className="p-col-8">
                    <div className="p-field-radiobutton">
                        <RadioButton value={manageService} onChange={(e) => { setManageService(!manageService); }} checked={manageService} />
                        <label style={{ fontSize: '11px' }}>Yes</label>
                        <span style={{ marginLeft: '30px' }}>
                            <div className="p-field-radiobutton" style={{ marginTop: '15px' }}>
                                <RadioButton value={manageService} onChange={(e) => { setManageService(!manageService); }} checked={!manageService} />
                                <label style={{ fontSize: '11px' }}>No</label>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <Dialog visible={openDialog} style={{ width: '40vw', borderRadius: '10px' }} onHide={() => setOpenDialog(false)}>
                <CampaignName setNames={setNames} names={names} tabNumb={tabNumb} setOpenDialog={setOpenDialog}/>
            </Dialog>
            <Dialog visible={openAddAudDialog} style={{ width: '40vw', borderRadius: '9px' }} onHide={() => setOpenAddAudDialog(false)}>
                <TabView>
                    <TabPanel header='Create Audience'>
                        <CreateAudienceTabView />
                    </TabPanel>
                    <TabPanel header='Upload Audience'>
                        <div className="p-grid" style={{ marginLeft: '12px', maxWidth: '27vw' }}>
                            <div className="p-col-6">
                                <div style={{ marginTop: '5px' }}>
                                    <CustomizedPTButtons label='Upload file' onClickHandler={() => { console.log(''); }} icon={'plus-circle'} />
                                </div>
                            </div>
                            <div className="p-col-6 spech">
                                <h1 style={{ cursor: 'pointer', fontSize: '12px', color: 'grey' }}>Download Template</h1>
                            </div>
                            {/* <div className="p-col-6">
                                <div style={{ marginTop: '5px' }}>
                                    <h1 style={{ fontSize: '12px', color: 'black', fontWeight: 700 }}>Advanced
                                        <span style={{ marginLeft: '20px' }}>
                                            <InputSwitch checked={advancedSwitch} onChange={(e) => setAdvancedSwitch(e.value)} />
                                        </span>
                                    </h1>
                                </div>
                            </div> */}
                        </div>
                        {advancedSwitch && <div style={{ marginLeft: '20px' }}><CreateAudienceTabView /></div>}
                    </TabPanel>
                </TabView>
                <div className="p-grid" style={{ maxWidth: '30vw' }}>
                    <div className="p-col-5">
                    </div>
                    <div className="p-col-4">
                        <CustomizedButtons label='Cancel' onClickHandler={(e) => { console.log(e); }} />
                    </div>
                    <div className="p-col-3">
                        <CustomizedButtons label='Save' onClickHandler={(e) => { console.log(e); }} />
                    </div>
                </div>
            </Dialog>
        </>);
};

export default ProposalBuilderForm;