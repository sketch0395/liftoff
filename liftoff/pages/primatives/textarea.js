import { Textarea } from "@/components/ui/textarea"
import { Label} from "@/components/ui/label";

export default function TextArea() {
    return (<>
            <main className={`flex flex-col row-auto gap-4 items-center justify-between p-24 `}>
                <h1 className='text-2xl text-primary font-bold'> Text Area</h1>
                <div className='bg-card rounded-md w-1/2'>
            <div className="grid m-8 gap-1.5 ">
                <Label htmlFor="message-2">Your Message</Label>
                <Textarea placeholder="Type your message here." id="message-2" />
                <p className="text-sm text-muted-foreground">
                    Your message will be copied to the support team.
                </p>
            </div>
                </div>
            </main>
        </>
    )
}

