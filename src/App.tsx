import { useState } from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

const App = () => {
  const [count, setCount] = useState(0)
  const styles = {
    container: css`
      padding: 20px;

      .button {
        background-color: #eee;
        padding: 10px 20px;
        border-radius: 6px;
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        cursor: pointer;
      }
    `,
  }
  return (
    <>
      {/* <Global
        styles={css`
          ${emotionReset}
        `}
      /> */}
      <div className='container' css={[emotionReset, styles.container]}>
        <a className='button'>OK</a>
      </div>
    </>
  )
}

export default App
