import React from "react"
import CardWrapper from "../../common/Card"

const withPropsStyles = (Components) => {
  return (props) => (
    <CardWrapper>
      <Components {...props} name="new name"/>
    </CardWrapper>
  )
}

export default withPropsStyles
