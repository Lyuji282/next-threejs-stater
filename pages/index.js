import React from 'react'
import Layout from '../components/layout';
import styled from '@emotion/styled';
import Three from '../components/Three';

const Home = ({
                  title,
                  description
              }) => {
    return (
        <Layout>
            <Container>
                {/*<Three/>*/}
                <div>wwwww</div>
            </Container>
        </Layout>)
};


const Container = styled.main`
`;

const TextWrapper = styled.div`
margin-top: 40vh;
`;

const Text = styled.h2`
color: #fefefe;
text-align: center;
background-color: ${props => props.color};
`;

Home.getInitialProps = ({req}) => {
    return {
        title: "Your next life has started.",
        description: "Just do it"
    };
};

export default Home;