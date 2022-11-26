import { useSelector } from 'react-redux'

const SidebarHead = () => {
	const { name, picture } = useSelector(state => state.user)

	return (
		<div className='head'>
			<img className='image' src={picture} alt={name} />
			<div className='greeting'>
				<p>Hello,</p>
				<p className='name'>{name.split(' ')[0]}</p>
			</div>
		</div>
	)
}

export default SidebarHead
