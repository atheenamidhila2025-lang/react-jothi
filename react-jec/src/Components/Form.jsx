import React from 'react'

const SamForm = () => {
  return (
    <>
    <h1>Form Task</h1>
    
    <form>
      <label htmlForm="name">Name:</label>
      <input type="text" id="name" name="name"/>
      <br />
      <label htmlForm="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlForm="password">Password:</label>
      <input type="password" id="password" name="password" /> 
      <br />
       <label htmlForm=" confirm password">Confirm Password:</label>
      <input type="password" id="Confirm password" name="Confirm password" />
      <br />

      <button type="submit">Submit</button>
    </form> 
    </>     
   
  )
}
export default SamForm