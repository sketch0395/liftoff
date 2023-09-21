
import {Button} from "@/components/ui/button";
import Link from "next/link";




export default function Home() {
  return ( <>
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
<h1 className='text-2xl text-secondary font-bold '> Welcome to Liftoff-UI</h1>

        <Link href="/primatives/buttons">
            <Button>Buttons</Button>
        </Link>
        <Link href="/primatives/input">
            <Button>Inputs</Button>
        </Link>
        <Link href="/primatives/radiogroup">
            <Button>Radios</Button>
        </Link>
        <Link href="/primatives/textarea">
            <Button>Text Area</Button>
        </Link>
        <Link href="/primatives/accordion">
            <Button>Accordion</Button>
        </Link>
        <Link href="/primatives/navmenu">
            <Button>Navigation Menu</Button>
        </Link>

    </main>
      </>
  )
}
