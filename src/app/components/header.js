'use client'
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Login from "./Login"
import { isAuthenticated, logout } from '../services/auth'

const navItems = ["SHOP", "SKILLS", "STORE", "ABOUT", "CONTACT US"]

export default function Header() {
    const [showLogin, setShowLogin] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [showUserMenu, setShowUserMenu] = useState(false)
    const userMenuRef = useRef(null)

    useEffect(() => {
        setIsAuth(isAuthenticated())

        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setShowUserMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleAuthAction = () => {
        if (!isAuth) {
            setShowLogin(true)
        } else {
            logout()
            setIsAuth(false)
        }
        setShowUserMenu(false)
    }

    return (
        <>
            <header className="py-8 border-bottom-gray">
                <div className="flex flex-col w-full container">
                    <div className="flex justify-between mb-10">
                        <div className="items-center flex">
                            <Image
                                src="/icons/Logo.svg"
                                alt="App logo"
                                width={36}
                                height={36}
                                priority
                            />
                        </div>
                        <div>
                            <span className="fs-36 font-bolder text-center">LOGO</span>
                        </div>
                        <div className="icons flex justify-between gap-6 items-center">
                            <div>
                                <Image
                                    src="/icons/search-normal.svg"
                                    alt="Search"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <div>
                                <Image
                                    src="/icons/heart.svg"
                                    alt="Wishlisted"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <div>
                                <Image
                                    src="/icons/shopping-bag.svg"
                                    alt="Cart"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <div className="relative" ref={userMenuRef}>
                                <button 
                                    className="flex items-center gap-2 hover:opacity-80"
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                >
                                    <Image
                                        src="/icons/profile.svg"
                                        alt="Profile"
                                        width={16}
                                        height={16}
                                    />
                                    <Image
                                        src="/icons/arrow-down.svg"
                                        alt="Toggle menu"
                                        width={16}
                                        height={16}
                                        className={`transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {showUserMenu && (
                                    <div className="auth-dropdown">
                                        <button 
                                            className="auth-dropdown-item"
                                            onClick={handleAuthAction}
                                        >
                                            {isAuth ? 'Logout' : 'Login'}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="gap-[5px] flex items-center">
                                <span className="font-bold">ENG</span>
                                <Image
                                    className=""
                                    src="/icons/arrow-down.svg"
                                    alt="dropdown icon"
                                    width={16}
                                    height={16}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="flex items-center justify-center gap-16 w-full">
                            {navItems.map((item, idx) => (
                                <span key={idx} className="font-bold text-xl">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {showLogin && (
                <Login 
                    onClose={() => setShowLogin(false)} 
                    onSuccess={() => {
                        setIsAuth(true)
                        setShowLogin(false)
                    }} 
                />
            )}
        </>
    )
}