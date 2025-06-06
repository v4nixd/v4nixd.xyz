import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, ASCII } from '@react-three/postprocessing'

function Model() {
    const gltf = useGLTF('/beta/models/discord_boost.glb')
    return <primitive object={gltf.scene} scale={0.025} position={[0, -4, 0]} rotation={[0, 0, 0]} />
}

export function BoostView() {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 brightness-100 opacity-10">
            <Canvas camera={{position: [0, 0, 20], fov: 20}}>
                <ambientLight intensity={Math.PI / 2}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                <Suspense fallback={null}>
                    <Model/>
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true} autoRotateSpeed={3}/>
                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300}/>
                    <Noise opacity={0.1}/>
                    <ASCII
                        characters={'`.-\':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@'}
                        color={"white"}
                        invert={false}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    )
}