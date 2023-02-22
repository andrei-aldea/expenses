import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch
} from '@remix-run/react'
import type { ReactNode } from 'react'

import Footer from './components/template/Footer'
import Header from './components/template/Header'
import Error from './components/util/Error'
import styles from './styles/tailwind.css'

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Expenses',
	viewport: 'width=device-width,initial-scale=1'
})

function Document({
	title,
	children
}: {
	title?: string
	children: ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				{title && <title>{title}</title>}
				<Meta />
				<Links />
			</head>
			<body className='mx-auto flex min-w-[22rem] max-w-6xl'>
				<Header />
				<main className='mt-14 flex w-full flex-col gap-4 p-6 sm:p-10 md:ml-52 md:mt-0 md:p-6 lg:p-10'>
					{children}
				</main>
				<Footer />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}

export function CatchBoundary() {
	const caughtResponse = useCatch()

	return (
		<Document title={caughtResponse.statusText}>
			<main>
				<Error title={caughtResponse.statusText}>
					<p>
						{caughtResponse.data?.message ||
							'Something went wrong. Please try again later.'}
					</p>
					<p>
						Back to{' '}
						<Link className='font-semibold  hover:underline' to='/'>
							safety
						</Link>
						.
					</p>
				</Error>
			</main>
		</Document>
	)
}

export function ErrorBoundary() {
	return (
		<Document title='An error occurred'>
			<main>
				<Error title='An error occurred'>
					<p>Something went wrong. Please try again later.</p>
					<p>
						Back to{' '}
						<Link className='font-semibold hover:underline' to='/'>
							safety
						</Link>
						.
					</p>
				</Error>
			</main>
		</Document>
	)
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]
