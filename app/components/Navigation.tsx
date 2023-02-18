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
		to: '/auth/login',
		name: 'Login',
		protected: false,
		icon: RiAccountCircleFill
	}
]

export default function Navigation({
	mobileNav,
	setMobileNav
}: {
	mobileNav: boolean
	setMobileNav: any
}) {
	let defaultClassesLink: string = 'flex items-center gap-2 p-2 my-1 text-lg'

	return (
		<nav className={`${!mobileNav && 'hidden md:block'} `}>
			<ul>
				{NavLinks.map((item, index) => (
					<li key={index} className={`${item.protected && 'hidden'}`}>
						<NavLink
							to={item.to}
							className={({ isActive }) =>
								isActive
									? `rounded-md bg-neutral-300 font-medium ${defaultClassesLink}`
									: `font-medium ${defaultClassesLink}`
							}
							onClick={() => {
								!mobileNav ? setMobileNav(true) : setMobileNav(false)
							}}
						>
							{<item.icon />}
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
