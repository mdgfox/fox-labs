import './Menu3D.css';
import React from 'react';
export const Menu3D = () => {
    return (
        <div className='root'>
            <ul>
                <li className="fa-home" style={{ zIndex: 6 }}>
                    <a href={'/#'}>Home</a>
                </li>
                <li className="fa-address-card" style={{ zIndex: 5 }}>
                    <a href={'/#'}>About</a>
                </li>
                <li className="fa-list" style={{ zIndex: 4 }}>
                    <a href={'/#'}>Services</a>
                </li>
                <li className="fa-folder-open" style={{ zIndex: 3 }}>
                    <a href={'/#'}>Portfolio</a>
                </li>
                <li className="fa-users" style={{ zIndex: 2 }}>
                    <a href={'/#'}>Our Team</a>
                </li>
                <li className="fa-at" style={{ zIndex: 1 }}>
                    <a href={'/#'}>Contact</a>
                </li>
            </ul>
        </div>
    );
}
