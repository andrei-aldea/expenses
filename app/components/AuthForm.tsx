export default function AuthForm() {
	return (
		<form method='post' id='auth-form'>
			<h2 className='text-2xl font-bold'>Log In</h2>
			<div className='group my-6 flex flex-col border border-white border-b-black py-1'>
				<input
					required
					type='email'
					name='email'
					placeholder=''
					className='outline-none'
				/>
				<label
					htmlFor='email'
					className='absolute origin-[0%] text-lg duration-300 group-focus-within:-translate-y-7 group-focus-within:scale-75'
				>
					Email
				</label>
			</div>
			<div className='group my-6 flex flex-col border border-white border-b-black py-1'>
				<input
					required
					type='password'
					name='password'
					id='password'
					minLength={7}
					placeholder=''
					className='outline-none'
				/>
				<label
					htmlFor='password'
					className='absolute origin-[0%] text-lg duration-300 group-focus-within:-translate-y-7 group-focus-within:scale-75'
				>
					Password
				</label>
			</div>
			<button
				type='submit'
				className='group mb-2 flex w-full items-center justify-center space-x-2 overflow-hidden rounded-md border border-black p-2 font-bold text-black hover:text-white'
			>
				<div className='group-hover:next-btn absolute top-0 left-0 h-full w-full translate-y-full bg-black duration-300 group-hover:translate-y-0'></div>
				<span>Next</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-7 group-hover:stroke-white'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='#000000'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
					<line x1='5' y1='12' x2='19' y2='12'></line>
					<line x1='13' y1='18' x2='19' y2='12'></line>
					<line x1='13' y1='6' x2='19' y2='12'></line>
				</svg>
			</button>
			<a href='/auth'>Or sign up with an existing account</a>
		</form>
	)
}
