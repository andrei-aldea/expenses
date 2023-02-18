import { Outlet } from '@remix-run/react'

export default function ExpensesPage() {
	return (
		<>
			<div className='text-2xl font-bold'>Dashboard</div>
			<section className='h-96 w-full rounded-md bg-neutral-300'></section>
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
			<Outlet />
		</>
	)
}
