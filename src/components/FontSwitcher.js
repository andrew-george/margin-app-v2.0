import { useState } from 'react'
import { AiOutlineFontSize } from 'react-icons/ai'
import { useDispatch } from 'react-redux/es/exports'
import { setFontStyle } from '../features/ui/uiSlice'

function FontSwitcher() {
	const dispatch = useDispatch()
	const [isExpanded, setIsExpanded] = useState(false)

	function fontSwitcherHandler(e) {
		dispatch(setFontStyle(e.target.innerHTML))
	}

	return (
		<div className='font-switcher'>
			<AiOutlineFontSize onClick={() => setIsExpanded(prev => !prev)} />

			{isExpanded && (
				<div className='buttons-container'>
					<button onClick={fontSwitcherHandler}>serif</button>
					<button onClick={fontSwitcherHandler}>sans</button>
					<button onClick={fontSwitcherHandler}>mono</button>
				</div>
			)}
		</div>
	)
}

export default FontSwitcher
