import React from 'react'

function LoginForm() {
  return (
    <>
    <section style={{marginTop:"15%"}}>

      <form action="/action_page.php">
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div className="checkbox">
          <label><input type="checkbox" /> Remember me</label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </section>
        
    </>
  )
}

export default LoginForm