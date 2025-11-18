import promptImage from '@/assets/prompt-2.png'

export default function ContentSection() {
    return (
        <section id="content" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Intent-Driven Prompts, Not Generic Rewrites</h2>
                <div className="grid gap-6 sm:grid-cols-3 md:gap-12 lg:gap-16">
                    <div className="relative mb-6 sm:mb-0 sm:col-span-2">
                        <div
                            className="bg-linear-to-b relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <img
                                src={promptImage}
                                className="rounded-[15px] shadow w-full h-auto"
                                alt="Prompt optimization interface" />
                        </div>
                    </div>

                    <div className="relative space-y-4 sm:col-span-1">
                        <p className="text-muted-foreground">
                            Generic prompt tools optimize without context, producing one-size-fits-all prompts. <span className="text-accent-foreground font-bold">Prompt Intent takes a different approach</span>—it asks clarifying questions to understand your specific intent before generating your prompt.
                        </p>
                        <p className="text-muted-foreground">By answering a few targeted questions, you guide the optimization. No more generic rewrites that miss the mark—just prompts built around what you truly want.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

