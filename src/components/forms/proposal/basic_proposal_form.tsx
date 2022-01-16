import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import * as React from 'react';
import { CustomizedButtons } from '../../buttons/button';
import { CustomizedPTButtons, CustomizedPButtonsNI, CustomizedPrimeButton, CustomizedPrimeDButton, CustomizedPrimeHowerButton } from '../../buttons/pbutton';
import { Dropdown } from 'primereact/dropdown';
import './proposal.css';
import { Tooltip } from 'primereact/tooltip';
import ReactFlagsSelect from 'react-flags-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const BasicProposalForm = ({ agency, client, brand, businessObj, market, setAgency, setClient, setBrand, setBusinessObj, setMarket, onNext }: { agency: string, client: string, brand: string, businessObj: string, market: string, setAgency: React.Dispatch<React.SetStateAction<string>>, setClient: React.Dispatch<React.SetStateAction<string>>, setBrand: React.Dispatch<React.SetStateAction<string>>, setBusinessObj: React.Dispatch<React.SetStateAction<string>>, setMarket: (string) => void, onNext: () => void }) => {
    const countries = [
        { name: 'United Kingdom', code: 'UK' },
        { name: 'India', code: 'IN' },
        { name: 'United States', code: 'US' }
    ];
    return (
        <div className="p-grid" style={{ padding: '4% 2% 4% 2%' }}>
            <div className="p-col-3" style={{ textAlign: 'left' }}>
                <Tooltip target=".custom-target-icon-agency" />

                <span style={{ fontSize: '13px', color: '#333' }} >Agency <FontAwesomeIcon icon={faInfoCircle} color='#bcbcbc' data-pr-tooltip="Agency" className="custom-target-icon-agency" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" /></span>
            </div>
            <div className="p-col-7">
                <span className="p-input-icon-left" style={{ width: '100%' }}>
                    <i className="pi pi-search" color='#333' />
                    <InputText className="custInp" value={agency} placeholder="Search" onChange={(e) => { setAgency(e.target.value); }} />
                </span>

            </div>
            <div className="p-col-3" style={{ textAlign: 'left' }}>
                <Tooltip target=".custom-target-icon-client" />
                <span style={{ fontSize: '13px', color: '#333' }}>Client <FontAwesomeIcon icon={faInfoCircle} color='#bcbcbc' data-pr-tooltip="Client" className="custom-target-icon-client" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" /> </span>
            </div>
            <div className="p-col-7">
                <span className="p-input-icon-left" style={{ width: '100%' }}>
                    <i className="pi pi-search" color='#333' />
                    <InputText className="custInp" placeholder="Search" value={client} onChange={(e) => { setClient(e.target.value); }} />
                </span>
            </div>
            <div className="p-col-3" style={{ textAlign: 'left' }}>
                <Tooltip target=".custom-target-icon-brand" />
                <span style={{ fontSize: '13px', color: '#333' }}>Brand <FontAwesomeIcon icon={faInfoCircle} color='#bcbcbc' data-pr-tooltip="Brand" className="custom-target-icon-brand" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" /></span>
            </div>
            <div className="p-col-7">
                <span className="p-input-icon-left" style={{ width: '100%' }}>
                    <i className="pi pi-search" color='#333' />
                    <InputText className="custInp" placeholder="Search" value={brand} onChange={(e) => { setBrand(e.target.value); }} />
                </span>
            </div>
            <div className="p-col-3" style={{ textAlign: 'left' }}>
                <Tooltip target=".custom-target-icon-business-objective" />
                <span style={{ fontSize: '13px', color: '#333' }}>Business Objective <FontAwesomeIcon icon={faInfoCircle} color='#bcbcbc' data-pr-tooltip="Business Objective" className="custom-target-icon-business-objective" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" /></span>
            </div>
            <div className="p-col-7">
                <InputTextarea rows={4} style={{ width: '100%' }} value={businessObj} onChange={(e) => { setBusinessObj(e.target.value); }} />
            </div>
            <div className="p-col-3" style={{ textAlign: 'left' }}>
                <Tooltip target=".custom-target-icon-market" />
                <span style={{ fontSize: '13px', color: '#333' }}>Market <FontAwesomeIcon icon={faInfoCircle} color='#bcbcbc' data-pr-tooltip="Market" className="custom-target-icon-market" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" /></span>
            </div>
            <div className="p-col-3" style={{ textAlign: 'left' }}>
                <ReactFlagsSelect placeholder='Select a market' countries={['US', 'GB', 'IN']} selected={market} onSelect={function (countryCode: string): void {
                    setMarket(countryCode);
                }} />
            </div>
            <div className="p-col-8">

            </div>
            <div className="p-col-2 button-background">
                <CustomizedPrimeHowerButton label={'Next'} fw={600} background={'white'} brad={'25px'} color={'#6B42F6'} fs={'16px'} onClickHandler={() => { onNext(); }} />
            </div>
        </div>);
};

export default BasicProposalForm;