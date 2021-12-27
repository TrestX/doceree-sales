import * as React from 'react';
const SalesSideBarContent = ({
  list,
}: {
  list: { icon: string; title: string }[];
}) => {
  return (
    <>
    <div style={{paddingTop:'20px'}}></div>
      {list.map((data) => {
        return (
          <>
          <div style={{padding:'30px 15px 0px 15px',cursor:'pointer'}}>
            <i
              className={`pi pi-${data['icon']}`}
              style={{ fontSize: '1.2em', color: 'white', marginRight: '20px',paddingLeft:'10px'}}
            ></i>
            <div style={{ color: 'white',fontSize:'10px',fontWeight:600}}>{data['title'].split(' ')[0]}<br/>{data['title'].split(' ').length>1?data['title'].split(' ')[1]:''}</div>
            </div>
          </>
        );
      })}
      ;
    </>
  );
};

export default SalesSideBarContent;
