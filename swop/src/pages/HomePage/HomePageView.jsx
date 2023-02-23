import React from 'react';
import { WelcomeSection } from 'components/layout/Home';
import { PageWrapper } from 'components/modules/wrapper';
function HomePageView() {
	return (
		<>
			<PageWrapper>
				<div className='w-full'>
					<WelcomeSection />
				</div>
			</PageWrapper>
		</>
	);
}

export default HomePageView;
