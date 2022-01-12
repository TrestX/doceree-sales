import { Calendar } from 'primereact/calendar';
import * as React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { CustomizedButtons } from '../../../components/buttons/button';
import { CustomizedPrimeDButton, CustomizedPTButtons } from '../../../components/buttons/pbutton';
const TabList = ({ setOpenDialog,changeTab,names,number,tabNumb,setNumber,setNames }: { setOpenDialog,changeTab,names,number,tabNumb,setNumber,setNames }) => {

    const campDict = <><CustomizedPrimeDButton label={names[0]} fw={600} background={tabNumb === 0 ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(0); }} onDoubleClick={() => { setOpenDialog(true); }} /></>;
    const [list, setList] = useState([
        campDict
    ]);
    React.useEffect(() => {
        const nlist = [...list];
        setList(nlist);
    }, [names]);
    const AddnewTab = () => {
        const nlist = [...list];
        const pnumb = number;
        const namesL = [...names];
        const campDict = <><CustomizedPrimeDButton label={names[number]?names[number]:'New Campaign'} fw={600} background={tabNumb === pnumb ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(pnumb); }} onDoubleClick={() => { setOpenDialog(true); }} /></>;
        namesL.push('New Campaign');
        nlist.push(campDict);
        setNumber(number+1);
        setList(nlist);
        setNames(namesL);
    };
    const RemovenewTab = () => {
        if (list.length>1){
            const nlist = [...list];
            const namesL = [...names];
            nlist.pop();
            namesL.pop();
            const pnumb = number-1;
            setNumber(pnumb);
            setList(nlist);
            setNames(namesL);
        }
    };
return (<>
    {list.map((data) => {
        return data;
    })}
    <CustomizedPTButtons label='' onClickHandler={() => { AddnewTab() ;}} icon={'plus-circle'} />
    <CustomizedPTButtons label='' onClickHandler={() => { RemovenewTab() ;}} icon={'minus-circle'} />
</>);
};

export default TabList;
