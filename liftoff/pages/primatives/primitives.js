
import {Button} from "@/components/ui/button";
import Link from "next/link";




export default function Home() {
    return ( <>
            <main className={`flex flex-col row-auto gap-4 items-center justify-between p-24 `}>
                <h1 className='text-2xl text-primary font-bold '> Welcome to Liftoff-UI</h1>
<div className='bg-card rounded-md w-1/2'>
    <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
                <Link href="/primatives/accordion">
                    <Button>Accordion</Button>
                </Link>
                <Link href="/primatives/buttons">
                    <Button>Buttons</Button>
                </Link>
                <Link href="/primatives/checkbox">
                <Button>Check Box</Button>
            </Link>
                <Link href="/primatives/collapsible">
                <Button>Collapsable</Button>
            </Link>
    </div>
    <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
                <Link href="/primatives/input">
                    <Button>Inputs</Button>
                </Link>
                <Link href="/primatives/radiogroup">
                    <Button>Radios</Button>
                </Link>

                <Link href="/primatives/textarea">
                    <Button>Text Area</Button>
                </Link>

                <Link href="/primatives/navmenu">
                    <Button>Navigation Menu</Button>
                </Link>
    </div>
    <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
                <Link href="/primatives/dropmenu">
                    <Button>Dropdown Menu</Button>
                </Link>
                <Link href="/primatives/tabs">
                    <Button>Tabs</Button>
                </Link>
</div>
</div>


            </main>
        </>
    )
}
