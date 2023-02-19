import { Outlet } from '@remix-run/react'
import Chart from '~/components/dashboard/Chart'
import List from '~/components/dashboard/List'
import Statistics from '~/components/dashboard/Statistics'

export interface Expense {
	id: string
	title: string
	amount: number
	date: string
}

const DUMMY_EXPENSES: Array<Expense> = [
	{
		id: 'e1',
		title: 'First Expense',
		amount: 12.99,
		date: new Date().toISOString()
	},
	{
		id: 'e2',
		title: 'Second Expense',
		amount: 16.99,
		date: new Date().toISOString()
	}
]

export default function DashboardPage() {
	return (
		<>
			<div className='text-2xl font-bold'>Dashboard</div>
			<Chart expenses={DUMMY_EXPENSES} />
			<Statistics expenses={DUMMY_EXPENSES} />
			<section className='grid gap-4 lg:grid-cols-2'>
				<List expenses={DUMMY_EXPENSES} />
				<Outlet />
			</section>
		</>
	)
}
