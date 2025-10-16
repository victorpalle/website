'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { colors } from '../../../lib/colors'
import Link from 'next/link'

export const Page = () => {
    const router = useRouter()

    return (
        <div
            className="flex flex-col min-h-screen"
            style={{ backgroundColor: '#141414' }}
        >
            {/* --- Back button --- */}
            <div
                onClick={() => router.push('/')}
                className="absolute top-10 left-10 cursor-pointer"
            >
                <Image src="/arrow.svg" alt="arrow" width={50} height={50} />
            </div>

            {/* --- Projects text --- */}
            <div className="flex absolute top-10 right-10 text-black text-3xl font-raleway gap-3">
                <Link className="underline-hover" href="/drumgan">
                    DrumGAN
                </Link>
                &#x2022;
                <Link className="underline-hover" href="/samplematch">
                    Sample Match
                </Link>
                &#x2022;
                <Link className="underline-hover" href="/sonar">
                    Sonar
                </Link>
            </div>

            {/* --- Section 1 --- */}
            <div
                style={{ backgroundColor: colors.primary }}
                className="w-full h-[85vh] px-30 pt-30"
            >
                <div className="flex flex-col justify-center h-full text-black text-9xl">
                    {/* Animation du titre */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="w-full tracking-tight"
                    >
                        Sample Match
                    </motion.div>

                    {/* Animation du texte */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 0.4,
                        }}
                        className="text-lg font-raleway w-140 pt-10 ml-2"
                    >
                        Developed by the Music Team of Sony Computer Science
                        Laboratories (Sony CSL – Paris), Sample Match, is the
                        first AI-sample library that fits your musical context
                    </motion.div>
                </div>
            </div>

            {/* --- Section 2 --- */}
            <div className="flex flex-col w-full p-30 min-h-screen">
                <div
                    className="flex w-full h-70 font-raleway"
                    style={{ color: colors.primary }}
                >
                    <div className="w-1/3">
                        <div className="text-3xl mb-2">Role</div>
                        <div>Full-stack developer</div>
                    </div>
                    <div className="w-1/3 pr-10">
                        <div className="text-3xl mb-2">Responsibilities</div>
                        <div>
                            Built Python backend to query AI model, React/TS
                            frontend, integrated OS sample library, managed and
                            optimized large audio datasets.
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-3xl mb-2">Url</div>
                        <a
                            href="https://samplematch.csl.sony.fr/"
                            target="_blank"
                            className="underline-hover-light"
                        >
                            https://samplematch.csl.sony.fr/
                        </a>
                    </div>
                </div>
                <Image
                    src="/SampleMatch_Sc.png"
                    alt="drumgan"
                    width={1600}
                    height={900}
                    priority
                    style={{ borderRadius: '20px' }}
                />
            </div>
            {/* --- Section 3 --- */}
            <div className="min-h-screen flex flex-col w-full px-30 pb-30 gap-30">
                <div
                    className="text-3xl font-raleway w-1/2"
                    style={{ color: colors.primary }}
                >
                    Had a lot of fun working on this project. Creating a tool
                    that organizes a user’s samples felt super original and
                    rewarding.
                </div>
                <div className="w-full h-[600px]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/n1n8ZxPK6F4"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Page
