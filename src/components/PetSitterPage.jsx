import React from 'react'
import PageHeading from './PageHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import PageListing from './PageListing';
import { useLocation, useLoaderData } from 'react-router-dom';
import apiClient from '../api/apiClient';


export default function PetSitterPage({name, region}) {

    const services = useLoaderData();

  return (
    <div className='container-md'>
        <PageHeading title={name}>
            <p>{name}</p>
            <p>{region}</p>
            <FontAwesomeIcon icon={faDongSign} />
        </PageHeading>
        <PageListing service={services} />
    </div>
  );
}

export function loadData() {

    try {
        const response = apiClient.get('/services');
        return response.data;
        
    } catch(error) {
        throw new Response.error(error.message);
    }
}

