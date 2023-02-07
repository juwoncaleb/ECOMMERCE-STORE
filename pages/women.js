import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import Women from "../model/Office";

import { useRouter } from 'next/router'

export default function Women({ women }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/women')}>Women</span>  </p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    women.map((woman) => (
                        <Link href={`/women/${woman._id}`} passHref key={woman._id}>
                            <div className='productGrid ' key={woman._id}>
                                <img className='productImages' src={woman.images} />
                                <br />
                                <p className='itemName'>{woman.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {woman.price}
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
    try {
        await dbConnect();
        const allWomen = await Women.find();

        return {
            props: {
                women: allWomen,
            },
        };
    } catch (error) {
        console.log("cant fetch");
        return {
            props: {
                offices: [],
            },
        };
    }
};
