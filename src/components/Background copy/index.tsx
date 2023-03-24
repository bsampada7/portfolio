import React, { useEffect, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
// import * as THREE from 'three'

const N = 2;

const gData1 = {
  nodes: Array(N).fill(0).map((a, i) => ({ id: i })),
  links: Array(N).fill(0).map((a, i) => i).filter(id => id).map(id => ({
    source: id,
    target: Math.round(Math.random() * (id - 1))
  }))
}

const gData = {
  "nodes": [
    {
      "id": "id1",
      "name": "name1",
      "val": 1,
      'color': 'red',
      x:0,
      y:0,
      z:0
    },
    {
      "id": "id2",
      "name": "name2",
      "val": 2,
      color: '#00FF00',
      x:1,
      y:1,
      z:1

    },
  ],
  "links": [
    {
      "source": "id1",
      "target": "id2"
    },
  ]
}

const getThreeForce = async () => {
  const threeForcegraph = (await import('three-forcegraph')).default
  return threeForcegraph
}

const getNode = () => {
  return (
    <Text color="#ff0000" anchorX="center" anchorY="middle">
      React.js
    </Text>
  )

}

const Background = () => {
  const [graph, setgraph] = useState<any>();

  const { scene } = useThree()
  window.scene = scene

  const graphPromise = useMemo(() => {
    return getThreeForce().then((threeForcegraph) => {
      const instance = new threeForcegraph()
      instance.graphData(gData)
      instance.nodeRelSize(1)
      instance.nodeResolution(16)
      // instance.nodeOpacity(1)
      // instance.nodeThreeObject('React')
      // instance.nodeThreeObject(getNode)
      return instance
    })
  }, [])

  useEffect(() => {
    // while (scene.children.length > 0) {
    //   scene.remove(scene.children[0])
    // }

    const func = async () => {
      let g = await graphPromise;
      let scale = 1
      g.scale.set(scale, scale, scale)
      // g.position.set(0,0,0)
      // g.position.set(0, 10, 0)
      setgraph(g)

      scene.add(g)
    }
    func()

  }, [])

  useFrame(() => {
    if (graph)
      graph.tickFrame()
  })

  return (
    // <div className="absolute w-full h-full pointer-events-auto">
    //   <div className="absolute rounded-half bg-text-muted w-4 h-4 top-[20%] left-[30%]">
    //     <span>React.js</span>
    //   </div>
    //   <div id="3d-graph"></div>

    // </div>
    <>
      <OrbitControls />
      <Text color="#ff0000" anchorX="center" anchorY="middle" position={[0,0,0]}>
        React.js
      </Text>
    </>
  );
};

export default Background;
