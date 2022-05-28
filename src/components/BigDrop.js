import React from 'react'
import icon from '../img/chevrons-right (1).svg';

const BigDrop = () => {
  return (
		<div>
			<header>
				<h1 className='title'>Experience</h1>
			</header>
			<div className='underline'></div>
			<h2>Front-End Engineer</h2>
			<button>BIGDROP</button>
			<small>May 2015 - December 2015</small>
			<div className='icon-para'>
				<div className='para-icon'>
					<div>
						<img src={icon} alt='icon' className='icon' />
					</div>
					<div>
						<span className='text-para1'>
							Hashtag drinking vinegar scenester mumblecore snackwave four
							dollar toast, lumbersexual XOXO. Cardigan church-key pabst,
							<br />
							biodiesel vexillologist viral squid.
						</span>
					</div>
				</div>
				<div className='para-icon'>
					<div>
						<img src={icon} alt='icon' className='icon' />
					</div>
					<div>
						<span className='text-para1'>
							Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la
							croix cardigan neutra retro tattooed copper mug.
							<br /> Meditation lomo biodiesel scenester
						</span>
					</div>
				</div>
				<div className='para-icon'>
					<div>
						<img src={icon} alt='icon' className='icon' />
					</div>
					<div>
						<span className='text-para1'>
							Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack
							vape authentic. Helvetica fixie church-key, small
							<br /> batch jianbing messenger bag scenester +1
						</span>
					</div>
				</div>
				<div className='para-icon'>
					<div>
						<img src={icon} alt='icon' className='icon' />
					</div>
					<div>
						<span className='text-para1'>
							Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack
							vape authentic. Helvetica fixie church-key, small
							<br /> batch jianbing messenger bag scenester +1
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

export default BigDrop
