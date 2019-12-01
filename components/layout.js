import Head from "next/head";
import React from "react";
import styled from '@emotion/styled';
import './layout.css';

export default ({children}) => {
    return (
        <Global>
            <Head>
                <title>Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

            {children}

        </Global>
    )
};


const Global = styled.main`

overflow-x: hidden;

a{
text-decoration: none;
color: inherit;
}
`;
