import { NavLink } from '@remix-run/react'

export interface NavItem {
	to: string
	name: string
}

const NavLinks: Array<NavItem> = [
	{
		to: '/',
		name: 'Home'
	},
	{
		to: 'auth',
		name: 'Login'
	}
]

export default function Navigation() {
	return (
		<nav>
			<ul className='hidden md:flex h-screen bg-neutral-200 p-6 flex-col gap-4'>
				{NavLinks.map((item, index) => (
					<li key={index} className='w-40'>
						<NavLink
							to={item.to}
							className={({ isActive }) =>
								isActive ? 'bg-neutral-300 rounded-md p-2' : 'p-2'
							}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
