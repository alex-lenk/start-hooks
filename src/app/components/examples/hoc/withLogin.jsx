import React from "react"
import Subtitle from "../../common/typografy/subtitle"

// eslint-disable-next-line react/display-name
const WithLogin = (Component) => (props) => {
  const isLogin = localStorage.getItem("auth")
  return (
    <>
      {isLogin ? <Component {...props}/> : <Subtitle>auth</Subtitle>}
    </>
  )
}

export default WithLogin
