import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabView, TabPanel } from 'primereact/tabview';

export function HeaderTabs({ tabList, onChange, currentTab }: { tabList: string[], currentTab: string, onChange: (event: React.SyntheticEvent, newValue: string) => void }) {
    const tabs = tabList.map((key, value) => <Tab key={key} value={key.toString()} label={value} />);
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={currentTab}
                onChange={onChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                {tabs}
            </Tabs>
        </Box>
    );
}

export function PrimeHeaderTabs({ tabList }: { tabList: string[] }) {
    return (
        <>
            {tabList.map((data) => {
                return (<><TabPanel header={data}>
                </TabPanel></>
            );})}
        </>
    );
}