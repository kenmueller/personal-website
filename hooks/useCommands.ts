import { useState, useCallback } from 'react'

export interface Command {
	input: string
	output: string
}

export default () => {
	const [commands, setCommands] = useState([] as Command[])
	
	const addCommand = useCallback((input: string) => {
		setCommands(commands => [
			...commands,
			{ input, output: 'Hello' }
		])
	}, [setCommands])
	
	return [commands, addCommand] as const
}
