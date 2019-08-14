import React, { useRef } from "react"
import useOnScreen from "../useOnScreen"
import BuddyFinder350 from "../../images/buddyfinder_350x400.png"
import BuddyFinder400 from "../../images/buddyfinder_2_400x600.png"
const Project = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
      }}
    >
      <ul style={{ display: "grid" }}>
        <li>This is a test</li>
        <li>This is a test</li>
        <li>This is a test</li>
        <li>This is a test</li>
        <li>{`I am in view ${onScreen}`}</li>
        <img
          src={BuddyFinder400}
          alt=""
          srcSet={`${BuddyFinder350} 350w ${BuddyFinder400} 400w`}
        />
      </ul>
    </div>
  )
}

export default Project
