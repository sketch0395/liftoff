import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function CollapsibleDemo(){
    let isOpen;

    function setIsOpen() {

    }

    return(<>
        <main className='flex flex-col row-auto gap-4 items-center justify-between p-24'>
            <h1 className='text-2xl text-primary font-bold'> Collapsable Menu</h1>

            <div className='bg-card rounded-md w-1/2'>
                <div className='flex justify-center gap-4 m-4'>
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-1/2 space-y-2"
            >
                <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">
                        @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @stitches/react
                    </div>
                </CollapsibleContent>
            </Collapsible>
                </div>
        </div>
        </main>
    </>)
}


