'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader, useGLTF, useAnimations } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer = () => {
    const myModel = useLoader(GLTFLoader, '/boar_scene.gltf');
    const { nodes, animations } = useGLTF('/boar_scene.gltf')
    const { ref, actions, names } = useAnimations(animations)

    useEffect(() => {
        // Reset and fade in animation after an index has been changed
        actions[names[0]].reset().fadeIn(0.5).play()
      }, [])

    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <primitive object={myModel.scene} />
            <ambientLight intensity={2} />
        </Canvas>
    );
};