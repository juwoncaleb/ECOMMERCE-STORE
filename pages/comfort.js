import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'

import { useRouter } from 'next/router'

export default function Comfort ({ comfort }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>COMFORT</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    comfort.map((comfort) => (
                        <Link href={`/comfort/${comfort._id}`} passHref key={comfort._id}>
                            <div className='productGrid ' key={comfort._id}>
                                <img className='comImage' src={comfort.images} />
                                <br />
                                <p className='itemName'>{comfort.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {comfort.price}
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
    let prodRes = await axios.get("https://lacostestore.vercel.app//api/comfort")
    return {
        props: {
            comfort: prodRes.data
        }
    }
}