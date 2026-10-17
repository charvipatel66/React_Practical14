
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [student, setStudent] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    setStudent({ name, email, course })
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-5">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-violet-100 text-violet-700 rounded-2xl text-2xl mb-4">
            ✦
          </div>

          <h1 className="text-3xl font-bold text-slate-800">
            Student Registration
          </h1>

          <p className="text-slate-500 mt-2">
            Enter your details to get started
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Patel"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Course
              </label>

              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition"
              >
                <option value="">Select your course</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="B.Com">B.Com</option>
                <option value="MCA">MCA</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition duration-200"
            >
              Submit Registration
            </button>

          </form>

          {/* Submitted Details */}
          {student && (
            <div className="mt-6 border border-emerald-200 bg-emerald-50 rounded-xl p-5">

              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>

                <h2 className="font-semibold text-emerald-800">
                  Registration Successful
                </h2>
              </div>

              <div className="space-y-2 text-sm text-slate-700">
                <p><b>Name:</b> {student.name}</p>
                <p><b>Email:</b> {student.email}</p>
                <p><b>Course:</b> {student.course}</p>
              </div>

            </div>
          )}

        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Student Registration Portal
        </p>

      </div>
    </div>
  )
}

export default App
