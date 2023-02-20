import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import Form from '~/components/dashboard/Form'
import { deleteExpense, updateExpense } from '~/data/expenses.server'
import { validateExpenseInput } from '~/data/validation.server'

export default function IndividualPage() {
	return <Form />
}

export async function action({ params, request }: ActionArgs) {
	const expenseId = params.id as string

	if (request.method === 'PATCH') {
		const formData = await request.formData()
		let title = formData.get('title')! as string
		let amount = Number(formData.get('amount')! as string)
		let date = formData.get('date')! as string

		try {
			validateExpenseInput(title, amount, date)
		} catch (error) {
			return error
		}

		await updateExpense(expenseId, title, amount, date)
		return redirect('/expenses')
	} else if (request.method === 'DELETE') {
		await deleteExpense(expenseId)
		return { deletedId: expenseId }
	}
}
