import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function cards(){
    return(
        <>
        <main className={`flex flex-col row-auto gap-4 items-center justify-between p-24 `}>
            <h1 className='text-2xl text-primary font-bold'> Cards</h1>
            <div className='bg-card rounded-md w-1/2'>
                <div className='flex justify-center  grid-cols-4 gap-4 m-8'>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                </div>
            </div>
        </main>
        </>
    )
}