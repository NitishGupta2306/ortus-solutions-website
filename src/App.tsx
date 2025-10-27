import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Ortus Solutions
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
          Data Pipelines & Automation Specialist
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          Coming soon...
        </p>
      </div>
    </div>
  )
}

export default App
