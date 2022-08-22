import { useSelector } from 'react-redux/es/exports';

const SidebarHead = () => {
	const user = useSelector(state => state.user);

	return (
		<div className='head'>
			<div className='greeting'>
				<p>Hello,</p>
				<p className='name'>{user.name}</p>
			</div>
		</div>
	);
};

export default SidebarHead;
