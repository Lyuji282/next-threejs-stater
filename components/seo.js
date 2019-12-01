// https://github.com/garmeeh/next-seo

import React from 'react';
import {NextSeo} from 'next-seo';

export default ({
                    title = "Using More of Config",
                    description = "This example uses more of the available config options.",
                    canonical,
                    ogpUrl,
                    images,
                    siteName,
                    twitterHandle,
                    twitterSite,
                    twitterCardType = 'summary_large_card'
                }) => (
    <>
        <NextSeo
            title=title
            description=description
            canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'Open Graph Title',
                description: 'Open Graph Description',
                images: [
                    {
                        url: 'https://www.example.ie/og-image-01.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                    },
                    {
                        url: 'https://www.example.ie/og-image-02.jpg',
                        width: 900,
                        height: 800,
                        alt: 'Og Image Alt Second',
                    },
                    {url: 'https://www.example.ie/og-image-03.jpg'},
                    {url: 'https://www.example.ie/og-image-04.jpg'},
                ],
                site_name: siteName,
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: twitterCardType,
            }}
            facebook={{
                appId: 1234567890,
            }}
        />
        <p>SEO Added to Page</p>
    </>
);