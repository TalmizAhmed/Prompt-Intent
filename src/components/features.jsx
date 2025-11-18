import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Lock, Chrome, WifiOff, Infinity } from 'lucide-react'
import dismissableQuestions from '@/assets/dismissable-questions.png'
import startFromScratch from '@/assets/start-from-scratch.png'
import modal3qs from '@/assets/modal-3qs.png'

export default function Features() {
    return (
        <section id="features" className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card
                        className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tl-xl md:p-12">
                        <p
                            className="mx-auto mb-4 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">Unlimited Iterations</p>
                        
                        <p className="text-muted-foreground mx-auto max-w-xs text-center text-sm mb-8">Refine as many times as needed. Each cycle sharpens focus and adds detail until your prompt captures exactly what you want.</p>

                        <div className="flex justify-center items-center">
                            <Infinity className="size-24" />
                        </div>
                    </Card>
                    <Card
                        className="group p-6 shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tr-xl md:p-12">
                        <p
                            className="mx-auto mb-4 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">On-Device Processing, No Internet Needed</p>
                        
                        <p className="text-muted-foreground mx-auto max-w-xs text-center text-sm mb-8">Powered by Gemini Nano, Chrome's built-in AI model. All processing runs on-device with zero data transmission.</p>

                        <div className="flex justify-center gap-4 items-center">
                            <Chrome className="size-16" />
                            <span className="text-2xl font-light text-muted-foreground">+</span>
                            <WifiOff className="size-16" />
                            <span className="text-2xl font-light text-muted-foreground">+</span>
                            <Lock className="size-16" />
                        </div>
                    </Card>
                    <Card
                        className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-bl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <p className="font-medium text-lg sm:text-xl">Optimize or Create</p>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm">Optimize an existing prompt with targeted clarifying questions, or start from scratch and build your prompt with instructions.</p>
                            </div>
                        </CardHeader>

                        <CardContent className="px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <p className="text-xs font-medium text-muted-foreground text-center">Start Fresh</p>
                                    <div className="overflow-hidden rounded-lg border bg-background">
                                        <img
                                            src={startFromScratch}
                                            className="w-full h-auto"
                                            alt="Modal when starting from scratch"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-medium text-muted-foreground text-center">Refine Existing</p>
                                    <div className="overflow-hidden rounded-lg border bg-background">
                                        <img
                                            src={modal3qs}
                                            className="w-full h-auto"
                                            alt="Modal with questions when prompt is selected"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-br-xl">
                        <p
                            className="mx-auto mt-6 mb-3 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:px-6 md:pt-6">Dismiss Questions to Generate Fresh Ones</p>
                        
                        <p className="text-muted-foreground mx-auto max-w-xs px-6 text-center text-sm mb-6">Dismiss questions to generate new ones automatically. Refine your clarifications iteratively until you achieve the optimal prompt.</p>

                        <CardContent className="mt-auto h-fit">
                            <div
                                className="mask-radial-at-right mask-radial-from-75% mask-radial-[75%_75%] relative max-sm:mb-6">
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <img
                                        src={dismissableQuestions}
                                        className="w-full h-auto"
                                        alt="Dismissable questions interface"
                                        width={1207}
                                        height={929} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

