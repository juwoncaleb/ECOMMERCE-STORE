import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'

import { useRouter } from 'next/router'

export default function Office ({ offices }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>OFFICE</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    offices.map((office) => (
                        <Link href={`/office/${office._id}`} passHref key={office._id}>
                            <div className='productGrid ' key={office._id}>
                                <img className='comImage' src={office.images} />
                                <br />
                                <p className='itemName'>{office.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {office.price}
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
    let prodRes = await fetch("https://lacostestores.vercel.app/api/office")
    let data = await prodRes.json()
    return {
        props: {
            offices: data
        }
    }
}