type expenseValidationErrors = {
	title?: string
	amount?: string
	date?: string
}
type userValidationErrors = {
	email?: string
	password?: string
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
	let validationErrors: expenseValidationErrors = {}

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

function isValidEmail(value: string) {
	return value && value.includes('@')
}

function isValidPassword(value: string) {
	return value && value.trim().length >= 7
}

export function validateCredentials(email: string, password: string) {
	let validationErrors: userValidationErrors = {}

	if (!isValidEmail(email)) {
		validationErrors.email = 'Invalid email address.'
	}

	if (!isValidPassword(password)) {
		validationErrors.password =
			'Invalid password. Must be at least 7 characters long.'
	}

	if (Object.keys(validationErrors).length > 0) {
		throw validationErrors
	}
}
