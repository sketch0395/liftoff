import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function navMenu() {
    return (
        <>
            <main className={`flex flex-col row-auto gap-4 items-center justify-between p-24 `}>
                <h1 className='text-2xl text-primary font-bold'> Navigation Menu</h1>
                <h2 className='text-lg text-red-600 font-black'>This component is broken please see readme doc</h2>
                <div className='bg-card rounded-md w-1/2'>
                    <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    </div>
                </div>
            </main>
        </>
    )
}