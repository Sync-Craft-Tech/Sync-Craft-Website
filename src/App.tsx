import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Skeleton } from '@/components/ui/skeleton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='hero min-h-screen bg-base-200 flex flex-col items-center justify-center bg-primary/10'>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  )
}

export default App
