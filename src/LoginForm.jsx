import React from 'react'

function LoginForm() {
  return (
    <>
      <section className='Form-header'>
        <div className='Form-div1'>
          <img src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png" className='logo1' alt="" />

          <ul className='Form-semidiv2'>
            <li className='ul-headtitle'>MEN</li>
            <li className='ul-headtitle'>WOMEN</li>
            <li className='ul-headtitle'>KIDS</li>
            <li className='ul-headtitle'>HOME & LIVING</li>
            <li className='ul-headtitle'>STUDIO</li>
          </ul>
        </div>

        <div className='Form-div2'>
          <div className='Form-inputDiv'>
          <input type="text" placeholder='Search for products,brands and more' className='form-control'/>
          </div>

          <div className='Form-logodiv1'>
            <div className='  mx-3' style={{ cursor: "pointer" }}>
              <span className="material-symbols-outlined mx-2">
                favorite
              </span>
              <p className='fs-6'>Wishlist</p>
            </div>

            <div className=' mx-3' style={{ cursor: "pointer" }}>
              <span className="material-symbols-outlined ">
                shopping_bag
              </span>
              <p className='fs-6'>Bag</p>
            </div>
          </div>
        </div>




      </section>

      {/* <form action="/action_page.php">
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
      </form> */}
    </>
  )
}

export default LoginForm