import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import Comfort from "../model/Comfort";
import { useRouter } from 'next/router'

export default function ComfortProd ({ comfort }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>COMFORT</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    comfort.map((comforts) => (
                        <Link href={`/comfort/${comforts._id}`} passHref key={comforts._id}>
                            <div className='productGrid ' key={comforts._id}>
                                <img className='comImage' src={comforts.images} />
                                <br />
                                <p className='itemName'>{comforts.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {comforts.price}
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
        const allComfort = await Comfort.find();

        return {
            props: {
                comfort: allComfort,
            },
        };
    } catch (error) {
        console.log("cant fetch");
        return {
            props: {
                comfort: [],
            },
        };
    }
};
