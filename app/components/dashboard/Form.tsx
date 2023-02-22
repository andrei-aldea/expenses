import type { Expense } from '@prisma/client'
import {
	Form,
	Link,
	useActionData,
	useMatches,
	useNavigation,
	useParams
} from '@remix-run/react'

export default function ExpenseForm() {
	const today = new Date().toISOString().slice(0, 10)
	const validationErrors = useActionData()
	const navigation = useNavigation()
	const params = useParams()
	const matches = useMatches()
	const expenses = matches?.find(
		(match) => match?.id === 'routes/dashboard'
	)?.data
	const expenseData = expenses.find(
		(expense: Expense) => expense.id === params.id
	)

	if (params.id && !expenseData) {
		return (
			<div className='flex max-h-14 w-full justify-between rounded-md bg-neutral-200 p-4'>
				<div>Invalid expense id.</div>
				<Link to='..' className='hover:underline'>
					Close
				</Link>
			</div>
		)
	}
	
	const defaultValues = expenseData
		? {
				title: expenseData.title,
				amount: expenseData.amount,
				date: expenseData.date
		  }
		: {
				title: '',
				amount: '',
				date: ''
		  }

	const isSubmitting = navigation.state !== 'idle'

	return (
		<div className='flex flex-col gap-4'>
			{validationErrors && (
				<ul className='flex flex-col gap-4 md:flex-row lg:flex-col'>
					{Object.values(validationErrors).map((error, index) => (
						<li
							className='w-full rounded-md bg-red-400 p-2 text-white'
							key={index}
						>
							{error as string}
						</li>
					))}
				</ul>
			)}
			<Form
				method={expenseData ? 'patch' : 'post'}
				className='grid max-h-64 grid-cols-2 gap-4 rounded-md bg-neutral-200 p-4'
			>
				<div className='col-span-2 flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring'>
					<label
						htmlFor='title'
						className='whitespace-nowrap border-r border-neutral-400 py-2 px-3'
					>
						Title:
					</label>
					<input
						type='text'
						id='title'
						name='title'
						maxLength={16}
						required
						defaultValue={defaultValues.title}
						className='w-full rounded-r-md bg-neutral-200 p-2 outline-none'
					/>
				</div>
				<div className='col-span-2 flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring'>
					<label
						htmlFor='amount'
						className='z-10 whitespace-nowrap border-r border-neutral-400 py-2 px-3 after:absolute after:-right-4 after:content-["€"]'
					>
						Amount:
					</label>
					<input
						type='number'
						id='amount'
						name='amount'
						max={999999}
						min='0'
						step='0.01'
						required
						defaultValue={defaultValues.amount}
						className='w-full rounded-r-md bg-neutral-200 p-2 pl-4 outline-none'
					/>
				</div>
				<div className='col-span-2 flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring '>
					<label
						htmlFor='date'
						className='whitespace-nowrap border-r border-neutral-400 py-2 px-3'
					>
						Date:
					</label>
					<input
						type='date'
						id='date'
						name='date'
						max={today}
						required
						defaultValue={
							defaultValues.date ? defaultValues.date.slice(0, 10) : ''
						}
						className='w-full rounded-r-md bg-neutral-200 p-2 outline-none'
					/>
				</div>
				<div className='col-span-2 flex gap-4 sm:col-span-1 sm:col-end-3'>
					<Link
						to='..'
						className='w-full rounded-md border-2 border-black  p-2 text-center font-bold  '
					>
						Cancel
					</Link>
					<button
						disabled={isSubmitting}
						className='w-full rounded-md border-2 border-black bg-neutral-900 p-2 text-center font-bold text-white drop-shadow-md'
					>
						{isSubmitting ? 'Saving...' : 'Save'}
					</button>
				</div>
			</Form>
		</div>
	)
}
