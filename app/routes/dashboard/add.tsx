import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import Form from '~/components/dashboard/Form'
import { addExpense } from '~/data/expenses.server'
import { validateExpenseInput } from '~/data/validation.server'

export default function AddPage() {
	return <Form />
}

export async function action({ request }: ActionArgs) {
	const formData = await request.formData()
	let title = formData.get('title')! as string
	let amount = Number(formData.get('amount')! as string)
	let date = formData.get('date')! as string

	try {
		validateExpenseInput(title, amount, date)
	} catch (error) {
		return error
	}

	await addExpense(title, amount, date)
	return redirect('/dashboard')
}
