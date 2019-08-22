const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Please enter your name"
  }
  if (values.name && values.name.length > 50) {
    errors.name = "name cannot be greater than 50 characters."
  }
  if (!values.email) {
    errors.email = "Please enter your email"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  } else if (values.email.length > 100) {
    errors.email = "Email cannot be greater than 100 characters."
  }
  if (!values.message) {
    errors.message = "Please enter a message"
  }
  return errors
}
export default validate
