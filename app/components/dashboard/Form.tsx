import { Link } from '@remix-run/react'

export default function Form() {
	const today = new Date().toISOString().slice(0, 10) // yields something like 2023-09-10

	return (
		<form
			method='post'
			className='grid max-h-64 grid-cols-2 gap-4 rounded-md bg-neutral-200 p-4'
			id='expense-form'
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
					className='w-full rounded-r-md bg-neutral-200 p-2 outline-none'
					required
					maxLength={16}
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
				<button className='w-full rounded-md border-2 border-black bg-neutral-900 p-2 text-center font-bold text-white drop-shadow-md'>
					Save
				</button>
			</div>
		</form>
	)
}
