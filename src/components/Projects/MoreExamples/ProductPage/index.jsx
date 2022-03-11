import React from 'react'
import * as Styled from "./styles"
import Header from "./Header"

const ProductPage = () => {
  return (
    <Styled.Container>
      <Header />
      <div flex>
        <div flex column>
          <h1>easy order</h1>
          <h1>easy payment</h1>
          <p>lorem ipsum lorem ipsum dummy text</p>
<div full widt>
          <button>type your email</button>{/* aca va styled button de header pero con mas estios */}
</div>
          <div flex>
            <span>left item</span>
            <span>right item</span>
          </div>
        </div>
        <div>imagen</div>
      </div>
      <div>
        aca van todas las imagenes
      </div>
      <br />
      <br />
      <br />
      <div>
        <div>imagen</div>
        <div>
          <h1>keep your buisneess growth & sales</h1>
          <p>aca va el lorem ipsum</p>
          <button>explore more </button> {/* aca va styled button de header */}
        </div>
      </div>
    </Styled.Container>
  )
}

export default ProductPage
