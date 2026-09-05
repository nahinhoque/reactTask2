import { useState } from 'react'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!task.trim()) return

    setTasks([...tasks, task])
    setTask('')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-black mb-4">TaskManager</h2>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Add Task
          </button>
        </form>

        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-slate-700 flex items-center"
            >
              <span className="font-semibold text-blue-600 mr-2">{index + 1}.</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App