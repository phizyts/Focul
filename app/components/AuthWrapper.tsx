'use client'
import { usePathname, useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import { Loading } from '../../components/ui/Loading'
import { isAuthenticated, onBoarded } from '@/lib/authHelpers'

interface Props {
	children: React.ReactNode
}

interface AuthContextType {
	isAuthing: boolean
	setIsAuthing: (authStatus: boolean) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthWrapper({ children }: Props) {
	const router = useRouter()
	const pathname = usePathname()
	const [isAuthing, setIsAuthing] = useState(true)

	useEffect(() => {
		if (typeof window === 'undefined') return

		const checkAuth = async () => {
			const isLoggedIn = await isAuthenticated()
			const isOnBoarded = await onBoarded()

			if (isLoggedIn) {
				if (!isOnBoarded && pathname !== '/onboarding') {
					router.push('/onboarding')
					return
				}
				setIsAuthing(false)
			} else {
				if (pathname !== '/auth/login' && pathname !== '/auth/signup') {
					router.push('/auth/login')
					return
				}
				setIsAuthing(false)
			}
		}

		checkAuth()
	}, [router, pathname])

	if (isAuthing) {
		return <Loading />
	}

	return (
		<AuthContext.Provider value={{ isAuthing, setIsAuthing }}>
			{children}
		</AuthContext.Provider>
	)
}
