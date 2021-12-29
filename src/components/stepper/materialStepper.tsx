import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import './materialStepper.css';
import { Circle } from '@mui/icons-material';
import { StepIconProps } from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';
import BasicProposalForm from '../forms/proposal/basic_proposal_form';
import ProposalBuilderForm from '../forms/proposal/proposal_builder_form';
const steps = [
    {
        label: 'Basic',
    },
    {
        label: 'Proposal Builder',
    },
];



const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: '#ccc',
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

export default function MaterialStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };




    return (
        <Box sx={{ maxWidth: 700 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} >
                        <StepLabel StepIconComponent={ColorlibStepIcon} onClick={() => { activeStep === 0 ? handleNext() : handleBack(); }}>
                            <div style={{ padding: '10px', background: 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)', borderRadius: '7px 7px 0px 0px', textAlign: 'left', color: 'white', fontWeight: 600, fontSize: '12px', }}>
                                <span style={{ marginLeft: '10px' }}>{step.label}</span>
                            </div>
                        </StepLabel>
                        <StepContent>
                            {index === 0 ? <BasicProposalForm /> : <ProposalBuilderForm />}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
