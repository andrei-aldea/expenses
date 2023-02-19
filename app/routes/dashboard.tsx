// import { Outlet } from '@remix-run/react'
import Chart from '~/components/Chart'
import ExpenseStatistics from '~/components/Statistics'

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

export default function ExpensesPage() {
	return (
		<>
			<div className='text-2xl font-bold'>Dashboard</div>
			<Chart expenses={DUMMY_EXPENSES} />
			<ExpenseStatistics expenses={DUMMY_EXPENSES} />
			{/* <section className='h-96 w-full rounded-md bg-neutral-300'></section>
			<section className='grid grid-cols-2'>
				<ul className='col-span-2 flex flex-col gap-4 sm:col-span-1'>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
					<li className='h-12 w-full rounded-md bg-neutral-300'></li>
				</ul>
				<div></div>
			</section>
			<Outlet /> */}
		</>
	)
}
