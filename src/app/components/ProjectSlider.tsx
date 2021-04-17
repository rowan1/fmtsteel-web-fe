import React from 'react';

interface IProps{
	projects?:any[]
}
export const ProjectSlider = (props:IProps) => {
	return (
		<div className="carousel-inner" role="listbox">

			<div className="carousel-item active">

				<div className="row">
					<div className="col-md-4">

						{props.projects?.map((item, id)=>{

							return(
								<div className="col-md-4 clearfix d-none d-md-block">
									<img className="card-img-top" src={item.img} />
									<div className="card-body">
										<h4 className="card-title">{item.name}</h4>
										<p className="card-text">{item.job}</p>
									</div>
								</div>
							)
						})}


					</div>
				</div>
			</div>

		</div>
	)
}