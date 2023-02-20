type validationErrors = {
	title?: string
	amount?: string
	date?: string
}
function isValidTitle(value: string) {
	return value && value.trim().length > 0 && value.trim().length <= 16
}

function isValidAmount(value: number) {
	const amount = parseFloat(value.toString())
	return !isNaN(amount) && amount > 0
}

function isValidDate(value: string) {
	return value && new Date(value).getTime() < new Date().getTime()
}

export function validateExpenseInput(
	title: string,
	amount: number,
	date: string
) {
	let validationErrors: validationErrors = {}

	if (!isValidTitle(title)) {
		validationErrors.title =
			'Invalid expense title. Must be at most 16 characters long.'
	}

	if (!isValidAmount(amount)) {
		validationErrors.amount =
			'Invalid amount. Must be a number greater than zero.'
	}

	if (!isValidDate(date)) {
		validationErrors.date = 'Invalid date. Must be a date before today.'
	}

	if (Object.keys(validationErrors).length > 0) {
		throw validationErrors
	}
}
