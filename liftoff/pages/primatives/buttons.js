import {Button} from "@/components/ui/button"
import {Inter} from 'next/font/google'



const inter = Inter({subsets: ['latin']})

export default function ExampleButtons() {
    return (<>
            <main
                className={`flex min-h-screen flex-col row-auto items-center justify-between p-24 ${inter.className}`}>
                <h1 className='text-2xl text-primary font-bold'> Buttons</h1>

                <div className='row-start-2 grid grid-cols-6 gap-4'>

                    <Button size='sm'>SMALL</Button>
                    <Button>DEFAULT</Button>
                    <Button size='lg'>LARGE</Button>
                    <Button size='icon'>ICON</Button></div>
                <div className='row-start-2 grid grid-cols-6 gap-4'>
                    <Button variant='secondary' size='sm'>SMALL</Button>
                    <Button variant='secondary'>SECONDARY</Button>
                    <Button variant='secondary' size='lg'>LARGE</Button>
                    <Button variant='secondary' size='icon'>ICON</Button>

                </div>
                <div className='row-start-2 grid grid-cols-6 gap-4'>

                    <Button variant='destructive'>DESTRUCTIVE</Button>
                    <Button variant='outline' className='text-primary'>OUTLINE</Button>

                    <Button variant='ghost'>GHOST</Button>
                    <Button variant='link'>LINK</Button>

                </div>

            </main>
        </>
    )
}