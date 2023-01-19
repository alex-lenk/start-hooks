import React, { useEffect, useRef, useState } from "react"
import CardWrapper from "../../common/Card"
import SmallTitle from "../../common/typografy/smallTitle"

const PrevStateExample = () => {
  const prefState = useRef("")
  const [otherState, setOtherState] = useState("false")
  const toggleOtherState = () => {
    setOtherState(prevState =>
      prevState === "false" ? "true" : "false")
  }
  useEffect(() => {
    prefState.current = otherState
  }, [otherState])

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <p>prev State: {prefState.current}</p>
      <p>render count: {otherState}</p>
      <button className="btn-btn-primary" onClick={toggleOtherState}>toggle other</button>
    </CardWrapper>
  )
}

export default PrevStateExample
