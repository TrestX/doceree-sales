import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import * as React from 'react';
import { RadioButton } from 'primereact/radiobutton';
import './proposal.css';
import { Checkbox } from 'primereact/checkbox';
import { Tooltip } from 'primereact/tooltip';
import { CustomizedPButtonsNI, CustomizedPrimeButton} from '../../buttons/pbutton';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
const ProposalBuilderForm = () => {
    const [tabNumb,setTabNum] = useState(0);
    const changeTab=()=>{
        if (tabNumb===0){
            setTabNum(1);
        }else{
            setTabNum(0);
        }
    };
    return (
        <div className="p-grid" style={{padding:'4% 10% 4% 10%'}}>
        <div className="p-col-2" style={{textAlign:'left'}}>
        <Tooltip target=".custom-target-icon-agency" />

            <span style={{fontSize:'12px',color:'grey',fontWeight:600}} >Campaign <i className="custom-target-icon-agency pi pi-info-circle" data-pr-tooltip="Campaigns" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-10">
        <div style={{textAlign:'left',marginLeft:'25px'}}>
        <CustomizedPrimeButton label={'Campaign 1'} fw={600} background={tabNumb===0?'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)':'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'}fs={'11px'} onClickHandler={changeTab}/>
                    <CustomizedPrimeButton label={'Campaign 2'} background={tabNumb===1?'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)':'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} fw={600} brad={'7px 7px 0px 0px'} color={'white'}fs={'11px'} onClickHandler={changeTab}/>
            </div>
            <div className="p-card" style={{border:'1px solid black',borderRadius:'17px',padding:'15px',width:'100%'}}>
                <div className="p-grid" style={{textAlign:'left'}}>
                    <div className="p-col-3">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Network</span>
                    </div>
                    <div className="p-col-9">
                    <span className="p-field-radiobutton" style={{display:'inline'}}>
                    <RadioButton checked={true} />
                    <label style={{fontSize:'11px'}}>POC</label>
                </span>
                <span className="p-field-radiobutton" style={{display:'inline',marginLeft:'15px'}}>
                    <RadioButton checked={false} />
                    <label style={{fontSize:'11px'}}>Endemic</label>
                </span>
                <span className="p-field-radiobutton" style={{display:'inline',marginLeft:'15px'}}>
                    <RadioButton checked={false} />
                    <label style={{fontSize:'11px'}}>Opti-Channel</label>
                </span>
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Campaign Type</span>
                    </div>
                    <div className="p-col-6">
                        
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Campaign Objective</span>
                    </div>
                    <div className="p-col-6">
                    <InputTextarea rows={4} style={{width:'100%'}}/>
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Audience</span>
                    </div>
                    <div className="p-col-6">
                    <InputText className="custInp" placeholder="Choose audience list" />
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Channel</span>
                    </div>
                    <div className="p-col-6">
                    <span className="p-field-checkbox" style={{display:'inline'}}>
                    <Checkbox checked={true} />
                    <label style={{fontSize:'11px',marginTop:'4px'}}>Web</label>
                </span>
                <span className="p-field-checkbox" style={{display:'inline',marginLeft:'15px'}}>
                    <Checkbox checked={false} />
                    <label style={{fontSize:'11px',marginTop:'4px'}}>Mobile</label>
                </span>
                <span className="p-field-checkbox" style={{display:'inline',marginLeft:'15px'}}>
                    <Checkbox checked={false} />
                    <label style={{fontSize:'11px',marginTop:'4px'}}>Email</label>
                </span>
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Duration</span>
                    </div>
                    <div className="p-col-6">
                        <span>
                        <Calendar id="icon" showIcon style={{width:'45%',maxHeight:'28px'}}/>
                            <span>
                            <Calendar id="icon" showIcon style={{width:'45%',marginLeft:'10px',maxHeight:'28px'}}/>
                            </span>
                        </span>
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Bid Strategy</span>
                    </div>
                    <div className="p-col-6">
                    <Dropdown  options={[]} optionLabel="name" style={{width:'7rem',fontSize:'8px',color:'gray'}}/>
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Reach</span>
                    </div>
                    <div className="p-col-6">
                    <InputText className="custInp" placeholder="" />
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Frequency</span>
                    </div>
                    <div className="p-col-6">
                    <span>
                    <Dropdown  options={[]} optionLabel="name" style={{width:'45%'}}/>
                            {/* <span>
                            <InputText placeholder="" style={{width:'45%',marginLeft:'10px',maxHeight:'18px',marginTop:'-20px'}}/>
                            </span> */}
                        </span>
                    </div>
                    <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Business Rule</span>
                    </div>
                    <div className="p-col-6">
                    <span className="p-field-radiobutton" style={{display:'inline'}}>
                    <RadioButton checked={true} />
                    <label style={{fontSize:'11px'}}>Yes</label>
                </span>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
        <Tooltip target=".custom-target-icon-client" />
            <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Data Products <i className="custom-target-icon-client pi pi-info-circle" data-pr-tooltip="Data Products" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-8" style={{textAlign:'left'}}>
        <span className="p-field-checkbox" style={{display:'inline'}}>
                    <Checkbox checked={true} />
                    <label style={{fontSize:'11px',marginTop:'4px'}}>Perform</label>
                </span>
                <span className="p-field-checkbox" style={{display:'inline',marginLeft:'15px'}}>
                    <Checkbox checked={false} />
                    <label style={{fontSize:'11px',marginTop:'4px'}}>PLD</label>
                </span>
                <span className="p-field-checkbox" style={{display:'inline',marginLeft:'15px'}}>
                    <Checkbox checked={false} />
                    <label style={{fontSize:'11px',marginTop:'4px'}}>Target</label>
                </span>
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
        <Tooltip target=".custom-target-icon-brand" />
            <span style={{fontSize:'12px',color:'grey',fontWeight:600,paddingTop:'15px'}}>Managed Service <i className="custom-target-icon-brand pi pi-info-circle" data-pr-tooltip="Managed Service" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-8">
        <div className="p-field-radiobutton">
                    <RadioButton checked={true} />
                    <label style={{fontSize:'11px'}}>Yes</label>
                    <span style={{marginLeft:'30px'}}>
                    <div className="p-field-radiobutton" style={{marginTop:'15px'}}>
                    <RadioButton checked={false} />
                    <label style={{fontSize:'11px'}}>No</label>
                </div>
                    </span>
                </div>
        </div>
    </div>);
};

export default ProposalBuilderForm ;