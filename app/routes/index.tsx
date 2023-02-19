export default function IndexPage() {
	return (
		<>
			<div className='text-2xl font-bold'>Home</div>
			<section className='rounded-md bg-neutral-200 p-4'>
				<div className='font-semibold'>Manage your expenses in one place.</div>
				<div className='m-2 mb-0 rotate-6 scale-90 rounded-md bg-white p-2 ring ring-amber-600'>
					<img src='images/dashboard.png' alt='A demo dashboard' />
				</div>
				<div className='font-semibold'>Detailed Analytics.</div>
			</section>
			<section className='rounded-md bg-neutral-200 p-4'>
				<div className='font-semibold'>Create an account.</div>
				<div className='font-semibold'>Your credentials are safe.</div>
			</section>
		</>
	)
}
