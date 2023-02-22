import { Outlet, useLoaderData } from '@remix-run/react'
import Chart from '~/components/dashboard/Chart'
import List from '~/components/dashboard/List'
import Statistics from '~/components/dashboard/Statistics'
import { getExpenses } from '~/data/expenses.server'

export default function DashboardPage() {
	const expenses = useLoaderData()

	return (
		<>
			<div className='text-2xl font-bold'>Dashboard</div>
			<Chart expenses={expenses} />
			<Statistics expenses={expenses} />
			<section className='grid gap-4 lg:grid-cols-2'>
				<List expenses={expenses} />
				<Outlet />
			</section>
		</>
	)
}

export function loader() {
	return getExpenses()
}
export function meta () {
	return {
		title: 'Dashboard',
		'og:title': 'Dashboard',
	}
}