import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.scss'

export default ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<link rel="icon" href="/icon.png" />
		</Head>
		<Component {...pageProps} />
	</>
)
