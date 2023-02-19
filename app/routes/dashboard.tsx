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
		title: 'Boxing Match Ticket',
		amount: 80.5,
		date: new Date('2022-05-25').toISOString()
	},
	{
		id: 'e2',
		title: 'Groceries',
		amount: 60.38,
		date: new Date('2022-04-25').toISOString()
	},
	{
		id: 'e3',
		title: 'Netflix Subscription',
		amount: 12.99,
		date: new Date('2022-06-25').toISOString()
	},
	{
		id: 'e4',
		title: 'Uber Trip',
		amount: 24.57,
		date: new Date('2022-07-25').toISOString()
	},
	{
		id: 'e5',
		title: 'Phone Case',
		amount: 16.99,
		date: new Date('2022-08-25').toISOString()
	},
	{
		id: 'e6',
		title: 'Snacks',
		amount: 28.32,
		date: new Date('2022-09-25').toISOString()
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
