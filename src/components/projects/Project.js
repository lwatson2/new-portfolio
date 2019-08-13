import React, { useRef } from "react"
import useOnScreen from "../useOnScreen"
const Project = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        backgroundColor: onScreen ? "##23cebd" : "#efefef",
      }}
    >
      <ul style={{ display: "grid" }}>
        <li>This is a test</li>
        <li>This is a test</li>
        <li>This is a test</li>
        <li>This is a test</li>
        <li>{`I am in view ${onScreen}`}</li>
      </ul>
    </div>
  )
}

export default Project
