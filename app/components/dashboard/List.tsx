import { Link } from '@remix-run/react'
import { RiAddFill } from 'react-icons/ri'
import type { Expense } from '~/routes/dashboard'
import ListItem from './ListItem'

export default function List({ expenses }: { expenses: Array<Expense> }) {
	return (
		<ul className='rounded-md bg-neutral-200 p-2'>
			{expenses.map((expense) => (
				<li
					key={expense.id}
					className='group/item active flex items-center justify-between rounded-md p-2 hover:bg-neutral-100'
				>
					<ListItem
						id={expense.id}
						title={expense.title}
						amount={expense.amount}
					/>
				</li>
			))}
			<li className='flex max-w-max '>
				<Link
					to={'/dashboard/add'}
					className='flex rounded-md p-2 hover:bg-neutral-300'
				>
					<span>Add</span>
					<RiAddFill size={24} />
				</Link>
			</li>
		</ul>
	)
}
