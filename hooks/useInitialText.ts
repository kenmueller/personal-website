import { useState, useEffect, useMemo } from 'react'

const INITIAL_TEXT = 'Hi, my name is Ken Mueller. Type \'help\' to see a list of commands.'
const TYPING_INTERVAL = 50

export default () => {
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count => {
				if (count === INITIAL_TEXT.length - 1)
					clearInterval(interval)
				
				return count + 1
			})
		}, TYPING_INTERVAL)
		
		return () => clearInterval(interval)
	}, [setCount])
	
	return useMemo(() => (
		INITIAL_TEXT.slice(0, count)
	), [count])
}
