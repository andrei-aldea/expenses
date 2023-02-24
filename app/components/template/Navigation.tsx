import { Form, NavLink, useLoaderData } from '@remix-run/react'
import {
	RiAccountCircleFill,
	RiBarChart2Fill,
	RiHome2Fill,
	RiLogoutBoxFill
} from 'react-icons/ri'
import { getUserFromSession } from '~/data/auth.server'

export default function Navigation({
	mobileNav,
	setMobileNav
}: {
	mobileNav: boolean
	setMobileNav: any
}) {
	const userId = useLoaderData()
	return (
		<nav className={`${!mobileNav && 'hidden md:block'} `}>
			<ul>
				<li>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							isActive
								? 'my-1 flex items-center gap-2 rounded-md bg-neutral-300 p-2 text-lg font-medium'
								: 'my-1 flex items-center gap-2 p-2 text-lg font-medium'
						}
						onClick={() => {
							!mobileNav ? setMobileNav(true) : setMobileNav(false)
						}}
					>
						<RiHome2Fill />
						Home
					</NavLink>
				</li>
				{userId && (
					<li>
						<NavLink
							to={'/dashboard'}
							className={({ isActive }) =>
								isActive
									? 'my-1 flex items-center gap-2 rounded-md bg-neutral-300 p-2 text-lg font-medium'
									: 'my-1 flex items-center gap-2 p-2 text-lg font-medium'
							}
							onClick={() => {
								!mobileNav ? setMobileNav(true) : setMobileNav(false)
							}}
						>
							<RiBarChart2Fill />
							Dashboard
						</NavLink>
					</li>
				)}
				{!userId && (
					<li>
						<NavLink
							to={'/auth'}
							className={({ isActive }) =>
								isActive
									? 'my-1 flex items-center gap-2 rounded-md bg-neutral-300 p-2 text-lg font-medium'
									: 'my-1 flex items-center gap-2 p-2 text-lg font-medium'
							}
							onClick={() => {
								!mobileNav ? setMobileNav(true) : setMobileNav(false)
							}}
						>
							<RiAccountCircleFill />
							Login
						</NavLink>
					</li>
				)}
				{userId && (
					<Form method='post' action='/logout'>
						<li>
							<button
								className='my-1 flex items-center gap-2 p-2 text-lg font-medium'
								onClick={() => {
									!mobileNav ? setMobileNav(true) : setMobileNav(false)
								}}
							>
								<RiLogoutBoxFill />
								Logout
							</button>
						</li>
					</Form>
				)}
			</ul>
		</nav>
	)
}
