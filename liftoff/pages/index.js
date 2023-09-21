
import {Button} from "@/components/ui/button";
import Link from "next/link";




export default function Home() {
  return ( <>
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
<h1 className='text-2xl text-secondary font-bold '> Welcome to Liftoff-UI</h1>

        <Link href="/primatives/primitives">
            <Button>Primitives</Button>
        </Link>
        <Link href="/Components/components">
            <Button>Components</Button>
        </Link>



    </main>
      </>
  )
}
