import React from 'react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { motion } from 'motion/react'
import { Logo } from '@/components/logo'


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <main
            className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
                <section id="hero">
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                        <div className="relative z-10 mx-auto max-w-5xl text-center">
                            <motion.div
                                className="mx-auto mb-8 w-24 h-24 flex items-center justify-center"
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                            >
                                <Logo className="w-full h-full" />
                            </motion.div>
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-medium md:text-6xl">
                                Perfect Your Prompts Through Iterative Optimization
                            </TextEffect>
                            <div className="mx-auto mt-6 max-w-2xl text-pretty text-lg space-y-4">
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p">
                                    Prompt Intent is a privacy-first Chrome extension that reveals and closes the blindspots in your prompts.
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.7}
                                    as="p">
                                    Through intelligent AI powered questions, it uncovers missing details and context you didn't realize were needed, iteratively refining your prompt until it perfectly captures your intent - helping you get the best results.
                                </TextEffect>
                            </div>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <Button size="lg" disabled className="cursor-not-allowed">
                                        <svg 
                                            className="size-5 mr-2" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24">
                                            <path 
                                                fill="currentColor" 
                                                d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0M1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016c6.627 0 12-5.373 12-12c0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728a4.364 4.364 0 0 1 0 8.728"></path>
                                        </svg>
                                        Get Chrome Extension
                                    </Button>
                                    <p className="text-muted-foreground text-xs">
                                        Coming Soon
                                    </p>
                                </div>
                                <p className="text-muted-foreground text-sm mt-4">
                                    Powered by Chrome's On-Device LLM
                                </p>

                                <div className="mx-auto mt-16 max-w-4xl">
                                    <div className="relative rounded-2xl border border-border/50 bg-background p-2 shadow-2xl dark:bg-white/5">
                                        <video 
                                            className="w-full h-auto rounded-xl"
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            controls
                                        >
                                            <source src="/PromptIntent.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
        </main>
    );
}
