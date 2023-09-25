
import {Button} from "@/components/ui/button";
import Link from "next/link";




export default function Home() {
    return ( <>
            <main
                className={`flex flex-col row-auto gap-4 items-center justify-between p-24 `}>

            <h1 className='text-2xl text-secondary font-bold '> Components</h1>
                <div className='bg-card rounded-md w-1/2'>
                    <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
                <Link href="/Components/cards">
                    <Button>Cards</Button>
                </Link>
                    </div>
                </div>

            </main>
        </>
    )
}
