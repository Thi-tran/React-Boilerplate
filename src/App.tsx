import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Hello {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
