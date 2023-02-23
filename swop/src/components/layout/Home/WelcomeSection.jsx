import React from 'react';
import { crowd } from 'assets/images';

function WelcomeSection() {
	return (
		<>
			<div
				style={{ backgroundImage: `url(${crowd})` }}
				className='bg-cover bg-opacity-30 bg-blend-color bg-black'
			>
				<div className='grid gap-2 grid-cols-3'>
					<div className='col-2'></div>
					<div className='col-10'>
						<div className='text-white text-center pt-300px pb-300px'>
							<h2 className='font-bold text-5xl'>
								Support for Widows and Orphans Programme
							</h2>
							<p className='font-normal text-2xl pt-10'>
								Support for Widows and Orphans Programme is widow led
								organization that supports women and orphans.
							</p>
							<div className='grid gap-2 grid-cols-2 mt-6'>
								<div className='flex flex-col items-center'>
									<button className='bg-yellow text-black rounded-full py-4 px-10 text-xl font-semibold'>
										DONATE NOW
									</button>
								</div>

								<div className='flex flex-col items-center'>
									<button className=' text-white rounded-full py-3 px-6 text-xl font-semibold'>
										PLAY VIDEO
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='col-2'></div>
				</div>
			</div>
		</>
	);
}

export default WelcomeSection;
