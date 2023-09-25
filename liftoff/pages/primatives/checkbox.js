
import { Checkbox } from "@/components/ui/checkbox"


export default function checkBox(){
    return(
        <>
        <main className='flex flex-col row-auto gap-4 items-center justify-between p-24'>
            <h1 className='text-2xl text-primary font-bold'> Check Box</h1>
            <div className='bg-card rounded-md'>
                <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
                <Checkbox />
                </div>
                </div>
        </main>
        </>
    )
}