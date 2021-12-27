import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import OverlayContent from './overlaycontent';
import SideBarContent from './sidebarcontent';
import { Sidebar } from 'primereact/sidebar';
import './topbar.css';
const TopBarMenu = () => {
    const op = useRef<OverlayPanel>(null);
    const [sidebarV, setSideBarV] = useState(false);
    return (<>
        <div style={{ position: 'fixed', right: '30px', top: '40px' }}>
            <i className="pi pi-exclamation-circle" style={{ 'fontSize': '1.2em', color: 'gray', marginRight: '20px' }}></i>
            <i className="pi pi-bell" style={{ 'fontSize': '1.2em', color: 'gray', marginRight: '10px' }} onClick={() => setSideBarV(true)}></i>
            <i onClick={(e) => op.current?.toggle(e)} style={{ marginRight: '20px' }}>
                <i className="pi pi-ellipsis-v" style={{ 'fontSize': '1.2em', color: 'gray', width: '8px' }} ></i>
                <i className="pi pi-ellipsis-v" style={{ 'fontSize': '1.2em', color: 'gray', width: '8px' }} ></i>
                <i className="pi pi-ellipsis-v" style={{ 'fontSize': '1.2em', color: 'gray', width: '8px' }} ></i>
            </i>
            <img style={{ borderRadius: '50%', width: '1.2em', marginRight: '5px' }} src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
        </div>

        <OverlayPanel
            ref={op}
            id="overlay_panel"
            style={{ width: '280px', borderRadius: '18px' }}
        >
            <OverlayContent />

        </OverlayPanel>
        <Sidebar visible={sidebarV} position="right" onHide={() => setSideBarV(false)}>
            <SideBarContent />
        </Sidebar>
    </>);
};

export default TopBarMenu;