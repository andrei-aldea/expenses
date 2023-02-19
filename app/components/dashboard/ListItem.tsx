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
		<article className='group/item active flex items-center justify-between rounded-md p-2 hover:bg-neutral-100'>
			<div className='flex items-center gap-3'>
				<span className='max-w-[9rem] font-bold'>{title}</span>
				<span className='text-sm'>€{amount.toFixed(2)}</span>
			</div>
			<menu className='flex gap-1 text-neutral-400 md:hidden md:group-hover/item:flex'>
				<Link
					to={id}
					className='rounded-md px-1 hover:bg-black hover:text-white active:bg-black active:text-white'
				>
					<RiEdit2Fill size={20} />
				</Link>
				<button
					onClick={deleteItemHandler}
					className='rounded-md px-1 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white'
				>
					<RiCloseFill size={20} />
				</button>
			</menu>
		</article>
	)
}
