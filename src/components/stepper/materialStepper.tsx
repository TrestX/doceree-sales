import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BasicCardForm from '../createproposal/basiccardform';
import './materialStepper.css';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Circle } from '@mui/icons-material';
import { StepIconProps } from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';
import BasicProposalForm from '../forms/proposal/basic_proposal_form';
import { CustomizedPButtonsNI, CustomizedPrimeButton} from '../buttons/pbutton';
import ProposalBuilderForm from '../forms/proposal/proposal_builder_form';
import { Dialog } from 'primereact/dialog';
import {ReqDiscount} from '../dialog/primedialog';
import { useState } from 'react';
const steps = [
    {
        label: 'Basic',
    },
    {
        label: 'Proposal Builder',
    },
];


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 25,
    height: 25,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundColor:
            '#6b42f6',
    }),
    ...(ownerState.completed && {
        backgroundColor:
            '#6b42f6',
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <Circle style={{ fontSize: '15px' }} />,
        2: <Circle style={{ fontSize: '15px' }} />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

export default function MaterialStepper({manageService,setManageService,dataPro,setDataPro, network,setNetwork, setCampaignType,
    campaignObj, setCampaignObj, audience,setAudience,
    channel, setChannel, bidStr, setBidstr, durationf,
    durationt, reach, businessRule, freq, setDurationf, setDurationt,
    setReach, setBusinessRule,setFreq, agency,client,brand,businessObj,market,setAgency,setClient,setBrand,setBusinessObj,setMarket}:{
        manageService:boolean,setManageService:React.Dispatch<React.SetStateAction<boolean>>,dataPro:string,setDataPro:React.Dispatch<React.SetStateAction<string>>,
        network:string,setNetwork:React.Dispatch<React.SetStateAction<string>>, setCampaignType:React.Dispatch<React.SetStateAction<string>>,
        campaignObj:string, setCampaignObj:React.Dispatch<React.SetStateAction<string>>, audience:string,setAudience:React.Dispatch<React.SetStateAction<string>>,
        channel:any, setChannel:React.Dispatch<any>, bidStr:any, setBidstr: React.Dispatch<any>, durationf:any,
        durationt:any, reach:string, businessRule:boolean, freq:any, setDurationf:React.Dispatch<any>, setDurationt:React.Dispatch<any>,
        setReach:React.Dispatch<React.SetStateAction<string>>, setBusinessRule:React.Dispatch<React.SetStateAction<boolean>>,setFreq:React.Dispatch<any>, agency:string,client:string,brand:string,businessObj:string,market:any,setAgency:React.Dispatch<React.SetStateAction<string>>,setClient:React.Dispatch<React.SetStateAction<string>>,setBrand:React.Dispatch<React.SetStateAction<string>>,setBusinessObj:React.Dispatch<React.SetStateAction<string>>,setMarket:any }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [openDialog,setOpenDialog] = useState(false);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    return (
        <>
        <Box sx={{ maxWidth: 750 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} >
                        <StepLabel StepIconComponent={ColorlibStepIcon} onClick={() => { activeStep === 0 ? handleNext() : handleBack(); }}>
                            <div style={{ padding: '10px', background: 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)', borderRadius: '7px 7px 0px 0px', textAlign: 'left', color: 'white', fontWeight: 600, fontSize: '12px', }}>
                                <span style={{ marginLeft: '10px' }}>{step.label}</span>
                            </div>
                        </StepLabel>
                        <StepContent>
                            {index === 0 ? <BasicProposalForm agency={agency} client={client} brand={brand} businessObj={businessObj} market={market} setAgency={setAgency} setClient={setClient} setBrand={setBrand} setBusinessObj={setBusinessObj} setMarket={setMarket} onNext={handleNext}/> : <ProposalBuilderForm manageService={manageService} setManageService={setManageService}
     dataPro={dataPro} setDataPro={setDataPro} network={network} setNetwork={setNetwork} setCampaignType={setCampaignType}
campaignObj={campaignObj} setCampaignObj={setCampaignObj} audience={audience} setAudience={setAudience}
channel={channel} setChannel={setChannel} bidStr={bidStr} setBidstr={setBidstr} durationf={durationf}
durationt={durationt} reach={reach} businessRule={businessRule} freq={freq} setDurationf={setDurationf} setDurationt={setDurationt}
setReach={setReach} setBusinessRule={setBusinessRule} setFreq={setFreq}/>}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            <h1 style={{fontSize:'12px',marginTop:'15px',textAlign:'left',color:'#6b42f6',marginLeft:'40px',cursor:'pointer'}} onClick={()=>{setOpenDialog(true);}}>Raise a request for discount</h1>
            <span style={{float:'right'}}><CustomizedPrimeButton label={'Save'} fw={600} background={'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)'} brad={'25px'} color={'white'}fs={'12px'} onClickHandler={()=>{console.log('empty');}}/>
            <CustomizedPrimeButton label={'Preview'} fw={600} background={'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)'} brad={'25px'} color={'white'}fs={'12px'} onClickHandler={()=>{console.log('empty');}}/>
            <CustomizedPrimeButton label={'Submit'} fw={600} background={'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)'} brad={'25px'} color={'white'}fs={'12px'} onClickHandler={()=>{console.log('empty');}}/>
            </span>
        </Box>

        <Dialog header="" visible={openDialog} style={{ width: '40vw',borderRadius:'19px' }} onHide={() => {setOpenDialog(false);}}>
            <ReqDiscount/>
        </Dialog>
        </>
    );
}

