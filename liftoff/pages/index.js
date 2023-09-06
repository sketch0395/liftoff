import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Button} from "@/components/ui/button";
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( <>
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
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

    </main>
      </>
  )
}
