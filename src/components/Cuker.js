import React from 'react'
import icon from '../img/chevrons-right (1).svg';

const Cuker = () => {
    return (
			<div>
				<header>
					<h1 className='title'>Experience</h1>
				</header>
				<div className='underline'></div>
				<h2>Engineering Intern</h2>
				<button>CUKER</button>
				<small>May 2014 - September 2015</small>
				<div className='icon-para'>
					<div className='para-icon'>
						<div>
							<img src={icon} alt='icon' className='icon' />
						</div>
						<div>
							<span className='text-para1'>
								I'm baby woke mumblecore stumptown enamel pin. Snackwave prism
								pork belly, blog vape four loko sriracha messenger bag
								<br />
								jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo
								santo craft beer gluten-free.
							</span>
						</div>
					</div>
					<div className='para-icon'>
						<div>
							<img src={icon} alt='icon' className='icon' />
						</div>
						<div>
							<span className='text-para1'>
								YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk
								pitchfork street art la croix unicorn DIY. Woke offal <br />
								jianbing venmo tote bag, palo santo subway tile slow-carb
								post-ironic pug ugh taxidermy squid.
							</span>
						</div>
					</div>
					<div className='para-icon'>
						<div>
							<img src={icon} alt='icon' className='icon' />
						</div>
						<div>
							<span className='text-para1'>
								Pour-over glossier chambray umami 3 wolf moon. Iceland kale
								chips asymmetrical craft beer actually forage,biodiesel
								<br />
								tattooed fingerstache. Pork belly lomo man braid, portland
								pitchfork locavore man bun prism.
							</span>
						</div>
					</div>
				</div>
				<div className='btn'>
					<button className='btn1'>MORE INFO</button>
				</div>
			</div>
		);
}

export default Cuker
