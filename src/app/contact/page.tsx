'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { colors } from '../../../lib/colors'

export const Page = () => {
    const router = useRouter();
    return (
        <div
            className="min-h-screen relative"
            style={{ backgroundColor: colors.primary }}
        >
            <div onClick={() => router.push('/')} className='absolute top-10 left-10 cursor-pointer'>
                <Image src="/arrow.svg" alt="arrow" width={50} height={50} />
            </div>
            <div className="absolute top-10 right-10 text-black text-3xl font-raleway">
                Contact
            </div>
            <div className="flex flex-col w-full min-h-screen p-50 items-center">
                <div className="text-black font-raleway text-9xl">Hello.</div>
                <div className="text-black font-raleway text-4xl mt-10">
                    Feel free to reach out to me
                </div>
                <div className="text-black font-raleway w-full flex justify-center mt-5">
                    Email:{' '}
                    <span className="underline-hover ml-2">
                        victor.palle2@gmail.com
                    </span>
                </div>
                <div className="text-black font-raleway w-full flex justify-center">
                    On the internet:
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/victorpalle/' className="underline-hover ml-2">LinkdedIn</a><span className='ml-2'>&#x2022;</span>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/victorpalle' className="underline-hover ml-2">Github</a><span className='ml-2'>&#x2022;</span>
                    <a target="_blank" rel="noopener noreferrer" href='https://fanlink.tv/viktorpallemusic?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnxGKQcT9cHEWmKbk40-LaP5RdL8oz2OHcCt2AMHZvC9EokH9WvFphT3E0GnM_aem_MskauCSY9a4Jpq4r84B_SQ' className="underline-hover ml-2">Music</a>
                </div>
            </div>
        </div>
    )
}

export default Page
