import { Outlet, useCatch, useLoaderData } from '@remix-run/react'
import Chart from '~/components/dashboard/Chart'
import List from '~/components/dashboard/List'
import Statistics from '~/components/dashboard/Statistics'
import Error from '~/components/util/Error'
import { requireUserSession } from '~/data/auth.server'
import { getExpenses } from '~/data/expenses.server'

export default function DashboardPage() {
	const expenses = useLoaderData()

	return (
		<>
			<div className='text-2xl font-bold'>Dashboard</div>
			<Chart expenses={expenses} />
			<Statistics expenses={expenses} />
			<section className='grid gap-4 lg:grid-cols-2'>
				<List expenses={expenses} />
				<Outlet />
			</section>
		</>
	)
}

export async function loader({ request }: { request: Request }) {
	const userId = await requireUserSession(request)

	const expenses = await getExpenses(userId)
	return expenses
}
export function meta() {
	return {
		title: 'Expenses | Dashboard'
	}
}

export function CatchBoundary() {
	const caughtResponse = useCatch()

	return (
		<main>
			<Error title={caughtResponse.statusText}>
				<p>
					{caughtResponse.data?.message ||
						'Something went wrong - could not load expenses.'}
				</p>
			</Error>
		</main>
	)
}
