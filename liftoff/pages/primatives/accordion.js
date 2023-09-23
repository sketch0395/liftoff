import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function myAccordion() {
return(<>
        <main className='grid grid-cols-4 pt-32'>
        <div className='col-start-2 col-span-2 bg-card'>
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
    </Accordion>

    </div>
        </main>
    </>
)
}