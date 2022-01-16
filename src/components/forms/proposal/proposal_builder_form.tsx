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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const ProposalBuilderForm = ({
    manageService, setManageService, dataPro, setDataPro, network, setNetwork, setCampaignType,
    campaignObj, setCampaignObj, audience, setAudience,
    channel, setChannel, bidStr, setBidstr, durationf,
    durationt, reach, businessRule, freq, setDurationf, setDurationt,
    setReach, setBusinessRule, setFreq, tabs, setTabs, campaignType
}: {
    manageService: boolean, setManageService: React.Dispatch<React.SetStateAction<boolean>>,
    dataPro: string, setDataPro: React.Dispatch<React.SetStateAction<string>>, network: Map<string, string>,
    setNetwork: React.Dispatch<React.SetStateAction<Map<string, string>>>, setCampaignType: React.Dispatch<React.SetStateAction<Map<string, string>>>,
    campaignObj: Map<string, string>, setCampaignObj: React.Dispatch<React.SetStateAction<Map<string, string>>>,
    audience: Map<string, string>, setAudience: React.Dispatch<React.SetStateAction<Map<string, string>>>,
    channel: Map<string, string>, setChannel: React.Dispatch<any>, bidStr: Map<string, string>, setBidstr: React.Dispatch<any>, durationf: Map<string, any>,
    durationt: Map<string, any>, reach: Map<string, string>, businessRule: Map<string, boolean>, freq: Map<string, string>, setDurationf: React.Dispatch<any>, setDurationt: React.Dispatch<any>,
    setReach: React.Dispatch<React.SetStateAction<Map<string, string>>>, setBusinessRule: React.Dispatch<React.SetStateAction<Map<string, boolean>>>, setFreq: React.Dispatch<any>, tabs: string[], setTabs: React.Dispatch<any>,
    campaignType: Map<string, string>
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
    const [number, setNumber] = useState(1);
    const [names, setNames] = useState(['Campaign 1']);

    const stra = [
        { name: 'CPM', code: 'CPM' },
        { name: 'CPC', code: 'CPC' },
        { name: 'CPV', code: 'CPV' }
    ];

    const [selectedAud, setSelectedAud] = useState(null);
    const campaignOptions = [
        { name: 'Banner', value: 'Banner', icon: 'pi pi-image' },
        { name: 'Text', value: 'Text', icon: 'pi pi-qrcode', },
        { name: 'Email', value: 'Email', icon: 'pi pi-envelope', },
        { name: 'SMS', value: 'SMS', icon: 'pi pi-comment', },
    ];
    const aud = [
        { name: 'Radiology', code: 'Radiology' },
        { name: 'Psychiatry', code: 'Psychiatry' },
        { name: 'Pediatrics', code: 'Pediatrics' },
    ];

    const setCampaignName = (value) => {
        const tabName = tabNumb.toString();
        const tabData = value.join(',');
        let data = new Map<string, string>();
        if (campaignType !== undefined) {
            data = new Map<string, string>(campaignType);
            if (data.has(tabNumb.toString())) {
                data.delete(tabNumb.toString());
            }
        }
        data.set(tabName, tabData);
        setCampaignType(data);

    };
    React.useEffect(() => {
        setTabs([...names]);
    }, [names]);
    const multiCheck = (e: any) => {
        if (channel !== undefined && channel.get(tabNumb.toString()) !== undefined) {
            const channelL = channel.get(tabNumb.toString()).length > 2 ? channel.get(tabNumb.toString()).toString().split(',') : [];
            if (channelL.includes(e.value)) {
                const index = channelL.indexOf(e.value);
                const newC = [...channelL];
                newC.splice(index, 1);
                const tabName = tabNumb.toString();
                const tabData = newC.join(',');
                let data = new Map<string, string>();
                data = new Map<string, string>(channel);
                if (data.has(tabNumb.toString())) {
                    data.delete(tabNumb.toString());
                }
                data.set(tabName, tabData);
                setChannel(data);
            } else {
                const newC = [...channelL];
                newC.push(e.value);
                const tabName = tabNumb.toString();
                const tabData = newC.join(',');
                let data = new Map<string, string>();
                data = new Map<string, string>(channel);
                if (data.has(tabNumb.toString())) {
                    data.delete(tabNumb.toString());
                }
                data.set(tabName, tabData);
                setChannel(data);
            }
        } else {
            const tabName = tabNumb.toString();
            const tabData = e.value;
            let data = new Map<string, string>();
            if (channel !== undefined) {
                data = new Map<string, string>(channel);
                if (data.has(tabNumb.toString())) {
                    data.delete(tabNumb.toString());
                }
            }
            data.set(tabName, tabData);
            setChannel(data);
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
            const tabName = tabNumb.toString();
            const tabData = str;
            let data = new Map<string, string>();
            if (audience !== undefined) {
                data = new Map<string, string>(audience);
                if (data.has(tabNumb.toString())) {
                    data.delete(tabNumb.toString());
                }
            }
            data.set(tabName, tabData);
            setAudience(data);
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
        return <>{option.name === 'Banner' ? <FontAwesomeIcon icon={faImage} transform={{ flipX: true }} style={{ color: '#a45be4', backgroundColor: 'white', height: '13px', width: '13px' }} /> : option.name === 'Text' ? <img src='assets/text.svg' style={{ height: '10px', width: '13px' }} /> : option.name === 'SMS' ? <img src='assets/sms.svg' style={{ height: '10px', width: '13px' }} /> : <img src='assets/email.svg' style={{ height: '10px', width: '13px' }} />} <span style={{ fontWeight: '500', fontSize: '12px' }}> {option.name}</span></>;
    };
    return (
        <>
            <div className="p-grid" style={{ padding: '4% 2% 4% 2%' }}>
                <div className="p-col-2" style={{ textAlign: 'left' }}>
                    <Tooltip target=".custom-target-icon-agency" />
                    <span style={{ fontSize: '13px', color: '#333' }} >Campaign <i className="custom-target-icon-agency pi pi-info-circle" data-pr-tooltip="Campaigns" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '11px', marginTop: '-6px' }}></i></span>
                </div>
                <div className="p-col-10">
                    <div style={{ textAlign: 'left', marginLeft: '25px' }}>
                        <TabList setOpenDialog={setOpenDialog} changeTab={changeTab} names={names} number={number} tabNumb={tabNumb} setNumber={setNumber} setNames={setNames} />
                    </div>
                    {names.map((tabName, index) => index === tabNumb && <div key={tabName} className="p-card" style={{ border: '1px solid lightgray', borderRadius: '17px', padding: '15px', width: '80%' }}>
                        <div className="p-grid" style={{ textAlign: 'left' }}>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Network</span>
                            </div>
                            <div className="p-col-9">
                                <span className="p-field-radiobutton" style={{ display: 'inline' }}>
                                    <RadioButton value="POC" onChange={(e) => {
                                        let data = new Map<string, string>();
                                        if (network !== undefined) {
                                            data = new Map<string, string>(network);
                                            if (data.has(tabNumb.toString())) {
                                                data.delete(tabNumb.toString());
                                            }
                                        } data.set(tabNumb.toString(), e.value);
                                        setNetwork(data);
                                    }
                                    } checked={network !== undefined && network.get(tabNumb.toString()) === 'POC'} />
                                    <label style={{ fontSize: '11px' }}>POC</label>
                                </span>
                                <span className="p-field-radiobutton" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <RadioButton value="Endemic" onChange={(e) => {
                                        let data = new Map<string, string>();
                                        if (network !== undefined) {
                                            data = new Map<string, string>(network);
                                            if (data.has(tabNumb.toString())) {
                                                data.delete(tabNumb.toString());
                                            }
                                        } data.set(tabNumb.toString(), e.value);
                                        setNetwork(data);
                                    }} checked={network !== undefined && network.get(tabNumb.toString()) === 'Endemic'} />
                                    <label style={{ fontSize: '11px' }}>Endemic</label>
                                </span>
                                <span className="p-field-radiobutton" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <RadioButton value="Opti-Channel" onChange={(e) => {
                                        let data = new Map<string, string>(network);
                                        if (network !== undefined) {
                                            data = new Map<string, string>(network);
                                            if (data.has(tabNumb.toString())) {
                                                data.delete(tabNumb.toString());
                                            }
                                        }
                                        data.set(tabNumb.toString(), e.value);
                                        setNetwork(data);
                                    }} checked={network !== undefined && network.get(tabNumb.toString()) === 'Opti-Channel'} />
                                    <label style={{ fontSize: '11px' }}>Opti-Channel</label>
                                </span>
                            </div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Campaign Type</span>
                            </div>
                            <div className="p-col-6">
                                <SelectButton value={campaignType !== undefined && campaignType.get(tabNumb.toString()) !== undefined ? campaignType.get(tabNumb.toString()).split(',') : []} options={campaignOptions} onChange={(e) => { setCampaignName(e.value); }} itemTemplate={campOptsTemplate} multiple style={{ borderRadius: '25px', marginTop: '5px', padding: '5px' }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Campaign Objective</span>
                            </div>
                            <div className="p-col-6">
                                <InputTextarea rows={4} value={campaignObj !== undefined ? campaignObj.get(tabNumb.toString()) : ''} onChange={(e) => {
                                    let data = new Map<string, string>();
                                    if (campaignObj !== undefined) {
                                        data = new Map<string, string>(campaignObj);
                                        if (data.has(tabNumb.toString())) {
                                            data.delete(tabNumb.toString());
                                        }
                                    }
                                    data.set(tabNumb.toString(), e.target.value);
                                    setCampaignObj(data);
                                }} style={{ width: '100%' }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Audience</span>
                            </div>
                            <div className="p-col-6">
                                <div style={{ marginLeft: '-17px' }}>
                                    <CustomizedPTButtons label='Add Audience' onClickHandler={() => { setOpenAddAudDialog(true); }} icon={'plus-circle'} />
                                    {/* <MultiSelect style={{ width: '100%', padding: '2px' }} value={selectedAud} options={aud} onChange={(e) => { setSelectedAud(e.value); }} optionLabel="name" placeholder="Choose audience list" display="chip" /> */}
                                </div>
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Channel</span>
                            </div>
                            <div className="p-col-6">
                                <span className="p-field-checkbox" style={{ display: 'inline' }}>
                                    <Checkbox value="Web" onChange={(e) => { multiCheck(e); }} checked={channel !== undefined && channel.get(tabNumb.toString()) !== undefined && channel.get(tabNumb.toString()).length > 2 ? channel.get(tabNumb.toString()).toString().split(',').includes('Web') : [].includes('Web')} />
                                    <label style={{ fontSize: '12px', marginTop: '4px' }}>Web</label>
                                </span>
                                <span className="p-field-checkbox" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <Checkbox value="Mobile" onChange={(e) => { multiCheck(e); }} checked={channel !== undefined && channel.get(tabNumb.toString()) !== undefined && channel.get(tabNumb.toString()).length > 2 ? channel.get(tabNumb.toString()).toString().split(',').includes('Mobile') : [].includes('Mobile')} />
                                    <label style={{ fontSize: '12px', marginBottom: '4px' }}>Mobile</label>
                                </span>
                                <span className="p-field-checkbox" style={{ display: 'inline', marginLeft: '15px' }}>
                                    <Checkbox value="Email" onChange={(e) => { multiCheck(e); }} checked={channel !== undefined && channel.get(tabNumb.toString()) !== undefined && channel.get(tabNumb.toString()).length > 2 ? channel.get(tabNumb.toString()).toString().split(',').includes('Email') : [].includes('Email')} />
                                    <label style={{ fontSize: '12px', bottom: '10px' }}>Email</label>
                                </span>
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Duration</span>
                            </div>
                            <div className="p-col-6">
                                <span>
                                    <Calendar id="icon" showIcon style={{ width: '45%', maxHeight: '28px', fontSize: '10px' }} value={durationf !== undefined && durationf.get(tabNumb.toString())} onChange={(e) => {
                                        let data = new Map<string, any>();
                                        if (durationf !== undefined) {
                                            data = new Map<string, any>(durationf);
                                            if (data.has(tabNumb.toString())) {
                                                data.delete(tabNumb.toString());
                                            }
                                        }
                                        data.set(tabNumb.toString(), e.value);
                                        setDurationf(data);
                                    }} />
                                    <span>
                                        <Calendar id="icon" showIcon style={{ width: '45%', marginLeft: '10px', maxHeight: '28px', fontSize: '10px' }} value={durationt !== undefined && durationt.get(tabNumb.toString())} onChange={(e) => {
                                            let data = new Map<string, any>();
                                            if (durationt !== undefined) {
                                                data = new Map<string, any>(durationt);
                                                if (data.has(tabNumb.toString())) {
                                                    data.delete(tabNumb.toString());
                                                }
                                            }
                                            data.set(tabNumb.toString(), e.value);
                                            setDurationt(data);
                                        }} />
                                    </span>
                                </span>
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Bid Strategy</span>
                            </div>
                            <div className="p-col-6">
                                <Dropdown options={stra} value={bidStr != undefined && bidStr.get(tabNumb.toString()) !== undefined ? bidStr.get(tabNumb.toString()) : ''} onChange={(e) => {
                                    let data = new Map<string, string>();
                                    if (bidStr !== undefined) {
                                        data = new Map<string, string>(bidStr);
                                        if (data.has(tabNumb.toString())) {
                                            data.delete(tabNumb.toString());
                                        }
                                    }
                                    data.set(tabNumb.toString(), e.value);
                                    setBidstr(data);
                                }} optionLabel="name" style={{ width: '12rem', fontSize: '8px', color: 'gray' }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Reach</span>
                            </div>
                            <div className="p-col-6">
                                <InputText className="custInp" placeholder="" value={reach !== undefined ? reach.get(tabNumb.toString()) : ''} onChange={(e) => {
                                    let data = new Map<string, string>();

                                    if (reach !== undefined) {
                                        data = new Map<string, string>(reach);
                                        if (data.has(tabNumb.toString())) {
                                            data.delete(tabNumb.toString());
                                        }
                                    }
                                    data.set(tabNumb.toString(), e.target.value);
                                    setReach(data);
                                }} />
                            </div>
                            <div className="p-col-3"></div>
                            <div className="p-col-3">
                                <span style={{ fontSize: '13px', color: '#333' }}>Frequency</span>
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
                                <span style={{ fontSize: '13px', color: '#333' }}>Business Rule</span>
                            </div>
                            <div className="p-col-6">
                                <span className="p-field-radiobutton" style={{ display: 'inline' }}>
                                    <RadioButton checked={true} />
                                    <label style={{ fontSize: '11px' }}>Yes</label>
                                </span>
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className="p-col-3" style={{ textAlign: 'left' }}>
                    <Tooltip target=".custom-target-icon-client" />
                    <span style={{ fontSize: '13px', color: '#333' }}>Data Products <i className="custom-target-icon-client pi pi-info-circle" data-pr-tooltip="Data Products" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '11px', marginTop: '-6px' }}></i></span>
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
                    <span style={{ fontSize: '13px', color: '#333', paddingTop: '15px' }}>Managed Service <i className="custom-target-icon-brand pi pi-info-circle" data-pr-tooltip="Managed Service" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '11px', marginTop: '-6px' }}></i></span>
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
                <CampaignName setNames={setNames} names={names} tabNumb={tabNumb} setOpenDialog={setOpenDialog} />
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
                                <h1 style={{ cursor: 'pointer', fontSize: '13px', color: '#333' }}>Download Template</h1>
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