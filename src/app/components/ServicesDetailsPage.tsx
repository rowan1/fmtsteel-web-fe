import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import Navigation from './navigation';
import { Footer } from './Footer';
import { IServicesBody } from '../api/Interfaces';
import { ServiceDetailsSection, SubServicesDetailsSection } from './ServiceDetails';
import { Item, Container, Header, List } from 'semantic-ui-react';
import { fetchService } from '../api/Api';
import OwlCarousel from 'react-owl-carousel';
import { BASE_URL } from '../api/ApiServiceManager';

export const ListDivided = (props: { services?: IServicesBody[] }) => {
	return (
		<List divided relaxed>

			{props.services?.map((service, i) => {
				return (
					<>
					<List.Item as='li'>
						<List.Content>
							<List.Header as='h2'>{`${i+1}. ${service.title}`}</List.Header>

							<List.Description as='p'>{service.description}</List.Description>

							{service.path && 
							<div >
							<OwlCarousel center={true} className='owl-theme' loop={false} rewind={true} margin={10} nav autoplay={true} autoplayTimeout={3000}>
								{service.path?.map((path, i) => {
									return (
										<div className='item' key={i} style={{ margin: '1px' }}>
											<img
											style={{maxWidth:'200px'}}
												src={`${BASE_URL}${path}`}
												className="img-responsive"
												alt="Service"
												key={i}
											/>
										</div>
									)
								})}
							</OwlCarousel>
							</div>
							}
						</List.Content>
					</List.Item>
					<br/><br/><br/><br/><br/>
					</>
				)
			})}

		</List>
	)
}

interface IProps extends RouteComponentProps {
}
export const ServicesDetailsPage = (props: IProps) => {

	const [service, setService] = useState<IServicesBody>();
	useEffect(() => {
		const search = new URLSearchParams(props.location?.search);
		const serviceId = search.get("serviceId") || "";
		let id = parseInt(serviceId);
		fetchService(id).then((res) => {
			console.log(res);
			setService(res.items.pop());
		}).catch((error) => {
			console.log(error)
		})
	}, [])

	return (
		<div>
			<Navigation />
			<div style={{ minHeight: '100vh', paddingTop: '150px', maxWidth:'100%', textAlign:'center' }}>
				<Container fluid >
					<Header as='h1'>{service?.title}</Header>

					<p>{service?.description}</p>


					{service?.path && <OwlCarousel center={true} className='owl-theme' loop={false} rewind={true} margin={10} nav autoplay={true} autoplayTimeout={3000}>
						{service?.path?.map((path, i) => {
							return (
								<div className='item' key={i} style={{ margin: '5px' }}>
									<img
										style={{maxWidth:'300px'}}
										src={`${BASE_URL}${path}`}
										className="img-responsive"
										alt="Service"
										key={i}
									/>
								</div>
							)
						})}
					</OwlCarousel>}
					<br/>
					<div >	
						<ListDivided services={service?.services} />
					</div>
				</Container>
			</div>
			<Footer />
		</div>
	)

}