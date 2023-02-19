import type { Expense } from '~/routes/dashboard'
import ListItem from './ListItem'

export default function List({ expenses }: { expenses: Array<Expense> }) {
	return (
		<ul className='max-h-max rounded-md bg-neutral-200 p-2'>
			{expenses.map((expense) => (
				<li key={expense.id}>
					<ListItem
						id={expense.id}
						title={expense.title}
						amount={expense.amount}
					/>
				</li>
			))}
		</ul>
	)
}
