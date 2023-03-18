import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

export const numberofPages = 5

export default function useScrollData(page: number) {
  const [scrollData, setScrollData] = useState([0, 0]);

  const scroll = useScroll()
  const numberofPagesFrac = 1 / (numberofPages - 1)
  useFrame((state, delta) => {
    let r1 = Math.max((scroll.range(0, 1) / numberofPagesFrac) - page, 0)
    r1 = Math.min(r1, 1)
    setScrollData([r1, delta]);
  })

  return scrollData;
}