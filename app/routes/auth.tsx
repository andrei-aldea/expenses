import type { ActionArgs } from '@remix-run/node'
import AuthForm from '~/components/auth/AuthForm'
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
	let email = formData.get('title')! as string
	let password = formData.get('title')! as string

	try {
		validateCredentials(email, password)
	} catch (error) {
		return error
	}

	if (authMode === 'login') {
		// login logic
	} else {
		// signup logic (create user)
	}
}

export function meta() {
	return {
		title: 'Authentification',
		'og:title': 'Authentification'
	}
}
