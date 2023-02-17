import { NavLink } from '@remix-run/react'
import type { IconType } from 'react-icons'
import {
	RiAccountCircleFill,
	RiBarChart2Fill,
	RiHome2Fill
} from 'react-icons/ri'

export interface NavItem {
	to: string
	name: string
	protected: boolean
	icon: IconType
}
const NavLinks: Array<NavItem> = [
	{
		to: '/',
		name: 'Home',
		protected: false,
		icon: RiHome2Fill
	},
	{
		to: '/dashboard',
		name: 'Dashboard',
		protected: false,
		icon: RiBarChart2Fill
	},
	{
		to: 'auth',
		name: 'Login',
		protected: false,
		icon: RiAccountCircleFill
	}
]

export default function Navigation() {
	let defaultClassesLink: string = 'flex items-center gap-2 p-2 text-lg'

	return (
		<nav>
			<ul className='fixed hidden h-screen flex-col gap-5 border-r border-neutral-300 bg-neutral-200 p-6 drop-shadow-md md:flex'>
				<li className=' mb-4 select-none text-4xl font-semibold'>
					E
					<span className='bg-gradient-to-r from-black to-amber-600 bg-clip-text text-transparent'>
						xpenses
					</span>
				</li>
				{NavLinks.map((item, index) => (
					<li key={index} className={`${item.protected && 'hidden'}`}>
						<NavLink
							to={item.to}
							className={({ isActive }) =>
								isActive
									? `rounded-md bg-neutral-300 font-bold ${defaultClassesLink}`
									: `font-medium ${defaultClassesLink}`
							}
						>
							<>
								{<item.icon />}
								{item.name}
							</>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
