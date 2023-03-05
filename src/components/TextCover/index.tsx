import { Text } from "@react-three/drei";
import React from "react";

const TextCover = ({ text }: { text: string }) => {
  return (
    <Text
      position={[-5, -5, -5]}
      fontSize={0.5}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign={'left'}
      // font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      fillOpacity={0}
      strokeWidth={'2.5%'}
      strokeColor="#e000ff"
    >
      {text}
    </Text>
  );
};

export default TextCover;
