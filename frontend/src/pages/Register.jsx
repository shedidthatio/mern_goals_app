import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  // onChange function
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // onSubmit function
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please register to create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Create your password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm your password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit to create your account
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
