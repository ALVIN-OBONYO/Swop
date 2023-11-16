import React from 'react';
import { Link } from 'react-router-dom';
import {
	FacebookButton,
	InstagramButton,
	LinkedInButton,
	TwitterButton,
	YoutubeButton,
} from 'components/widgets/Buttons';

function PageFooter() {
	return (
		<>
			<div className='text-white grid grid-cols-3'>
				<div className='text-center text-white'>
					<p className='font-semibold text-xl mt-5 pb-6'> SWOP </p>
					<p className='pb-2 text-base'>5040 Siaya, Kenya</p>
					<p className='pb-2 text-base'>P.O Box 20227 - 00100</p>
					<p className='pb-2 text-base'>Nairobi Kenya</p>
					<p className='pb-2 text-base'>+2547000000</p>
					<p className='pb-2 text-base'>info.swop@gmail.com</p>
				</div>
				<div className='text-center'>
					<p className='font-semibold text-xl mt-5 pb-6 text-white'>NAVIGATE</p>
					<div className='text-base'>
						<Link to='/'>Home</Link> <br />
						<Link to='/'>News</Link> <br />
						<Link to='/'>Careers</Link> <br />
						<Link to='/Contact'>Contact</Link> <br />
						<Link to='/'>Get In Touch</Link> <br />
					</div>
				</div>
				<div>
					<div className='text-center'>
						<p className='font-semibold text-xl mt-5 pb-6 text-white'>
							EXPLORE
						</p>
						<div className='text-base'>
					
							<Link to='/'>Developments</Link> <br />
							<Link to='/'>Services</Link> <br />
							<Link to='/'>Privacy Policy</Link> <br />
						</div>
					</div>
				</div>
			</div>

			<div className='text-white justify-center mt-10'>
				<div>
					<div className='flex gap-x-4 justify-center pb-6'>
						<InstagramButton />
						<LinkedInButton />
						<FacebookButton />
						<TwitterButton />
						<YoutubeButton />
					</div>
					<p className='font-semibold text-lg mt-5 pb-6 text-white text-center'>
						SWOP
					</p>
					<p className='text-white font-normal pb-6 text-base text-center'>
						{`© Copyright ${new Date().getFullYear()Swop Analysis All rights reserved.`}
					</p>
				</div>
			</div>
		</>
	);
}

export default PageFooter;
