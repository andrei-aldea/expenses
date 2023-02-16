import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from '@remix-run/react'

import styles from './tailwind.css'
import Footer from './template/Footer'
import Header from './template/Header'

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body className='mx-auto min-w-[22rem] max-w-6xl flex'>
				<Header />
				<>
					<Outlet />
					<Footer />
				</>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]
