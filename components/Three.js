import React, {useRef} from 'react'
import Layout from '../components/layout';
import styled from '@emotion/styled';
import {Canvas, useFrame} from 'react-three-fiber';

const Three = () => {

    const ref = useRef();
    useFrame(() => (ref.current.rotation.z += 0.01));

    return(
    <Container>
        <Canvas>
        <mesh
            ref={ref}
            onClick={e => console.log('click')}
            onPointerOver={e => console.log('hover')}
            onPointerOut={e => console.log('unhover')}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshNormalMaterial attach="material" />
        </mesh>
        </Canvas>
    </Container>
    )
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

export default Three;