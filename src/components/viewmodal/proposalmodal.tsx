import React, { useState,useRef } from 'react';
import {CustomizedPrimeButton, CustomizedPrimeButtonCustomPadding } from '../buttons/pbutton';
import ViewProposalTable from './proposaltable';
import { Divider } from 'primereact/divider';

export function ViewProposal() {
    return (
        <>
        <div style={{position:'absolute',top:'0px',left:'45%'}}>
        <CustomizedPrimeButtonCustomPadding label={'Proposal'} fw={800} background={'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)'} onClickHandler={undefined} brad={'0px 0px 12px 12px'} padding={'7px 80px 7px 80px'} color={'white'} fs={'22px'}/>
        </div>
        <div style={{textAlign:'left'}}>
            <img src='assets/doceree.png' style={{width:'110px'}} />
        </div>
        <br/>
        <div className="p-grid">
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
                <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Agency: <span style={{color:'gray'}}>Ogivly</span></h1>
            </div>
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
            <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Client: <span style={{color:'gray'}}>Starcom</span></h1>
            </div>
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
            <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Geo Targeting: <span style={{color:'gray'}}>Pan India</span></h1>
            </div>
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
            <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Duration: <span style={{color:'gray'}}>2 Months (3 Sep&apos;21 to 3 Nov&apos;21)</span></h1>
            </div>
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
            <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Proposal Number: <span style={{color:'gray'}}>23456</span></h1>
            </div>
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
            <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Brand: <span style={{color:'gray'}}>TBD</span></h1>
            </div>
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
            <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Specialist Targeting: <span style={{color:'gray'}}>Endocrinology, Diabetes & Metabolism, Cardiology</span></h1>
            </div>
            <div className="p-col-12 p-sm-6 p-md-4 p-lg-3">
            <h1 style={{fontSize:'12px',color:'#A45BE4'}}>Total Budget: <span style={{color:'gray'}}>$ 12,00,000</span></h1>
            </div>
        </div>
        <br/>
        <CustomizedPrimeButton label={'Business Objective :'} fw={600} background={'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)'} onClickHandler={undefined} brad={'7px 7px 0px 0px'} color={'white'} fs={'10px'}/>
        <span style={{fontSize:'11px', fontWeight:700,color:'gray',marginLeft:'8px'}}> Drive Registration for MedHub</span>
        
        <div style={{marginTop:'25px'}}>
        <ViewProposalTable/>
        </div>

        <div style={{textAlign:'right',marginTop:'20px'}}>
        <h1 style={{fontSize:'12px',color:'grey',marginRight:'35px'}}>Total Estimated Media Cost: <span style={{color:'gray',marginLeft:'15px'}}>50,000</span></h1>
        <h1 style={{fontSize:'12px',color:'grey',marginRight:'35px'}}>Managed Services @10% of the media cost: <span style={{color:'gray',marginLeft:'15px'}}>20,000</span></h1>
        <h1 style={{fontSize:'12px',color:'grey',marginRight:'35px'}}>Tech Access Fees (For 1 Brand, 1 Campaign): <span style={{color:'gray',marginLeft:'15px'}}>30,000</span></h1>
        <h1 style={{fontSize:'12px',color:'#A45BE4',marginRight:'35px'}}>Total: <span style={{marginLeft:'15px'}}>$ 15,00,000</span></h1>
        </div>
            <div className="p-grid" style={{background:'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)',marginTop:'50px',marginLeft:'-35px',marginRight:'-35px'}}>
                <div className="p-col-12 p-sm-12 p-md-5  p-lg-7" style={{color:'white'}}>
                    <h1 style={{fontSize:'11px',color:'white',marginLeft:'15px',fontWeight:600}}>Terms and Conditions</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>4. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                </div>
                <div className="p-col-12 p-sm-12 p-md-2  p-lg-1" style={{color:'white'}}>
                <Divider layout="vertical" style={{color:'white'}}/>
                </div>
                <div className="p-col-12 p-sm-12 p-md-5  p-lg-4" style={{color:'white',textAlign: 'center'}}>
                    <h1 style={{fontSize:'11px',color:'white',marginLeft:'15px',fontWeight:900,marginTop:'40px'}}>Visit us for more information<br/><div style={{fontWeight:900}}>www.doceree.com</div></h1>
                </div>
            </div>


            {/* <div className="p-grid" style={{background:'#E5E5E5E',marginTop:'10px',marginLeft:'-35px',marginRight:'-35px'}}>
                <div className="p-col-12 p-sm-12 p-md-5  p-lg-7" style={{color:'white'}}>
                    <h1 style={{fontSize:'11px',color:'white',marginLeft:'15px',fontWeight:600}}>Terms and Conditions</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</h1>
                    <h1 style={{fontSize:'9px',color:'white',marginLeft:'15px'}}>4. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                </div>
            </div> */}
            </>
    );
}