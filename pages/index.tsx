import Head from 'next/head'

import useInitialText from '../hooks/useInitialText'

import styles from '../styles/index.module.scss'

export default () => {
	const initialText = useInitialText()
	
	return (
		<div className={styles.root}>
			<Head>
				<title>Ken Mueller</title>
			</Head>
			<p className={styles.initialText}>
				{initialText}
			</p>
		</div>
	)
}
