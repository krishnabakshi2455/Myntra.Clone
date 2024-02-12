import React from 'react'
import "./header.css"
import "./header,mobile.css"
function Header() {
    return (
        <>

            <section>

                <div className='d-flex ' style={{ boxShadow: "3px 3px 8px grey", position: "fixed top", width: "100%" }}>

                    {/* ==============================side bar start=================================================== */}
                    <div className='sidebar'>
                        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pmd-navbar pmd-z-depth">
                            <a href="javascript:void(0);" data-target="basicSidebar" data-placement="left" className="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle"><i className="material-icons md-light">menu</i></a>
                            <a className="navbar-brand" href="#">Brand</a>

                            <div className="pmd-navbar-right-icon ml-auto">
                                <a href="javascript:void(0);" className="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect"><i className="material-icons pmd-sm md-light">search</i></a>
                            </div>
                        </nav>

                        <section id="pmd-main">


                            <aside id="basicSidebar" className="pmd-sidebar bg-light pmd-z-depth" role="navigation">
                                <ul className="nav flex-column pmd-sidebar-nav">
                                    <li className="nav-item pmd-user-info">
                                        <a data-toggle="collapse" href="#collapseExample" className="nav-link btn-user media align-items-center">
                                            <img className="mr-3" src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" alt="avatar" />
                                            <div className="media-body">
                                                User
                                            </div>
                                            <i className="material-icons md-light ml-2 pmd-sm">more_vert</i>
                                        </a>
                                        <ul className="collapse" id="collapseExample" data-parent="#basicSidebar">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <i className="material-icons pmd-list-icon pmd-sm">delete</i>
                                                    <span className="media-body">View Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <i className="material-icons pmd-list-icon pmd-sm">delete</i>
                                                    <span className="media-body">Settings</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <i className="material-icons pmd-list-icon pmd-sm">delete</i>
                                                    <span className="media-body">Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <i className="material-icons pmd-list-icon pmd-sm">star</i>
                                            <span className="media-body">Stared</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="material-icons pmd-list-icon pmd-sm">send</i>
                                            <span className="media-body">Sent Email</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="material-icons pmd-list-icon pmd-sm">drafts</i>
                                            <span className="media-body">Drafts</span>
                                        </a>
                                    </li>
                                </ul>
                            </aside>


                            <div className="pmd-sidebar-overlay"></div>


                            <div className="pmd-content custom-pmd-content" id="content">
                                <h2 className="headline">Sidebar Constructor</h2>
                            </div>
                            </section>


                            </div>

                            {/* ====================================side bar ends================================================== */}





                            <img className='headimg1' src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png" alt="" />

                            <div className='d-flex header' style={{ position: "fixed top", width: "100%" }}>

                                <p className='headp1'>MEN</p>
                                <p className='headp1'>WOMAN</p>
                                <p className='headp1'>KIDS</p>
                                <p className='headp1'>HOME & LIVING</p>
                                <p className='headp1'>BEAUTY</p>
                                <p className='headp1'>STUDIO</p>
                                {/* ===================================== */}
                                <div className='mt-3 d-flex ' style={{ width: "45%", height: "8vh" }}>


                                    <div className='w-25 mx-3  w-75'>
                                        <input type="search" className='form-control' placeholder='Search for products,brands and more' />
                                    </div>

                                    <div className=' mx-3'>
                                        <span className="material-symbols-outlined mx-2">
                                            person
                                        </span>
                                        <p className='fs-6'>Profile</p>
                                    </div>

                                    <div className='  mx-3'>
                                        <span className="material-symbols-outlined mx-2">
                                            favorite
                                        </span>
                                        <p className='fs-6'>Wishlist</p>
                                    </div>

                                    <div className=' mx-3'>
                                        <span className="material-symbols-outlined ">
                                            shopping_bag
                                        </span>
                                        <p className='fs-6'>Bag</p>
                                    </div>

                                </div>
                                {/* ============================== */}

                            </div>

                            {/* ========================== */}

                    </div>

            </section>


        </>
    )
}

export default Header