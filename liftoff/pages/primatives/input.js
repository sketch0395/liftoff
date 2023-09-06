import {Inter} from 'next/font/google'
import { Input } from "@/components/ui/input"




const inter = Inter({subsets: ['latin']})

export default function Inputs() {
    return (<>
            <main
                className={`flex min-h-screen flex-col row-auto items-center justify-between p-24 ${inter.className}`}>
                <h1 className='text-2xl text-primary font-bold'> Inputs</h1>

                <div className='row-start-2 grid grid-cols-6 gap-4'>
                <Input type='email' placeholder="email"/>



                </div>

            </main>
        </>
    )
}