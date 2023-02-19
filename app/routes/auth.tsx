import AuthForm from '~/components/auth/AuthForm'

export default function AuthPage() {
	return (
		<section className='grid grid-cols-3 gap-4'>
			<AuthForm />
			<div className='col-span-3 h-full w-full rounded-md bg-neutral-200 p-4 font-bold sm:col-span-1'>
				Use an account in order to use the dashboard and all of it's features
			</div>
		</section>
	)
}
