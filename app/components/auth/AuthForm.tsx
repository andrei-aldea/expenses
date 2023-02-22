import { Form, Link, useNavigation, useSearchParams } from '@remix-run/react'

export default function AuthForm() {
	const [searchParams] = useSearchParams()
	const authMode = searchParams.get('mode') || 'login'
	const navigation = useNavigation()
	const isSubmitting = navigation.state !== 'idle'

	const submitBtnCaption =
		authMode == 'login' ? 'Go to Sign Up' : 'Go back to Log In'
	return (
		<>
			<h2 className='col-span-3 text-2xl font-bold '>
				{authMode == 'login' ? 'Log In' : 'Sign Up'}
			</h2>
			<Form
				method='post'
				id='auth-form'
				className=' col-span-3 space-y-4 rounded-md bg-neutral-200 p-4 sm:col-span-2 '
			>
				<div className='flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring'>
					<label
						htmlFor='email'
						className='border-r border-neutral-400 py-2 px-3'
					>
						Email:
					</label>
					<input
						required
						type='email'
						name='email'
						id='email'
						placeholder=''
						className='w-full rounded-r-md bg-neutral-200 p-2 outline-none'
					/>
				</div>
				<div className='flex rounded-md border-[3px] border-black bg-neutral-300 ring-amber-600 focus-within:ring'>
					<label
						htmlFor='password'
						className='border-r border-neutral-400 py-2 px-3'
					>
						Password:
					</label>
					<input
						required
						type='password'
						name='password'
						id='password'
						minLength={7}
						placeholder=''
						className='w-full rounded-r-md bg-neutral-200 p-2 outline-none'
					/>
				</div>
				<div className='flex gap-4'>
					<button
						disabled={isSubmitting}
						type='submit'
						className='mb-2 flex w-full items-center justify-center space-x-1 rounded-md  border-2 border-black bg-neutral-900 p-2 font-bold text-white drop-shadow-md'
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
					<Link
						to={authMode === 'login' ? '?mode=signup' : '?mode=login'}
						className='text-center underline underline-offset-2 hover:text-neutral-500'
					>
						{isSubmitting ? 'Authenticating...' : submitBtnCaption}
					</Link>
				</div>
			</Form>
		</>
	)
}
