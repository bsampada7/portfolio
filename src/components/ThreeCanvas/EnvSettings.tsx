export default function EnvSettings() {
  return (
    <>
      <spotLight position={[0, 4.729254238806093, 2.3646271194030466]} intensity={0.5} decay={2} angle={1.0471975511965976} penumbra={1} />
      <pointLight intensity={0.5} position={[-2.3646271194030466, 1.1823135597015233, -3.54694067910457]} />
      <directionalLight castShadow intensity={0.5}>
        <orthographicCamera args={[-10, 10, 20, -10, 0.5, 30]} />
        {/* <perspectiveCamera args={[30, 1, 20, 30]}/> */}
      </directionalLight>
      <ambientLight intensity={1 / 3}></ambientLight>
    </>
  )
}