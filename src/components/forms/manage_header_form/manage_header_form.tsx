import { CustomizedButtons } from '../../../components/buttons/button';
import { CustomPrimeInputTextFieldLeftIcon } from '../../../components/textfields/textfield';
import * as React from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import OverlayContent from './overlaycontent';
import { useRef } from 'react';
import { CustomizedPButtons, CustomizedPMButtons } from '../../../components/buttons/pbutton';



export function ManageHeaderForm() {
    const op = useRef<OverlayPanel>(null);
    const [arrow, setArrow] = React.useState(false);
    return (<><div className="p-grid">
        <div className="p-col-12 p-md-5 p-lg-7 p-xl-8">
            <div style={{ marginTop: '8px' }}></div>
            <CustomPrimeInputTextFieldLeftIcon placeholder={'Search'} icon={'search'} width={'100'} />
        </div>
        <div className="p-col-12 p-md-2 " style={{ paddingRight: '2px', textAlign: 'right' }}>
            <CustomizedButtons label='Create New Proposal' onClickHandler={() => { console.log(''); }} />
        </div>
        <div className="p-col-12 p-md-2" style={{ paddingLeft: '0px', marginLeft: '-20px', textAlign: 'left' }}>
            <CustomizedPMButtons label='Filter' direction={arrow} onClickHandler={(e) => { op.current?.toggle(e); setArrow(!arrow); }} icon={'filter-fill'} />
        </div>
    </div>
        <OverlayPanel
            ref={op}
            id="overlay_panel"
            style={{ width: '380px', borderRadius: '16px' }}
        >
            <OverlayContent />

        </OverlayPanel>
    </>);
}