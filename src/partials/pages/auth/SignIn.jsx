import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'

const SignIn = () => {
  try{
    const { signIn } = useAuth()
  }
  catch(error) { }


  return (
    <div>SignIn</div>
  )
}

export default SignIn