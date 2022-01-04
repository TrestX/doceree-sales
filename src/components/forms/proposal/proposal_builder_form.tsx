import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import * as React from 'react';
import { RadioButton } from 'primereact/radiobutton';
import './proposal.css';
import { Checkbox } from 'primereact/checkbox';
import { Tooltip } from 'primereact/tooltip';
import { CustomizedPButtonsNI, CustomizedPrimeButton, CustomizedPrimeDButton } from '../../buttons/pbutton';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { MultiSelect } from 'primereact/multiselect';
import { Dialog } from 'primereact/dialog';
import { CampaignName } from '../../dialog/primedialog';

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
    const changeTab = (ctabnum: number) => {
        if (tabNumb === 0 && ctabnum === 1) {
            setTabNum(1);
        } else if (tabNumb === 1 && ctabnum === 0) {
            setTabNum(0);
        }
    };

    const stra = [
        { name: 'CPM', code: 'CPM' },
        { name: 'CPC', code: 'CPC' },
        { name: 'CPV', code: 'CPV' }
    ];

    const [selectedAud, setSelectedAud] = useState(null);
    const [campValue, setCampValue] = useState(null);
    const campaignOptions = [
        { name: 'Banner', value: 'Banner' },
        { name: 'Text', value: 'Text' },
        { name: 'Email', value: 'Email' },
        { name: 'SMS', value: 'SMS' },
    ];
    const aud = [
        { name: 'Radiology', code: 'Radiology' },
        { name: 'Psychiatry', code: 'Psychiatry' },
        { name: 'Pediatrics', code: 'Pediatrics' },
    ];
    const setStringVal = () => {
        if (campValue && campValue.length > 0) {
            let str = '';
            for (let i = 0; i < campValue.length; i++) {
                if (i === 0) {
                    str = campValue[i];
                } else {
                    str = str + ',' + campValue[i];
                }
            }
            setCampaignType(str);
        }
    };
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
    const setAudStringVal = () => {
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

    };
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
    return (
        <>
            <div className="p-grid" style={{ padding: '4% 10% 4% 10%' }}>
                <div className="p-col-2" style={{ textAlign: 'left' }}>
                    <Tooltip target=".custom-target-icon-agency" />

                    <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }} >Campaign <i className="custom-target-icon-agency pi pi-info-circle" data-pr-tooltip="Campaigns" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '11px', marginTop: '-6px' }}></i></span>
                </div>
                <div className="p-col-10">
                    <div style={{ textAlign: 'left', marginLeft: '25px' }}>
                        <CustomizedPrimeDButton label={'Campaign 1'} fw={600} background={tabNumb === 0 ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(0); }} onDoubleClick={() => { setOpenDialog(true); }} />
                        <CustomizedPrimeDButton label={'Campaign 2'} background={tabNumb === 1 ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} fw={600} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(1); }} onDoubleClick={() => { setOpenDialog(true); }} />
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
                                <SelectButton value={campValue} options={campaignOptions} onChange={(e) => { setCampValue(e.value); setStringVal(); }} optionLabel="name" multiple style={{ borderRadius: '25px', marginTop: '0px' }} />
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
                                <MultiSelect style={{ width: '100%', padding: '2px' }} value={selectedAud} options={aud} onChange={(e) => { setSelectedAud(e.value); setAudStringVal(); }} optionLabel="name" placeholder="Choose audience list" display="chip" />

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
            <Dialog header="" visible={openDialog} style={{ width: '40vw', borderRadius: '19px' }} onHide={() => setOpenDialog(false)}>
                <CampaignName />
            </Dialog>


        </>);
};

export default ProposalBuilderForm;