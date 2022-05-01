import React from 'react';
import { AppSearch } from '../components/AppSearch/AppSearch';
import { Description } from '../components/UI/Description/Description'


export const Main = () => {
  return (
    <React.Fragment>
      <Description />
      <AppSearch/>
    </React.Fragment>
  );
};