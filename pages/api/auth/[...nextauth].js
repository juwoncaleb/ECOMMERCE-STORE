import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
        // CredentialsProvider({
        //     name: "credentials",
        //     credentials: {
        //         username: { label: "Username", type: "text", placeholder: "juwon@gmail.com" },
        //         password: { label: "Password", type: "password" }
        //     },
        //     authorize: (credentials) => {
        //         if (
        //             credentials.username === "juwon" &&
        //             credentials.password === "juwoncaleb"
        //         ) {
        //             return {
        //                 id: 2,
        //                 name: "juwon",
        //                 email: "juwon@gmail.com"
        //             }
        //         }
        //         return null
        //     }
        // })
    ],
    
    secret: process.env.JWT_SECRET
})

