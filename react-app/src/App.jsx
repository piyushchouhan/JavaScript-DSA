import { useState, useRef, useEffect } from 'react'
import InputField from './components/InputField'

const initialState = { name: '', email: '', password: '' }

function App() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(null)
  const nameRef = useRef(null)

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
    setForm(initialState)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', fontFamily: 'sans-serif' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" value={form.name} onChange={handleChange} inputRef={nameRef} />
        <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: '24px', padding: '12px', background: '#f0f9f0', borderRadius: '6px' }}>
          <strong>Submitted:</strong>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App
