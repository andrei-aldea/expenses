const ChartBar = ({
	maxValue,
	value,
	label
}: {
	maxValue: number
	value: number
	label: string
}) => {
	let barFillHeight = '0%'

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + '%'
	}

	return (
		<div className='hover:scale-105'>
			<div className='flex h-28 flex-col justify-end rounded-md bg-neutral-300 '>
				<div
					className='rounded-md bg-black'
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className='mt-0.5'>{label}</div>
		</div>
	)
}

export default ChartBar
