import type { ActionArgs } from '@remix-run/node'
import AuthForm from '~/components/auth/AuthForm'
import { login, signup } from '~/data/auth.server'
import { validateCredentials } from '~/data/validation.server'

export default function AuthPage() {
	return (
		<section className='grid grid-cols-3 gap-4'>
			<AuthForm />
		</section>
	)
}

export async function action({ request }: ActionArgs) {
	const searchParams = new URL(request.url).searchParams
	const authMode = searchParams.get('mode') || 'login'

	const formData = await request.formData()
	let email = formData.get('email')! as string
	let password = formData.get('password')! as string

	try {
		validateCredentials(email, password)
	} catch (error) {
		return error
	}

	try {
		if (authMode === 'login') {
			return await login(email, password)
		} else {
			return await signup(email, password)
		}
	} catch (error: any) {
		if (error.status === 422) {
			return { credentials: error.message }
		}
	}
}

export function meta() {
	return {
		title: 'Expenses | Authentification'
	}
}
