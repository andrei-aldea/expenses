import type { Expense } from '~/routes/dashboard'
import ChartBar from './ChartBar'

function Chart({ expenses }: { expenses: Array<Expense> }) {
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 70 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 20 }
	]

	for (const expense of expenses) {
		const expenseMonth = new Date(expense.date).getMonth()
		chartDataPoints[expenseMonth].value += expense.amount
	}

	const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value)
	const totalMaximum = Math.max(...dataPointValues)

	return (
		<section>
			<ul className='grid grid-cols-4 justify-items-center gap-3 rounded-md border-2 bg-neutral-200 p-4 sm:grid-cols-12'>
				{chartDataPoints.map((dataPoint) => (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={totalMaximum}
						label={dataPoint.label}
					/>
				))}
			</ul>
		</section>
	)
}

export default Chart
