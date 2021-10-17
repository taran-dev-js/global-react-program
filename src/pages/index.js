import { NextPage } from 'next'
import Head from 'next/head'

import Home from '../app/pages/Home'


const IndexPage = () => {
    return (
        <div>
            <Head>
                <title>React global program</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Home />
        </div>
    )
}

export default IndexPage