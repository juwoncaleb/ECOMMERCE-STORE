import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'

import { useRouter } from 'next/router'

export default function SummerFine({ allRetro }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>SUMMER FINE SELECTON</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    allRetro.map((retro) => (
                        <Link href={`/retro/${retro._id}`} passHref key={retro._id}>
                            <div className='productGrid ' key={retro._id}>
                                <img className='productImages' src={retro.images} />
                                <br />
                                <p className='itemName'>{retro.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {retro.price}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async () => {
<<<<<<< HEAD
    let prodRes = await axios.get("http://localhost:3000/api/retro")
=======
    let prodRes = await axios.get("/api/retro")
>>>>>>> 0b9e1b3f272f4e8eef97098d0289c5461623d16f
    return {
        props: {
            allRetro: prodRes.data
        }
    }
}
