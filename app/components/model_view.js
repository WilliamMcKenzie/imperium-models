'use client';

import { Canvas, useLoader, useFrame  } from '@react-three/fiber';
import { GLTFLoader, useGLTF, useAnimations } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer = () => {
    const model = useLoader(GLTFLoader, '/boar_scene.gltf');

    let mixer
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })

    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <primitive object={model.scene} />
            <ambientLight intensity={2} />
        </Canvas>
    );
};