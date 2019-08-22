import { useState, useEffect } from "react"

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [target, setTarget] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    // Checks to make sure errors object is empty and isSubmitting is true
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(target)
      setValues({})
    }
  }, [errors])

  const handleSubmit = event => {
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(values))
    setTarget(event.target)
    console.log(errors)
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
