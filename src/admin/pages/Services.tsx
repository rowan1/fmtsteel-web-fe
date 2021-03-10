import React, { useState, useEffect } from 'react';
import {Services as LandingServices} from '../../components/services';
import {ILandingPageData} from '../../LandingPage';
import JsonData from '../../data/data.json';
interface Iprops{
	Services:any
}
export const Services = (props:Iprops) => {	  
	return (
		<LandingServices  data={props.Services} />
	)
}