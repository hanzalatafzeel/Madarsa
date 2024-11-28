import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import './App.css'
import Layout from "@/apps/layout"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Layout/>
        
      </div>
    </>
  )
}

export default App
