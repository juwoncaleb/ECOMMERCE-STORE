import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import Shoe from "../model/Shoe";
import { useRouter } from 'next/router'

export default function ShoePage({ shoeprod }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/')}>Kid</span>  </p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    shoeprod.map((shoes) => (
                        <Link href={`/shoe/${shoes._id}`} passHref key={shoes._id}>
                            <div className='productGrid ' key={shoes._id}>
                                <img className='productImages' src={shoes.images} />
                                <br />
                                <p className='itemName'>{shoes.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {shoes.price}
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
        const allShoes = await Shoe.find();

        return {
            props: {
                shoeprod: JSON.parse(JSON.stringify(allShoes)),
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
