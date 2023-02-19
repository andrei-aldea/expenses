import { NavLink } from '@remix-run/react'
import type { IconType } from 'react-icons'
import {
	RiAccountCircleFill,
	RiBarChart2Fill,
	RiHome2Fill,
	RiLogoutBoxFill
} from 'react-icons/ri'

export interface NavItem {
	to: string
	name: string
	show: boolean
	icon: IconType
}

const show: boolean = true

const NavLinks: Array<NavItem> = [
	{
		to: '/',
		name: 'Home',
		show: true,
		icon: RiHome2Fill
	},
	{
		to: '/dashboard',
		name: 'Dashboard',
		show: show,
		icon: RiBarChart2Fill
	},
	{
		to: '/auth?mode=login',
		name: 'Login',
		show: show,
		icon: RiAccountCircleFill
	},
	{
		to: '/logout',
		name: 'Logout',
		show: show,
		icon: RiLogoutBoxFill
	}
]

export default function Navigation({
	mobileNav,
	setMobileNav
}: {
	mobileNav: boolean
	setMobileNav: any
}) {
	return (
		<nav className={`${!mobileNav && 'hidden md:block'} `}>
			<ul>
				{NavLinks.map((item, index) => (
					<li key={index} className={`${!item.show && 'hidden'}`}>
						<NavLink
							to={item.to}
							className={({ isActive }) =>
								isActive
									? 'my-1 flex items-center gap-2 rounded-md bg-neutral-300 p-2 text-lg font-medium'
									: 'my-1 flex items-center gap-2 p-2 text-lg font-medium'
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
