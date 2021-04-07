import React from 'react'
import Head from 'next/head';

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
                <link rel="shortcut icon" href="/img/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp