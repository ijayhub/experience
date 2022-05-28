import React from 'react'
import icon from '../img/chevrons-right (1).svg'



const Tommy = () => {
    return (
			<div>
				<header>
					<h1 className="title">Experience</h1>
				</header>
				<div className='underline'></div>
				<h2>Full Stack Web Developer</h2>
				<button>Tommy</button>
				<small>December 2015 - Present</small>
				<div className='icon-para'>
					<div className='para-icon'>
						<div>
							<img src={icon} alt='icon' className='icon' />
						</div>
						<div>
							<span className='text-para1'>
								Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual
								poke leggings offal cold-pressed brunch neutra. Hammock <br />
								photo booth live-edge disrupt.
							</span>
						</div>
					</div>
					<div className='para-icon'>
						<div>
							<img src={icon} alt='icon' className='icon' />
						</div>
						<div>
							<span className='text-para1'>
								Post-ironic selvage chambray sartorial freegan meditation.
								Chambray chartreuse kombucha meditation, man bun four
								<br />
								dollar toast street art cloud bread live-edge heirloom.
							</span>
						</div>
					</div>
					<div className='para-icon'>
						<div>
							<img src={icon} alt='icon' className='icon' />
						</div>
						<div>
							<span className='text-para1'>
								Butcher drinking vinegar franzen authentic messenger bag copper
								mug food truck taxidermy. Mumblecore lomo echo
								<br />
								park readymade iPhone migas single-origin coffee franzen cloud
								bread tilde vegan flexitarian.
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

export default Tommy
