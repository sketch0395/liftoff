import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function myAccordion() {
return(<>
        <main className='flex flex-col row-auto gap-4 items-center justify-between p-24 '>
            <h1 className='text-2xl text-primary font-bold'> Accordions</h1>
            <div className='bg-card rounded-md w-1/2'>
                <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
    <Accordion type="single" collapsible className='w-1/2'>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
                </div>
    </div>
        </main>
    </>
)
}