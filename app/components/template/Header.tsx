import { useState } from 'react'
import Navigation from '~/components/Navigation'

export default function Header() {
	const [mobileNav, setMobileNav] = useState(false)

	return (
		<header
			className={`${
				mobileNav ? 'bg-neutral-200 ' : 'bg-white pb-0 '
			} border-m fixed z-10 w-screen flex-col gap-5 border-neutral-300 p-4 drop-shadow-md md:flex md:h-screen md:w-auto md:border-r md:bg-neutral-200`}
		>
			<div className=' mb-4 select-none text-4xl font-semibold'>
				E
				<span className='bg-gradient-to-r from-black to-amber-600 bg-clip-text text-transparent'>
					xpenses
				</span>
			</div>
			<Navigation mobileNav={mobileNav} setMobileNav={setMobileNav} />
			<button
				onClick={() => {
					!mobileNav ? setMobileNav(true) : setMobileNav(false)
				}}
				type='button'
				className={`${
					mobileNav && 'open'
				} absolute top-7 right-5 h-5 w-6 cursor-pointer transition-all duration-300 focus:outline-none md:hidden`}
			>
				<span className='hamburger-top'></span>
				<span className='hamburger-middle'></span>
				<span className='hamburger-bottom'></span>
			</button>
		</header>
	)
}
