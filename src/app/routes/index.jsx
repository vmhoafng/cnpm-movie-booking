import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/layouts/Layout';
import { PATHS } from '../constants/path';

//Lazy loading pages
const Movies = React.lazy(() => import('../../pages/Movie/List'));

// import Movies from '../../pages/Movie/List';

const loading = () => <div className="">loading</div>;

const LoadComponent = ({ component: Component }) => {
	return (
		<Suspense fallback={loading()}>
			<Component />
		</Suspense>
	);
};

const movieRoutes = {
	path: PATHS.MOVIES.IDENTITY,
	children: [
		{
			path: PATHS.MOVIES.LIST,
			element: <LoadComponent component={Movies} />,
		},
		{
			path: PATHS.MOVIES.DETAIL,
			element: <></>,
		},
	],
};

function AllRoutes() {
	return useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [movieRoutes],
		},
		{
			path: '/',
			element: <ProtectedRoute />,
			// element: <ProtectedRoute role={"Admin"} RouteComponent={AdminLayout} />,
			children: [],
			// children: [ {
			// 	path: 'dashboard',
			//	element :<LoadComponent component={Dashboard}/>,
			// }],
		},
	]);
}

export default AllRoutes;
