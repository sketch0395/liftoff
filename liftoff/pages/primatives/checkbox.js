
import { Checkbox } from "@/components/ui/checkbox"


export default function checkBox(){
    return(
        <>
        <main className='grid grid-cols-6 gap-3 row-auto pt-32'>
            <h1 className='text-2xl text-primary font-bold col-start-3 text-center col-span-2'> Check Box</h1>
            <div className='row-start-2 col-start-2 col-span-2'>
                <Checkbox />
            </div>
        </main>
        </>
    )
}