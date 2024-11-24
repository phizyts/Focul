'use client'
import Image from 'next/image'
import {
	SidebarNavigationTop,
	SidebarNavigationBottom,
} from './SidebarNavigation'
import { authClient } from '@/lib/auth-client'
import { useState } from 'react'

const Sidebar = () => {
	const { data: session, isPending } = authClient.useSession()
	const [isCollapsed, setIsCollapsed] = useState(false)

	return (
		<nav
			className={`flex flex-col h-full border-r border-gray-600 transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[300px] mr-8'}`}
		>
			<div className="pt-8 pb-12 px-8 w-full">
				<div
					className={`flex ${isCollapsed ? 'justify-center px-2' : 'justify-between'} items-center`}
				>
					{!isCollapsed && (
						<div
							className={`flex items-center gap-2 transition-opacity duration-300`}
						>
							<Image src="/logo.png" alt="Logo" width={24} height={24} />
							<span className="text-2xl font-semibold text-white">Oxcel</span>
						</div>
					)}
					<i
						onClick={() => setIsCollapsed(!isCollapsed)}
						className={`ri-menu-line ri-xl h-[32px] flex justify-center items-center text-muted cursor-pointer hover:text-white duration-200`}
					></i>
				</div>
			</div>
			<div className={`flex-1 overflow-y-auto ${isCollapsed ? '' : 'pr-4'}`}>
				<SidebarNavigationTop isCollapsed={isCollapsed} />
			</div>
			<div className={`flex flex-col ${isCollapsed ? 'px-2' : 'px-4 pt-4'}`}>
				<SidebarNavigationBottom isCollapsed={isCollapsed} />
				{isPending || !session ? (
					<div
						className={`flex justify-between items-center cursor-pointer py-3 hover:bg-[#1F2324] mt-4 p-2 mb-5 rounded-lg ${isCollapsed ? 'px-2' : 'px-4'}`}
					>
						<div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
						<div
							className={`flex flex-col gap-2 ${isCollapsed ? 'hidden' : ''}`}
						>
							<span className="h-[20px] w-24 bg-gray-700 rounded animate-pulse"></span>
							<span className="h-[16px] w-[150px] bg-gray-700 rounded animate-pulse"></span>
						</div>
						<i
							className={`ri-expand-up-down-line text-muted ri-lg ${isCollapsed ? 'hidden' : ''}`}
						></i>
					</div>
				) : (
					<div
						className={`flex items-center cursor-pointer py-3 hover:bg-[#1F2324] mt-4 p-2 mb-5 rounded-lg ${isCollapsed ? 'px-2 justify-center' : 'px-4 justify-between'}`}
					>
						<Image
							src={session?.user?.image as string}
							alt="Profile"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div className={`flex flex-col ${isCollapsed ? 'hidden' : ''}`}>
							<span className="text-white">{session?.user?.name}</span>
							<span className="text-muted text-sm w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
								{session?.user?.email}
							</span>
						</div>
						<i
							className={`ri-expand-up-down-line text-muted ri-lg ${isCollapsed ? 'hidden' : ''}`}
						></i>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Sidebar
