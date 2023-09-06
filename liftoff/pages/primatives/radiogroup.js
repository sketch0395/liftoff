import {Inter} from 'next/font/google'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"




const inter = Inter({subsets: ['latin']})

export default function Radiogroup() {
    return (<>
            <main
                className={`flex min-h-screen flex-col row-auto items-center justify-between p-24 ${inter.className}`}>
                <h1 className='text-2xl text-primary font-bold'> Radio Group</h1>

                <div className='row-start-2 grid grid-cols-6 gap-4'>
                    <RadioGroup defaultValue="option-one" >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                    </RadioGroup>

                </div>

            </main>
        </>
    )
}