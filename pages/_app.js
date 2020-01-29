import React from 'react'
import Head from 'next/head'

const CustomApp = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>МБОУ Лицей №2</title>
			<Component {...pageProps} />
		</Head>
	</>
)

export default CustomApp