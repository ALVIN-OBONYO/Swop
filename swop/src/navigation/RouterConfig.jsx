import React from 'react';
// import { ProtectedRoutes } from 'components/guards';
import { Home, AboutUs, Contact, Donate, Volunteer, WhatWeDo, OurStaff, StatementOfFaith } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { HOME, ABOUTUS, CONTACT, DONATE, VOLUNTEER, WHAT_WE_DO, OUR_STAFF, STATEMENT_OF_FAITH } from 'navigation/constants';

function RouterConfig() {
	return (
		<Routes>
			{/*************************PUBLIC ROUTES************************************** */}

			{/* List all public routes here */}
			<Route exact path={HOME} element={<Home />} />
			<Route path={ABOUTUS} element={<AboutUs />} />
			<Route path={CONTACT} element={<Contact />} />
			<Route path={DONATE} element={<Donate />} />
			<Route path={VOLUNTEER} element={<Volunteer />} />
			<Route path={WHAT_WE_DO} element={<WhatWeDo />} />
			<Route path={OUR_STAFF} element={<OurStaff />} />
			<Route path={STATEMENT_OF_FAITH} element={<StatementOfFaith />} />

			{/*************************PROTECTED ROUTES************************************** */}
			{/* <Route element={<ProtectedRoutes redirectPath={LOGIN} />}> */}
			{/* LIST ALL PROTECTED ROUTES HERE */}
			{/* </Route> */}

			{/*************************404************************************** */}

			{/* List All 404 routes here */}
			<Route path='*' element={<div>404 PAGE NOT FOUND</div>} />
		</Routes>
	);
}

export default RouterConfig;
