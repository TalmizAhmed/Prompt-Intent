import { Logo } from '@/components/logo'
import { motion } from 'motion/react'
import { Card } from '@/components/ui/card'
import inputTextImage from '@/assets/input-text.png'
import extensionBarImage from '@/assets/extension-bar.png'

const steps = [
    {
        number: 1,
        title: "Install the extension from the Chrome Web Store",
        visual:  <ExtensionIconLarge />
    },
    {
        number: 2,
        title: "Focus on any input field and type your prompt or idea",
        visual: <img src={inputTextImage} alt="Focused input field" className="w-full h-auto" />
    },
    {
        number: 3,
        title: "Click the Prompt Intent icon to open the modal and optimize your prompt",
        visual: <img src={extensionBarImage} alt="Chrome extension toolbar" className="w-full h-auto" />
    }
]

export default function GettingStarted() {
    return (
        <section id="how-it-works" className="bg-zinc-50 dark:bg-muted/25 py-12 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-4xl font-medium lg:text-5xl text-center mb-4">
                    Getting Started
                </h2>
                <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16">
                    Get started in three simple steps
                </p>

                <div className="grid gap-12 md:grid-cols-3 md:gap-16 lg:gap-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <Card className="p-6 md:p-8 w-full flex flex-col items-center shadow-zinc-950/5">
                                <div className="h-12 flex items-center justify-center mb-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/90 text-primary-foreground text-lg font-semibold">
                                        {step.number}
                                    </div>
                                </div>

                                <div className="h-48 flex items-center justify-center mb-6">
                                    {step.visual}
                                </div>

                                <p className="text-center text-sm md:text-base leading-relaxed max-w-xs">
                                    {step.title}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ExtensionIconLarge() {
    return (
        <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-4 py-8">
            <div className="relative">
                <Logo className="w-32 h-32" />
                <div className="absolute -bottom-1 -right-1 w-12 h-12 rounded-full bg-[#1a73e8] flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                    </svg>
                </div>
            </div>
            <div className="text-center">
                <div className="text-xs font-medium text-muted-foreground">Prompt Intent</div>
            </div>
        </div>
    )
}

