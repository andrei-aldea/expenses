import { Link } from '@remix-run/react'
import { RiCloseFill, RiEdit2Fill } from 'react-icons/ri'

export default function ListItem({
	id,
	title,
	amount
}: {
	id: string
	title: string
	amount: number
}) {
	function deleteItemHandler() {
		// tbd
	}

	return (
		<>
			<div className='flex items-center gap-3'>
				<span className='font-bold'>{title}</span>
				<span className='text-sm'>€{amount.toFixed(2)}</span>
			</div>
			<menu className='flex gap-1 text-neutral-400 md:hidden md:group-hover/item:flex'>
				<Link
					to={id}
					className='active:bg-bg-neutral-900 rounded-full p-1 hover:bg-neutral-900 hover:text-white  active:text-white'
				>
					<RiEdit2Fill size={16} />
				</Link>
				<button
					onClick={deleteItemHandler}
					className='rounded-full p-1 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white'
				>
					<RiCloseFill size={16} />
				</button>
			</menu>
		</>
	)
}
