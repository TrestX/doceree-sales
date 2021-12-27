import * as React from 'react';
const OverlayContent = () => {
    return (<>
 
              <div className="p-grid">
                <div className="p-col-4">
                    <img src='assets/bargraph.png' style={{width:'30px',display:'block',marginLeft:'auto',marginRight:'auto'}}/>
                    <div style={{fontSize:'11px',textAlign:'center',marginTop:'5px',color:'gray'}}>Sales <br/>Manager</div>
                </div>
                <div className="p-col-4">
                    <img src='assets/adopa.png' style={{width:'30px',display:'block',marginLeft:'auto',marginRight:'auto'}}/>
                    <div style={{fontSize:'11px',textAlign:'center',marginTop:'5px',color:'gray'}}>AdOps <br/>Manager</div>
                </div>
                <div className="p-col-4">
                    <img src='assets/wallet.png' style={{width:'30px',display:'block',marginLeft:'auto',marginRight:'auto'}}/>
                    <div style={{fontSize:'11px',textAlign:'center',marginTop:'5px',color:'gray'}}>Finance <br/>Manager</div>
                </div>
              </div>
    </>);
};

export default OverlayContent;