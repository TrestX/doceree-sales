import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './salessidebarcontent.css';
const SalesSideBarContent = ({
  list,
}: {
  list: { icon: string; title: string, link: string }[];
}) => {
  return (
    <>
      <div style={{ paddingTop: '20px' }}></div>
      {list.map((data) => {
        return (
          <>
            <NavLink to={data.link} className={window.location.pathname === data.link && 'active'} style={{ padding: '30px 0px 0px 0px', cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}>
              <i
                className={`pi pi-${data['icon']}`}
                style={{ fontSize: '1.2em', color: 'white', marginRight: '20px', paddingLeft: '10px' }}
              ></i>
              <div style={{ color: 'white', fontSize: '10px', fontWeight: 600, paddingRight: '4px' }}>{data['title'].split(' ')[0]}<br />{data['title'].split(' ').length > 1 ? data['title'].split(' ')[1] : ''}</div>
            </NavLink>
          </>
        );
      })}

    </>
  );
};

export default SalesSideBarContent;
