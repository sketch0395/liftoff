import {Button} from "@/components/ui/button"
import {Inter} from 'next/font/google'
import {Codepen, Mail} from 'lucide-react'




const inter = Inter({subsets: ['latin']})

export default function ExampleButtons() {
    return (<>
            <main
                className={`flex min-h-screen flex-col row-auto gap-4 items-center justify-between p-24 ${inter.className}`}>
                <h1 className='text-2xl text-primary font-bold'> Buttons</h1>
                {/*Default Buttons*/}
                <div className='row-start-2 grid grid-cols-4 gap-4'>
                    <Button size='sm'>SMALL</Button>
                    <Button>DEFAULT</Button>
                    <Button size='lg'>LARGE</Button>
                    <Button size='icon'><Codepen className='mx-2 h-4 w-4'/></Button></div>
                {/*Secondary Buttons*/}
                <div className='row-start-2 grid grid-cols-4 gap-4'>
                    <Button variant='secondary' size='sm'>SMALL</Button>
                    <Button variant='secondary'>SECONDARY</Button>
                    <Button variant='secondary' size='lg'>LARGE</Button>
                    <Button variant='secondary' size='icon'><Codepen className='mx-2 h-4 w-4'/> </Button>
                </div>
                {/*Destructive Buttons*/}
                <div className='row-start-2 grid grid-cols-4 gap-4'>
                    <Button variant='destructive' size="sm">DESTRUCTIVE</Button>
                    <Button variant='destructive'>DESTRUCTIVE</Button>
                    <Button variant='destructive' size="lg">DESTRUCTIVE</Button>
                    <Button variant='destructive' size="icon"><Codepen className='mx-2 h-4 w-4'/></Button>
                </div>
                {/*Outline Buttons*/}
                {/*Must set cn text-color*/}
                {/*No Secondary variant*/}
                <div className='row-start-2 grid grid-cols-4 gap-4'>
                    <Button variant='outline' size="sm">OUTLINE</Button>
                    <Button variant='outline'>OUTLINE</Button>
                    <Button variant='outline' size="lg">OUTLINE</Button>
                    <Button variant='outline' size="icon"><Codepen className='mx-2 h-4 w-4'/></Button>
                </div>
                {/*Ghost Buttons*/}
                {/*Must set cn text-color*/}
                <div className='row-start-2 grid grid-cols-4 gap-4'>
                    <Button variant='ghost' size="sm">OUTLINE</Button>
                    <Button variant='ghost'>OUTLINE</Button>
                    <Button variant='ghost' size="lg">OUTLINE</Button>
                    <Button variant='ghost' size="icon"><Codepen className='mx-2 h-4 w-4'/></Button>
                </div>
                {/*Link Buttons*/}
                {/*Must set cn text-color*/}
                <div className='row-start-2 grid grid-cols-4 gap-4'>
                    <Button variant='link' size="sm">LINK</Button>
                    <Button variant='link'>LINK</Button>
                    <Button variant='link' size="lg">LINK</Button>

                </div>

                {/*Icon Buttons*/}
                <div className='row-start-2 grid grid-cols-4 gap-4'>
                    <Button>
                        <Mail className='mr-2 h-4 w-4'/> DEFAULT</Button>
                    <Button>
                        DEFAULT<Mail className='ml-2 h-4 w-4'/> </Button>
                    <Button>
                        <Mail className='mr-2 h-4 w-4'/>DEFAULT<Mail className='ml-2 h-4 w-4'/> </Button>
                </div>



            </main>
        </>
    )
}