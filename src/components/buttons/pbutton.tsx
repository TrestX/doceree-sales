import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from 'primereact/button';

export function CustomizedPButtons({ label,icon,onClickHandler }: { label: string,icon:string, onClickHandler: () => void }) {
	return (
		<>		    <Button label={label} icon={`pi pi-${icon}`} style={{borderRadius:'25px',border:'1px solid grey', backgroundColor:'white',color:'grey',fontSize:'11px',paddingTop:'4px',paddingBottom:'4px'}}/>
		</>
	);
}
export function CustomizedPTButtons({ label,icon,onClickHandler }: { label: string,icon:string, onClickHandler: () => void }) {
	return (
		<>		    <Button label={label} icon={`pi pi-${icon}`} style={{backgroundColor:'white',color:'grey',fontSize:'11px',paddingTop:'4px',paddingBottom:'4px'}} onClick={onClickHandler}/>
		</>
	);
}

export function CustomizedPButtonsNI({ label,background,color,border,fs,fw, onClickHandler }: { label: string,background:string,color:string,border:string,fs:string,fw:number, onClickHandler}) {
	return (
		<>		    <Button label={label} style={{borderRadius:'25px',border:border, backgroundColor:background,color:color,fontWeight:fw, fontSize:fs,paddingTop:'4px',paddingBottom:'4px'}} onClick={onClickHandler}/>
		</>
	);
}

export function CustomizedPrimeButton({ label,background,color,brad,fs,fw, onClickHandler }: { label: string,background:string,color:string,brad:string,fs:string,fw:number, onClickHandler}) {
	return (
		<>		    <Button label={label} style={{borderRadius:brad, background:background,color:color,fontWeight:fw, fontSize:fs,paddingTop:'4px',paddingBottom:'4px'}} onClick={onClickHandler}/>
		</>
	);
}


export function CustomizedPrimeButtonCustomPadding({ label,background,color,brad,fs,fw,padding, onClickHandler }: { label: string,background:string,color:string,brad:string,fs:string,fw:number,padding:string, onClickHandler}) {
	return (
		<>		    <Button label={label} style={{borderRadius:brad, background:background,color:color,fontWeight:fw, fontSize:fs,padding:padding}} onClick={onClickHandler}/>
		</>
	);
}


export function CustomizedPrimeDButton({ label,background,color,brad,fs,fw, onClickHandler,onDoubleClick }: { label: string,background:string,color:string,brad:string,fs:string,fw:number, onClickHandler,onDoubleClick}) {
	return (
		<>		    <Button label={label} style={{borderRadius:brad, background:background,color:color,fontWeight:fw, fontSize:fs,paddingTop:'4px',paddingBottom:'4px'}} onClick={onClickHandler} onDoubleClick={onDoubleClick}/>
		</>
	);
}