import { FormEvent, useState, useCallback } from 'react'
import Head from 'next/head'
import cx from 'classnames'

import useInitialText from '../hooks/useInitialText'
import useCommands from '../hooks/useCommands'

import styles from '../styles/index.module.scss'

export default () => {
	const [initialText, isInitialTextDoneTyping] = useInitialText()
	const [commands, addCommand] = useCommands()
	
	const [currentInput, setCurrentInput] = useState('')
	
	const onSubmit = useCallback((event: FormEvent) => {
		event.preventDefault()
		
		addCommand(currentInput)
		setCurrentInput('')
	}, [currentInput, addCommand, setCurrentInput])
	
	return (
		<div className={styles.root}>
			<Head>
				<title>Ken Mueller</title>
			</Head>
			<p className={styles.initialText}>
				{initialText}
			</p>
			<div className={cx(styles.container, {
				[styles.disabledContainer]: !isInitialTextDoneTyping
			})}>
				<div className={styles.commands}>
					{commands.map(({ input, output }, i) => (
						<div key={i}>
							{input}
							{output}
						</div>
					))}
				</div>
				<form
					className={styles.inputForm}
					onSubmit={onSubmit}
				>
					<input
						className={styles.input}
						value={currentInput}
						onChange={({ target: { value } }) => {
							setCurrentInput(value)
						}}
					/>
				</form>
			</div>
		</div>
	)
}
