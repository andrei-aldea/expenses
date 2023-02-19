import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from '@remix-run/react'

import styles from './styles/tailwind.css'
import Footer from './components/template/Footer'
import Header from './components/template/Header'

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Expenses',
	viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body className='mx-auto flex min-w-[22rem] max-w-6xl'>
				<Header />
				<main className='mt-14 flex w-full flex-col gap-4 p-6 sm:p-10 md:p-6 lg:p-10 md:ml-52 md:mt-0'>
					<Outlet />
				</main>
				<Footer />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]
