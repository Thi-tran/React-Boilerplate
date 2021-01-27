import React, { useState } from 'react'
import styles from './App.module.scss'

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1 className={styles.title}>
        Hello {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
