import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'

import { useRouter } from 'next/router'

export default function ({ women }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/women')}>Women</span>  </p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    women.map((women) => (
                        <Link href={`/women/${women._id}`} passHref key={women._id}>
                            <div className='productGrid ' key={women._id}>
                                <img className='productImages' src={women.images} />
                                <br />
                                <p className='itemName'>{women.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {women.price}
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
    let prodRes = await axios.get("http://localhost:3000/api/women")
    return {
        props: {
            women: prodRes.data
        }
    }
}