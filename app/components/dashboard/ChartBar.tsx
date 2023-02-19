export default function ChartBar({
	maxValue,
	value,
	label
}: {
	maxValue: number
	value: number
	label: string
}) {
	let barFillHeight = '0%'

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + '%'
	}

	return (
		<div>
			<div className='flex h-20 flex-col justify-end rounded-md bg-neutral-300 sm:h-28 md:h-36'>
				<div
					className='min-w-[1rem] rounded-md bg-black sm:min-w-[2rem]'
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className='mt-0.5'>
				<span className='hidden sm:block'>{label}</span>
				<span className='sm:hidden'>{label.charAt(0)}</span>
			</div>
		</div>
	)
}
