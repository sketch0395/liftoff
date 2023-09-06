import {Button} from "@/components/ui/button"
import {Inter} from 'next/font/google'



const inter = Inter({subsets: ['latin']})

export default function ExampleButtons() {
    return (<>
            <main
                className={`flex min-h-screen flex-col row-auto items-center justify-between p-24 ${inter.className}`}>
                <h1 className='text-2xl text-primary font-bold'> Buttons</h1>
                {/*Default Buttons*/}
                <div className='row-start-2 grid grid-cols-6 gap-4'>
                    <Button size='sm'>SMALL</Button>
                    <Button>DEFAULT</Button>
                    <Button size='lg'>LARGE</Button>
                    <Button size='icon'>ICON</Button></div>
                {/*Secondary Buttons*/}
                <div className='row-start-2 grid grid-cols-6 gap-4'>
                    <Button variant='secondary' size='sm'>SMALL</Button>
                    <Button variant='secondary'>SECONDARY</Button>
                    <Button variant='secondary' size='lg'>LARGE</Button>
                    <Button variant='secondary' size='icon'>ICON</Button>
                </div>
                {/*Destructive Buttons*/}
                <div className='row-start-2 grid grid-cols-6 gap-4'>
                    <Button variant='destructive' size="sm">DESTRUCTIVE</Button>
                    <Button variant='destructive'>DESTRUCTIVE</Button>
                    <Button variant='destructive' size="lg">DESTRUCTIVE</Button>
                    <Button variant='destructive' size="icon">ICON</Button>
                </div>
                {/*Outline Buttons*/}
                {/*Must set cn text-color*/}
                {/*No Secondary variant*/}
                <div className='row-start-2 grid grid-cols-6 gap-4'>
                    <Button variant='outline' size="sm">OUTLINE</Button>
                    <Button variant='outline' size="sm" className='text-secondary-foreground border-secondary'>OUTLINE</Button>
                    <Button variant='outline'>OUTLINE</Button>
                    <Button variant='outline' size="lg">OUTLINE</Button>
                    <Button variant='outline' size="icon">ICON</Button>
                </div>
                {/*Ghost Buttons*/}
                {/*Must set cn text-color*/}
                <div className='row-start-2 grid grid-cols-6 gap-4'>
                    <Button variant='ghost' size="sm">OUTLINE</Button>
                    <Button variant='ghost'>OUTLINE</Button>
                    <Button variant='ghost' size="lg">OUTLINE</Button>
                    <Button variant='ghost' size="icon">ICON</Button>
                </div>


                <div className='row-start-2 grid grid-cols-6 gap-4'>

                   <Button variant='link'>LINK</Button>

                </div>

            </main>
        </>
    )
}