import { Calendar } from 'primereact/calendar';
import * as React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { CustomizedButtons } from '../../../components/buttons/button';
import { CustomizedPrimeDButton, CustomizedPTButtons } from '../../../components/buttons/pbutton';
const TabList = ({ setOpenDialog, changeTab, names, number, tabNumb, setNumber, setNames }: { setOpenDialog, changeTab, names, number, tabNumb, setNumber, setNames }) => {

    const campDict = <><CustomizedPrimeDButton label={names[0]} fw={600} background={tabNumb === 0 ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(0); }} onDoubleClick={() => { setOpenDialog(true); }} /></>;
    const [list, setList] = useState([
        campDict
    ]);
    React.useEffect(() => {
        let nList = [campDict];
        for (let i = 0; i < names.length; i++) {
            if (i === 0) {
                nList = [<><CustomizedPrimeDButton key={names[i]} label={names[0]} fw={600} background={tabNumb === 0 ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(i); }} onDoubleClick={() => { setOpenDialog(true); }} /></>];
            } else {
                nList.push(<><CustomizedPrimeDButton key={names[i]} label={names[i]} fw={600} background={tabNumb === i ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(i); }} onDoubleClick={() => { setOpenDialog(true); }} /></>);
            }
        }
        setList(nList);
    }, [names, tabNumb]);
    const AddnewTab = () => {
        const nlist = list;
        const pnumb = number;
        const namesL = names;
        const campDict = <><CustomizedPrimeDButton key={names[number]} label={names[number] ? names[number] : 'Campaign ' + parseInt(number + 1)} fw={600} background={tabNumb === pnumb ? 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)' : 'linear-gradient(to right,#dbd9d9 0%, #aaa9a9 70%)'} brad={'7px 7px 0px 0px'} color={'white'} fs={'11px'} onClickHandler={() => { changeTab(pnumb); }} onDoubleClick={() => { setOpenDialog(true); }} /></>;
        namesL.push('Campaign ' + parseInt(number + 1));
        nlist.push(campDict);
        setNumber(number + 1);
        setList(nlist);
        setNames([...namesL]);
    };
    const RemovenewTab = () => {
        if (list.length > 1) {
            const nlist = [...list];
            const namesL = [...names];
            nlist.pop();
            namesL.pop();
            const pnumb = number - 1;
            setNumber(pnumb);
            setList(nlist);
            setNames(namesL);
        }
    };
    return (<>
        {list.map((data) => {

            console.log(data);
            return data;
        })}
        <CustomizedPTButtons label='' onClickHandler={() => { AddnewTab(); }} icon={'plus-circle'} />
    </>);
};

export default TabList;
