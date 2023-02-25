export default function Footer() {
	return (
		<footer className='mt-6 flex items-center gap-4 text-sm'>
			<div>© 2023 - All rights reserved</div>
			<a
				href='https://github.com/fn7x/expenses'
				target='_blank'
				rel='noreferrer'
			>
				<img src='images/github.png' alt='GitHub Icon' className='h-6' />
			</a>
		</footer>
	)
}
