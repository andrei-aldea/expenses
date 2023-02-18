export default function AuthForm({ method }: { method: string }) {
	return (
		<form method='post' id='auth-form' className='max-w-xs'>
			<h2 className='text-2xl font-bold'>
				{method == 'login' ? 'Log In' : 'Sign Up'}
			</h2>
			<div className='group my-6 flex flex-col border border-white border-b-black py-1'>
				<input
					required
					type='email'
					name='email'
					id='email'
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
			<div className='flex gap-4'>
				<button
					type='submit'
					className='mb-2 flex w-full items-center justify-center space-x-1 rounded-md  border-2 border-black bg-neutral-900 p-2 font-bold text-white drop-shadow-md '
				>
					<span>Next</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-5 group-hover:stroke-white'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#fff'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<line x1='5' y1='12' x2='19' y2='12'></line>
						<line x1='13' y1='18' x2='19' y2='12'></line>
						<line x1='13' y1='6' x2='19' y2='12'></line>
					</svg>
				</button>
			</div>
			<div className='flex w-full justify-center'>
				<a
					className='text-center underline underline-offset-2 hover:text-neutral-500'
					href={method != 'login' ? '/auth/login' : '/auth/signup'}
				>
					{method != 'login' ? 'Go back to Log In' : 'Go to Sign Up'}
				</a>
			</div>
		</form>
	)
}
