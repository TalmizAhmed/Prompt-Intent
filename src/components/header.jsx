import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const menuItems = [
    { name: 'About', href: '#content' },
    { name: 'Features', href: '#features' },
    { name: 'Getting Started', href: '#how-it-works' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <header>
            <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2">
                <div
                    className={cn(
                        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                        isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
                    )}>
                    <div
                        className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a href="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu
                                    className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X
                                    className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Show title when button is not visible */}
                        <div
                            className={cn(
                                "hidden lg:block text-foreground font-medium transition-opacity duration-300",
                                !isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                            )}>
                            Prompt Intent
                        </div>

                        {/* Show button when scrolled */}
                        <div
                            className={cn(
                                "bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent transition-opacity duration-300",
                                isScrolled ? "hidden lg:flex" : "hidden"
                            )}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <div className="flex flex-col items-center gap-1">
                                    <Button size="sm" disabled className="cursor-not-allowed">
                                        <svg 
                                            className="size-4" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24">
                                            <path 
                                                fill="currentColor" 
                                                d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0M1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016c6.627 0 12-5.373 12-12c0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728a4.364 4.364 0 0 1 0 8.728"></path>
                                        </svg>
                                        <span>Get Chrome Extension</span>
                                    </Button>
                                    <span className="text-muted-foreground text-xs">Coming Soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
