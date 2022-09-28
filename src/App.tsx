import { useState } from 'react'
import { css } from '@emotion/react'

const App = () => {
  const [count, setCount] = useState(0)
  const styles = {
    container: css`
      padding: 20px;
    `,
  }
  return (
    <div className='container' css={styles.container}>
      <div className='button'>OK</div>
    </div>
  )
}

export default App
