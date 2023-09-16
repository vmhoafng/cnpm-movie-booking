import { useDispatch, useSelector } from 'react-redux';

/**
 *
 * @returns redux's dispatch and selector methods
 */
export default function useRedux() {
	const dispatch = useDispatch();
	const appSelector = useSelector;

	return { dispatch, appSelector };
}
