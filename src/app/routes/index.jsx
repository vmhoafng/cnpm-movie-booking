import React from 'react';
import { useRoutes } from 'react-router-dom';

//const Component = React.lazy(()=>import(''));

function AllRoutes() {
	return useRoutes([
		{
			path: '/',
			element: '',
			children: [],
		},
	]);
}

export default AllRoutes;
