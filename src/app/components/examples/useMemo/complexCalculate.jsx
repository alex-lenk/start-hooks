import React, { useEffect, useMemo, useState } from "react"
import CardWrapper from "../../common/Card"
import SmallTitle from "../../common/typografy/smallTitle"

function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100)
  const [otherState, setOtherState] = useState(false)
  const buttonColor = useMemo(() =>
    ({ value: otherState ? "primary" : "secondary" }), [otherState])
  useEffect(() => {
    console.log("render")
  })
  function runFactorial(n) {
    console.log("run factorial")
    return factorial(n)
  }
  const fact = useMemo(() => runFactorial(value), [value])
  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <p>Resul factorial: {fact} </p>
        <button className="btn btn-primary ms-md-2"
                onClick={() => setValue(prevState => prevState + 10)}
        >Increment
        </button>
        <button className="btn btn-primary ms-md-2"
                onClick={() => setValue(prevState => prevState - 10)}
        >Decrement
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <button className={`btn btn-${buttonColor.value} ms-md-2`}
                onClick={() => setOtherState(prevState => !prevState)}
        >change color btn</button>
      </CardWrapper>
    </>
  )
}

export default ComplexCalculateExample
