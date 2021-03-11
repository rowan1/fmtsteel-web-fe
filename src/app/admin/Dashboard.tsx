import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import 'react-pro-sidebar/dist/css/styles.css';
import { Layout } from './Layout';
import './styles/App.scss';

interface IProps extends RouteComponentProps{

}
export const Dashboard: React.FunctionComponent<IProps> =(props:IProps)=>{
  return (
      <Layout />
  );
}