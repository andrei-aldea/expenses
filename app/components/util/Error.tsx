import { ReactNode } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

export default function Error({
	title,
	children
}: {
	title?: string
	children: ReactNode
}) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<h2 className='text-xl font-bold'>{title}</h2>
				<RiErrorWarningFill size={20}/>
			</div>
			{children}
		</div>
	)
}
