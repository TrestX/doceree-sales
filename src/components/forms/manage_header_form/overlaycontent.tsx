import { Calendar } from 'primereact/calendar';
import * as React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { CustomizedButtons } from '../../../components/buttons/button';
import './overlay.css';
const OverlayContent = () => {
    const [fdate, setFDate] = useState<Date | Date[] | undefined>(undefined);
    const [tdate, setTDate] = useState<Date | Date[] | undefined>(undefined);
    const [selectedFilter, setSelectedFilter] = useState<any>(null);
    const statuese = [
        { name: 'In Review' },
        { name: 'Submitted' },
        { name: 'Approved'},
        { name: 'To Do' },
        { name: 'Discount Request' },
        { name: 'Reply awaited'},
        { name: 'Draft'},
        { name: 'Rejected'}
    ];

    const onFilterChange = (e: { value: any}) => {
        setSelectedFilter(e.value);
    };
    return (<>
 
              <div className="p-grid">
                <div className="p-col-6">
                <Calendar id="icon" value={fdate} onChange={(e) => setFDate(e.value)} showIcon placeholder="From date" style={{height:'35px'}}/>
                </div>
                <div className="p-col-6">
                <Calendar id="icon" value={tdate} onChange={(e) => setTDate(e.value)} showIcon placeholder="To date" style={{height:'35px'}}/>
                </div>
                <div className="p-col-12">
                <Dropdown value={selectedFilter} options={statuese} onChange={onFilterChange} optionLabel="name" placeholder="Filter by status" style={{width:'100%'}}/>
                </div>
                <div className="p-col-2">
                </div>
                <div className="p-col-5">
                <CustomizedButtons label='Close' onClickHandler={(e) => { console.log(e);}} />
                </div>
                <div className="p-col-5">
                <CustomizedButtons label='Apply' onClickHandler={(e) => { console.log(e);}} />
                </div>
              </div>
    </>);
};

export default OverlayContent;