import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold my-8">Vite + React</h1>

      <div className="card p-8 border rounded-xl shadow-sm bg-card text-card-foreground">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p className="mt-4 text-muted-foreground">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs mt-8 text-sm text-muted-foreground">
        Click on the Vite and React logos to learn more
      </p>

      {/* Route con sẽ được render ở đây */}
      <div className="mt-8">
        <Outlet />
      </div>
    </>
  )
}

export default App
