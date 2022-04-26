import React from 'react';
import { AppSearch } from '../components/AppSearch/AppSearch';

const searchStyles = {
  paddingTop: '90px'
};

export const Search = () => {
  return (
    <React.Fragment>
      <AppSearch style={searchStyles}/>
    </React.Fragment>
  );
};