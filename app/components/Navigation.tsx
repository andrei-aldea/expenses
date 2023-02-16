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
			<ul className='hidden h-screen flex-col gap-5 border-r border-neutral-300 bg-neutral-200 p-6 drop-shadow-md md:flex'>
				<li className=' select-none text-4xl font-semibold'>
					E
					<span className='bg-gradient-to-r from-black to-amber-600 bg-clip-text text-transparent'>
						xpenses
					</span>
				</li>
				{NavLinks.map((item, index) => (
					<li key={index}>
						<NavLink
							to={item.to}
							className={({ isActive }) =>
								isActive
									? 'rounded-md bg-neutral-300 p-2 text-lg font-bold'
									: 'p-2 text-lg font-medium'
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
