import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPallet } from '@fortawesome/free-solid-svg-icons';

export default function Card({srvname,region}) {
  return (
    <div className='container-md'>
        <div className="card">
            <div className="card-title">{srvname}</div>
            <div className="card-body">
                <FontAwesomeIcon icon={faPallet} />
                <p>This is for testing {srvname} for {region}</p>
                <div className="card-footer">
                    <button className='btn-outline-primary' type="submit">Click me!</button>
                </div>
            </div>
        </div>
    </div>
  );
}
