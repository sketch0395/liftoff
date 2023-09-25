
import {Button} from "@/components/ui/button";
import Link from "next/link";




export default function Home() {
  return ( <>
    <main className={`grid grid-cols-6 gap-3 p-24 row-auto`}>
<h1 className='text-2xl text-primary font-bold col-start-3 col-span-2 text-center '>Welcome to Liftoff-UI</h1>

       <div className='flex flex-col h-16 justify-center row-auto row-start-2 col-start-3 col-span-2 gap-4 items-center bg-card rounded-md '>
<div className='flex'>
        <Link href="/primatives/primitives">
            <Button className=' mx-4 w-32'>Primitives</Button>
        </Link>

        <Link href="/Components/components">
            <Button className=' mx-4 w-32'>Components</Button>
        </Link>
</div>
       </div>


    </main>
      </>
  )
}