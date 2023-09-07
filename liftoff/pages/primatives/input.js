import {Inter} from 'next/font/google'
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Codepen} from "lucide-react";


const inter = Inter({subsets: ['latin']})

export default function Inputs() {
    return (<>
            <main
                className={`flex min-h-screen flex-col row-auto items-center p-4 ${inter.className}`}>
                <h1 className='text-2xl text-primary font-bold'> Inputs</h1>
                {/*Label*/}
                <div className='pt-20'>
                    <Label htmlFor="email">Email</Label>
                    <Input type='email' id='email' placeholder="email"/>
                </div>
                {/*helper text*/}
                <div className='pt-4'>
                    <Label htmlFor="email">Email</Label>
                    <Input type='email' id='email' placeholder="email"/>
                    <Label>Input email</Label>

                </div>
                {/*disabled*/}
                <div className='pt-4'>
                    <Label htmlFor="email">Email</Label>
                    <Input disabled type='email' placeholder="email"/>
                </div>

                {/*file*/}
                <div className='pt-4'>
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" type="file"/>
                </div>

                {/*with button*/}
                <div className='flex w-full max-w-sm items-center space-x-2 pt-8'>
                    <Input id="email" type="email" placeholder='Subscribe'/>
                    <Button type='submit'>Subscribe</Button>
                </div>

            </main>
        </>
    )
}