import { Outlet } from '@remix-run/react'

export default function ExpensesPage() {
	return (
		<main className='grid w-full grid-cols-2 gap-4 p-10 md:ml-52'>
			<div className='col-span-2 text-2xl font-bold'>Dashboard</div>
			<section className='col-span-2 h-96 w-full rounded-md bg-neutral-300'></section>
			<ul className='flex flex-col gap-4'>
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
			<Outlet />
		</main>
	)
}
