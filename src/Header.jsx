import React from 'react'
import "./header.css"
import "./header,mobile.css"

function Header() {
    return (
        <>

            <section className='section-header' >

                {/* ==============================side bar start=================================================== */}

                <div className='sidebar'>
                    <div className='d-flex align-item-center'>
                        <i className='bx bx-menu fs-1 mx-3' ></i>
                        <h1 className='headp1 fs-4 mx-1'>Myntra</h1>
                    </div>


                    <div className='heade1icon d-flex align-items-center mx-4'>
                        <i className='bx bx-search-alt-2 fs-4'></i>


                        <span className="material-symbols-outlined mx-2">
                            favorite
                        </span>

                        <span className="material-symbols-outlined ">
                            shopping_bag
                        </span>
                    </div>
                </div>
                {/* ====================================side bar ends================================================== */}


                <div className='d-flex align-item-center'>



                    <img className='headimg1' src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png" alt="" />

                    <div className='d-flex header align-items-center w-100' >

                        <div className=' divp1'>
                            {/* ============================ul men list starts======================================== */}
                            <ul className='ul-Men' >
                                <li className='headp1 mt-4' >MEN</li>
                                <li className='bot-line'></li>

                                <ul className="ul-Men-list" style={{ marginLeft: "-1.9rem" }}>
                                    <section className='Men-wear-sec'>


                                        <div className='top-wear-div'>
                                            <ul className='sub-men-list'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "5px" }}>Topwear</li>
                                                <li className="men-products">T-shirts</li>
                                                <li className="men-products">Casual Shirts</li>
                                                <li className="men-products">Formal Shirts</li>
                                                <li className="men-products">Sweatshirts</li>
                                                <li className='men-products'>Sweaters</li>
                                                <li className="men-products">Jackets</li>
                                                <li className="men-products">Blazers & Coats</li>
                                                <li className="men-products">Suits</li>
                                                <li className="men-products">Rain Jackets</li>
                                            </ul>
                                            {/* ==========================top wear ends======================== */}

                                            {/* =============================Indian & festive wear starts======================= */}
                                            <ul className='sub-men-list'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "5px", marginTop: "2rem" }}>Indian & Festive Wear</li>
                                                <li className="men-products">Kurta & Kurta Sets</li>
                                                <li className="men-products">Sherwanis</li>
                                                <li className="men-products">Nehru Jackets</li>
                                                <li className="men-products">Dhotis</li>
                                            </ul>
                                        </div>

                                        {/* =============================Indian & festive wear ends======================= */}

                                        {/* ==================================Bottom wear starts=================================== */}
                                        <div className="Bottom-wear-div">
                                            <ul className='sub-men-list2'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "5px" }}>Bottomwear</li>
                                                <li className="men-products">Jeans</li>
                                                <li className="men-products">Casual Trouser</li>
                                                <li className="men-products">Formal Trouser</li>
                                                <li className="men-products">Shorts</li>
                                                <li className="men-products">Track Pants & Joggers</li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "5px", marginTop: "2rem" }}><a href="" style={{ color: "rgb(248, 2, 84)", fontWeight: "500", textDecoration: "none" }}>Innerwear & Sleepwear </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Brief & Trunks
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Boxers</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Vests</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sleepwear & Loungwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Thermals</a></li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "2rem", marginTop: "1rem" }}>
                                                    <a href=" " style={{ color: "rgb(248, 2, 84)", fontWeight: "500", textDecoration: "none" }}>Plus Size</a>
                                                </li>
                                            </ul>

                                        </div>


                                        {/* ==================================Bottom wear ends=================================== */}


                                        {/* ======================================footewear starts========================================== */}


                                        <div className="Bottom-wear-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "5px" }}><a href="" style={{ color: "rgb(248, 2, 84)", fontWeight: "500", textDecoration: "none" }}>Footerwear </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Casual Shoes
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Shoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Formula hoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sneakers</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sandals & Floaters</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Flip Flops</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Socks</a></li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "2rem", marginTop: "1rem" }}>
                                                    <a href=" " style={{ color: "rgb(248, 2, 84)", fontWeight: "500", textDecoration: "none" }}>Personal Cards & Grooming</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "2rem" }}>
                                                    <a href=" " style={{ color: "rgb(248, 2, 84)", fontWeight: "500", textDecoration: "none" }}>Sunglasses & Frames</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li style={{ color: "rgb(248, 2, 84)", fontWeight: "500", marginBottom: "3.3rem", }}>
                                                    <a href=" " style={{ color: "rgb(248, 2, 84)", fontWeight: "500", textDecoration: "none" }}>Watches</a>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* ======================================footewear ends========================================== */}

                                        {/* ==========================================sports and gadgets============================================ */}
                                        <div className="Bottom-wear-div">


                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-2' style={{ fontWeight: "500", textDecoration: "none" }}>Sports & Active Wear </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Sposts Shoes
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sposts Shoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Sandals</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Track Pants & Shorts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tracksuits</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Jackets & Sweatshirts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Accsssones</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Swimwear</a></li>
                                            </ul>

                                            {/* =====================================Gadgets=============================================== */}
                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px", marginTop: "3.5rem" }}><a href="" className='head-topic-2' style={{ fontWeight: "500", textDecoration: "none" }}>Gadgets</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Smart Wearables
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Fitness Gadgets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Headphones</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Speakers</a></li>
                                            </ul>

                                        </div>


                                        {/* ==========================================sports and gadgets============================================ */}

                                        {/* ==========================================fashion Accsssories starts=========================================== */}
                                        <div className="Bottom-wear-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-2' style={{ fontWeight: "500", textDecoration: "none" }}>Fashion Accessories </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Wallets
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Belts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Perfumes & Body Mists</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Trimmers</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Deodorants</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none", paddingRight: "1rem" }}>Ties, Cuffinks & Pockets Square</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Accessories Gift sets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Caps & Hats</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Mufflers,Scarves & Gloves</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Phone Case</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Rings & Wristwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Helmets</a></li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "1.3rem", marginTop: "1rem" }}>
                                                    <a href=" " className='head-topic-2' style={{ fontWeight: "500", textDecoration: "none" }}>Bags & Backpacks</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-2' style={{ fontWeight: "500" }}>
                                                    <a href=" " style={{ color: "rgb(248, 2, 84)", fontWeight: "500", textDecoration: "none" }}>Luggages & Trolleys</a>
                                                </li>
                                            </ul>
                                        </div>


                                        {/* ==========================================fashion Accsssories ends=========================================== */}
                                    </section>
                                </ul>
                            </ul>

                            {/* ==========================================================ul-men-list ends====================================== */}



                            {/*  =============================================ul-women list starts============================================= */}

                            <ul className='ul-Men' style={{ height: "10vh" }}>

                                <li className='headp1 mt-4'>WOMAN</li>

                                <ul className="ul-women-list" style={{ marginLeft: "-6rem" }}>
                                    <section className='Men-wear-sec'>


                                        <div className='women-clothing-list'>
                                            <ul className='sub-men-list'>
                                                <li className='head-topic-1' style={{ marginBottom: "5px" }}><a href=""> Indian & Fusion Wear</a></li>
                                                <li className="men-products"><a href="">Kurtas & suits</a></li>
                                                <li className="men-products"><a href="">Kurtis,Tunics & Tops</a></li>
                                                <li className="men-products"><a href="">Sarees</a></li>
                                                <li className="men-products"><a href="">Ethnic Wear</a></li>
                                                <li className='men-products'><a href="">Leggings,Salwars & Churidars</a></li>
                                                <li className="men-products"><a href="">Skirts & Palazzos</a></li>
                                                <li className="men-products"><a href="">Dress Materials</a></li>
                                                <li className="men-products"><a href="">Lehenga Cholis</a></li>
                                                <li className="men-products"><a href="">Dupattas & Shawls</a></li>
                                                <li className="men-products"><a href="">Jackets</a></li>
                                            </ul>
                                            {/* ==========================top wear ends======================== */}

                                            {/* =============================Indian & festive wear starts======================= */}
                                            <ul className='sub-men-list'>
                                                <li className='head-topic-1' style={{ marginBottom: "5px", marginTop: "2rem" }}><a href="">Belts, Scarves & More</a></li>
                                            </ul>

                                            <ul className='sub-men-list'>
                                                <li className='head-topic-1' style={{ marginBottom: "5px", marginTop: "1rem" }}><a href="">Watches & Wearables</a></li>
                                            </ul>


                                        </div>

                                        {/*=======================================================Indian & festive wear ends======================= */}

                                        {/* ==================================Western Wear=================================== */}
                                        <div className="women-clothing-list">
                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ marginBottom: "5px" }}><a href="">Western Wear</a></li>
                                                <li className="men-products"><a href="">Dresses</a></li>
                                                <li className="men-products"><a href="">Tops</a></li>
                                                <li className="men-products"><a href="">T-shirts</a></li>
                                                <li className="men-products"><a href="">Trouser & Capris</a></li>
                                                <li className="men-products"><a href="">Shorts & Skirts</a></li>
                                                <li className="men-products"><a href="">Co-ords</a></li>
                                                <li className="men-products"><a href="">Playsuits</a></li>
                                                <li className="men-products"><a href="">Jumpsuits</a></li>
                                                <li className="men-products"><a href="">Shrugs</a></li>
                                                <li className="men-products"><a href="">Sweaters & Sweatshirts</a></li>
                                                <li className="men-products"><a href="">Jackets & coats</a></li>
                                                <li className="men-products"><a href="">Blazers & Waistcoats</a></li>
                                            </ul>

                                            <ul className='head-topic-1'>
                                                <li style={{ fontWeight: "500", marginBottom: "2rem", marginTop: "1rem" }}>
                                                    <a href=" " style={{ textDecoration: "none" }}>Plus Size</a>
                                                </li>
                                            </ul>

                                        </div>


                                        {/*=======================================Western wear ends=================================== */}


                                        {/* ======================================footewear starts========================================== */}


                                        <div className="women-clothing-list">

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ marginBottom: "5px" }}><a href="" style={{ textDecoration: "none" }}>Maternity </a></li>

                                                <li className='head-topic-1' style={{ marginBottom: "5px" }}><a href="" style={{ textDecoration: "none" }}>Sunglasses & Frames</a></li>


                                                <li className='head-topic-1' style={{ marginBottom: "5px" }}><a href="" style={{ textDecoration: "none" }}>Footerwear </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Flats
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Casual Shoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Heels</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Boots</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Shoes & FLoters</a></li>

                                                {/* ======================================Sports & Active Wear=========================== */}
                                                <li className='head-topic-1' style={{ marginBottom: "5px", marginTop: "1rem" }}><a href="" style={{ textDecoration: "none" }}>Sports & Active Wear</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Clothing
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Footerwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Accessories</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Equipment</a></li>
                                            </ul>





                                        </div>

                                        {/* ======================================footewear ends========================================== */}

                                        {/* ==========================================Lingerie & sleepwear============================================ */}
                                        <div className="women-clothing-list">


                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ marginBottom: "5px" }}><a href="" style={{ textDecoration: "none" }}>Lingerie & Sleepwear</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Bra
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Brief</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Shapewear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sleepwear & Loungewear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Swimwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Camisol & Thermals</a></li>
                                            </ul>

                                            {/* ============================Beauty & Personal Care========================== */}

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ marginBottom: "5px", marginTop: "0.8rem" }}><a href="" style={{ textDecoration: "none" }}>Beauty & Personal Care</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Makeup
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Skincare</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Premium Beauty</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Lipstick</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Fragrances</a></li>
                                            </ul>



                                        </div>


                                        {/* ==========================================Lingerie & sleepwear============================================ */}

                                        {/* ==========================================Gadgets Jewellery Backpacks=========================================== */}
                                        <div className="women-clothing-list">

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-1' style={{ fontWeight: "500", textDecoration: "none" }}>Gadgets </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Smart Wearables
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Fitness Gadget</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Headphones</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Speakers</a></li>
                                            </ul>


                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-1' style={{ fontWeight: "500", textDecoration: "none" }}>Jewellery </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Fashion Jewellery
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Fine Jewellery</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Earrning</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Speakers</a></li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ marginTop: "1rem" }}>
                                                    <a href=" " style={{ textDecoration: "none" }}>Backpacks</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ marginTop: "1rem" }}>
                                                    <a href=" " style={{ textDecoration: "none" }}>Handbags,Bags & wallets</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-1' style={{ marginTop: "1rem" }}>
                                                    <a href=" " style={{ textDecoration: "none" }}>Luggages & Trolleys</a>
                                                </li>
                                            </ul>
                                        </div>


                                        {/* ==========================================fashion Accsssories ends=========================================== */}
                                    </section>
                                </ul>
                            </ul>
                            {/* =========================== */}

                            {/* ====================ul-women list ends================ */}


                            {/* ========================ul-kids-list starts================================================ */}

                            <ul className='ul-Men' style={{ height: "10vh" }}>

                                <li className='headp1 mt-4'>KIDS</li>



                                <ul className="ul-kids-list" style={{ marginLeft: "-10rem" }}>
                                    <section className='Men-wear-sec'>


                                        <div className='boys-clothing-list'>
                                            <ul className='sub-men-list'>
                                                <li className='head-topic-3' style={{ fontWeight: "500", marginBottom: "5px" }}>Boys Clothings</li>
                                                <li className="men-products"><a href="">T-shirts</a></li>
                                                <li className="men-products"><a href="">Shirts</a></li>
                                                <li className="men-products"><a href="">Shorts</a></li>
                                                <li className="men-products"><a href="">Jeans</a></li>
                                                <li className='men-products'><a href="">Trousers</a></li>
                                                <li className="men-products"><a href="">Clothing Sets</a></li>
                                                <li className="men-products"><a href="">Ethnic Wear</a></li>
                                                <li className="men-products"><a href="">Track Pants & Pyjamas</a></li>
                                                <li className="men-products"><a href="">Jacket,Sweater & Sweatshirts</a></li>
                                                <li className="men-products"><a href="">Party Wear</a></li>
                                                <li className="men-products"><a href="">InnerWear & Thermals</a></li>
                                                <li className="men-products"><a href="">Nightwear & Loungewear</a></li>
                                                <li className="men-products"><a href="">Value Packs</a></li>

                                            </ul>
                                        </div>


                                        {/* ==========================Boys clothings ends======================== */}




                                        {/* ==================================Girls Clothing starts=================================== */}

                                        <div className="girls-clothing-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Girls Clothing </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Dresses
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tops</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tshirts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Clothing Sets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Lehenga Choli</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Kurta Sets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Party wear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Dungarees & Jumpsuits</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Skirts & shorts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tights & Leggings</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Jenas,Trousers & Capris</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Jackets,Sweaters & Sweatshirts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>InnerWear & Thermals</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Nightwear & Loungwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Value Packs</a></li>
                                            </ul>
                                        </div>
                                        {/* ==================================Girls Clothing ends=================================== */}


                                        {/* ======================================Footwear starts============================================= */}
                                        <div className="foot-wear-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Footwear</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Casual Shoes
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Flipflops</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Shoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Flats</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sandals</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Heels</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Schools Shoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Scoks</a></li>
                                            </ul>


                                            {/* =============================================Toys & Games Starts===================================== */}

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px", marginTop: "1.5rem" }}><a href="" className='head-topic-3' style={{ textDecoration: "none" }}>Toys & Games</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Learning & Development
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Activity Toys</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Soft Toys</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Action Figure Player</a></li>
                                            </ul>

                                            {/* ================================================Toys & Games ends========================================== */}

                                        </div>
                                        {/* ======================================Footwear starts============================================= */}




                                        {/* ========================================Infants starts============================================= */}


                                        <div className="infants-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Infants</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Bodysuits
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Rompers & Sleepsuits</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Clothing Sets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tshirts & Tops</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Dresses</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Bottom Wear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Writer Wear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Innerwear & Sleepwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Infant Care</a></li>
                                            </ul>


                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "1.3rem", marginTop: "1rem" }}>
                                                    <a href=" " className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Home & Bath</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-3' style={{ fontWeight: "500" }}>
                                                    <a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Personal Care</a>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* ======================================================Infants ends============================================== */}



                                        {/* ======================================================Kids Accessories Starts================================================ */}
                                        <div className="kids-accessories-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Kids Accessories</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Bags & Backpacks
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Watches</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Jewellery & Hair accessories</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sunglasses</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Masks & Protective Gear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Caps & Hats</a></li>
                                            </ul>

                                            {/* =============================================Toys & Games Starts===================================== */}


                                            {/* =============================================Brands Starts========================================== */}
                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px", marginTop: "1.5rem" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Brands</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        H&M
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Max Kids</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Pantaloons</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none", paddingRight: "1.1rem" }}>United Color Of Benetton Kids</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Yk</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>U.S.Polo Assn.Kids</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Mothercare</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Hrx</a></li>
                                            </ul>


                                            {/* =============================================Brands Ends========================================== */}

                                            {/* ================================================Toys & Games ends========================================== */}

                                        </div>


                                        {/* ======================================================Kids Accessories ends================================================ */}
                                    </section>
                                </ul>
                            </ul>
                            {/* ============================== */}


                            {/* ========================ul-kids-list ends================================================  */}

                            {/* ============================ul-Home & Living starst============================================ */}

                            <ul className='ul-Men' style={{ height: "10vh" }}>
                                <li className=' headp1 mt-4'>HOME & LIVING</li>



                                <ul className="ul-Home-Living-list" >
                                    <section className='Men-wear-sec'>

                                    {/* =================================BED LINE & FURNISHING STARTS================================================ */}
                                        <div className='home-living-div'>
                                            <ul className='sub-men-list'>
                                                <li className='head-topic-4' style={{ fontWeight: "500", marginBottom: "5px" }}>Bed Line & Furnishing</li>
                                                <li className="men-products"><a href="">Bed Runners</a></li>
                                                <li className="men-products"><a href="">Matters Protectors</a></li>
                                                <li className="men-products"><a href="">Bedsheets</a></li>
                                                <li className="men-products"><a href="">Bedding Sets</a></li>
                                                <li className='men-products'><a href="">Blankets,Quits & Dohars</a></li>
                                                <li className="men-products"><a href="">Pillows & Pillow Covers</a></li>
                                                <li className="men-products"><a href="">Bed Covers</a></li>
                                                <li className="men-products"><a href="">Diwan Sets</a></li>
                                                <li className="men-products"><a href="">Chair Pads & Cover</a></li>
                                                <li className="men-products"><a href="">Sofa Covers</a></li>
                                            </ul>

                                            <ul className='sub-men-list'>
                                                <li className='head-topic-4' style={{ fontWeight: "500", marginBottom: "5px",marginTop:"1rem" }}>Flooring</li>
                                                <li className="men-products"><a href="">Floor Runners</a></li>
                                                <li className="men-products"><a href="">Carpets</a></li>
                                                <li className="men-products"><a href="">Floor Mats & Dhuries</a></li>
                                                <li className="men-products"><a href="">Door Mats</a></li>
                                            </ul>
                                        </div>


                                        {/* =================================BED LINE & FURNISHING ENDS================================================  */}



                                        {/* ==================================ul-Bath starts=================================== */}

                                        <div className="home-living-div2">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Bath </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Bath Towels
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Hand & Face Towels</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Beach Towels</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Towels Set</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Bath Rugs</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Bathroom Accessories</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Shower Curtains</a></li>
                                            </ul>

                                            {/* =======================================Lamps & Lighting STARTS=========================================== */}

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px",marginTop:"2rem" }}><a href="" className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Lamps & Lighting</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Floor Lamp
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Ceiling Lamps</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Table Lamps</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Wall Lamps</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Outdoor Lapms</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>String Lamps</a></li>
                                            </ul>

                                            {/* =======================================Lamps & Lighting ENDS=========================================== */}
                                        </div>
                                        {/* ==================================ul-BATH ends=================================== */}


                                        {/* ======================================ul-Home Decor starts============================================= */}
                                        <div className="home-living-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Home Decor</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Plants & Planters
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Aromas & Candles</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Clocks</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Mirror</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Wall Decor</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Festive Decor</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Pooja Essentials</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Wall Shelves</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Foutains</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Showpeices</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Ottoman</a></li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "1.3rem", marginTop: "1rem" }}>
                                                    <a href=" " className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Cushions & Cushhion Covers</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-3' style={{ fontWeight: "500" }}>
                                                    <a href="" className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Curtains</a>
                                                </li>
                                            </ul>

                                        </div>
                                        {/* ======================================ul-Home Decor starts============================================= */}




                                        {/* ========================================ul-Kitchen & Tbable starst============================================= */}


                                        <div className="home-living-div2">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Home Gifts Sets</a></li>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Kitchen & Table</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Table Runners
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Dinnerware & Serverware</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Cups and Mugs</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Bakeware & Cookware</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Kitchen Storage & Tools</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Bar & Drinking</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Table Cover & Furnishing</a></li>


                                            {/* ==================================================ul-Storage Starts=============================================== */}
                                                
                                            <li style={{ fontWeight: "500", marginBottom: "5px",marginTop:"1rem" }}><a href="" className='head-topic-4' style={{ fontWeight: "500", textDecoration: "none" }}>Kitchen & Table</a></li>
                                            <li className="men-products">
                                                <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                    Bins
                                                </a>
                                            </li>

                                            <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Hangers</a></li>
                                            <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Organisers</a></li>
                                            <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Hooks & Holders</a></li>
                                            <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Laundry Bags</a></li>


                                            {/* ==================================================ul-Storage Ends=============================================== */}
                                            </ul>


                                            
                                        </div>

                                        {/* ======================================================ul-Kitchen & Tbable ends============================================== */}


                                        <div className="kids-accessories-div">

                                           {/* =============================================Brands Starts========================================== */}
                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Brands</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        H&M
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Max Kids</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Marks & Spencer</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Home Center</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Spaces</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>D`Decor</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Story@Home</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Pure Home & Living</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Swayam</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Raymond Home</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Maspar</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>My Trident</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Cortina</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Random</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Ellementry</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>ROMME</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>SEJ by Nisha Gupta</a></li>
                                            </ul>


                                            {/* =============================================Brands Ends========================================== */}
                                        </div>
                                    </section>
                                </ul>
                            </ul>


                            {/* ============================ul-Home & Living ends ============================================ */}

                            {/* ========================================= */}

                            {/* ================================ul-Beauty starts===================================================== */}

                            <ul className='ul-Men' style={{ height: "10vh" }}>
                                <li className='headp1 mt-4'>BEAUTY</li>





                                <ul className="ul-Home-Living-list">
                                    <section className='Men-wear-sec'>


                                        <div className='boys-clothing-list'>
                                            <ul className='sub-men-list'>
                                                <li className='head-topic-3' style={{ fontWeight: "500", marginBottom: "5px" }}>Boys Clothings</li>
                                                <li className="men-products"><a href="">T-shirts</a></li>
                                                <li className="men-products"><a href="">Shirts</a></li>
                                                <li className="men-products"><a href="">Shorts</a></li>
                                                <li className="men-products"><a href="">Jeans</a></li>
                                                <li className='men-products'><a href="">Trousers</a></li>
                                                <li className="men-products"><a href="">Clothing Sets</a></li>
                                                <li className="men-products"><a href="">Ethnic Wear</a></li>
                                                <li className="men-products"><a href="">Track Pants & Pyjamas</a></li>
                                                <li className="men-products"><a href="">Jacket,Sweater & Sweatshirts</a></li>
                                                <li className="men-products"><a href="">Party Wear</a></li>
                                                <li className="men-products"><a href="">InnerWear & Thermals</a></li>
                                                <li className="men-products"><a href="">Nightwear & Loungewear</a></li>
                                                <li className="men-products"><a href="">Value Packs</a></li>

                                            </ul>
                                        </div>


                                        {/* ==========================Boys clothings ends======================== */}




                                        {/* ==================================Girls Clothing starts=================================== */}

                                        <div className="girls-clothing-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Girls Clothing </a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Dresses
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tops</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tshirts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Clothing Sets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Lehenga Choli</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Kurta Sets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Party wear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Dungarees & Jumpsuits</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Skirts & shorts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tights & Leggings</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Jenas,Trousers & Capris</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Jackets,Sweaters & Sweatshirts</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>InnerWear & Thermals</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Nightwear & Loungwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Value Packs</a></li>
                                            </ul>
                                        </div>
                                        {/* ==================================Girls Clothing ends=================================== */}


                                        {/* ======================================Footwear starts============================================= */}
                                        <div className="foot-wear-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Footwear</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Casual Shoes
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Flipflops</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sports Shoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Flats</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sandals</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Heels</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Schools Shoes</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Scoks</a></li>
                                            </ul>


                                            {/* =============================================Toys & Games Starts===================================== */}

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px", marginTop: "1.5rem" }}><a href="" className='head-topic-3' style={{ textDecoration: "none" }}>Toys & Games</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Learning & Development
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Activity Toys</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Soft Toys</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Action Figure Player</a></li>
                                            </ul>

                                            {/* ================================================Toys & Games ends========================================== */}

                                        </div>
                                        {/* ======================================Footwear starts============================================= */}




                                        {/* ========================================Infants starts============================================= */}


                                        <div className="infants-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Infants</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Bodysuits
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Rompers & Sleepsuits</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Clothing Sets</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Tshirts & Tops</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Dresses</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Bottom Wear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Writer Wear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Innerwear & Sleepwear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Infant Care</a></li>
                                            </ul>


                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "1.3rem", marginTop: "1rem" }}>
                                                    <a href=" " className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Home & Bath</a>
                                                </li>
                                            </ul>

                                            <ul className='sub-men-list2'>
                                                <li className='head-topic-3' style={{ fontWeight: "500" }}>
                                                    <a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Personal Care</a>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* ======================================================Infants ends============================================== */}



                                        {/* ======================================================Kids Accessories Starts================================================ */}
                                        <div className="kids-accessories-div">

                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Kids Accessories</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        Bags & Backpacks
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Watches</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Jewellery & Hair accessories</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Sunglasses</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Masks & Protective Gear</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Caps & Hats</a></li>
                                            </ul>

                                            {/* =============================================Toys & Games Starts===================================== */}


                                            {/* =============================================Brands Starts========================================== */}
                                            <ul className='sub-men-list2'>
                                                <li style={{ fontWeight: "500", marginBottom: "5px", marginTop: "1.5rem" }}><a href="" className='head-topic-3' style={{ fontWeight: "500", textDecoration: "none" }}>Brands</a></li>
                                                <li className="men-products">
                                                    <a href="" style={{ color: "black", textDecoration: "none" }}>
                                                        H&M
                                                    </a>
                                                </li>

                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Max Kids</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Pantaloons</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none", paddingRight: "1.1rem" }}>United Color Of Benetton Kids</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Yk</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>U.S.Polo Assn.Kids</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Mothercare</a></li>
                                                <li className="men-products"><a href="" style={{ color: "black", textDecoration: "none" }}>Hrx</a></li>
                                            </ul>


                                            {/* =============================================Brands Ends========================================== */}

                                            {/* ================================================Toys & Games ends========================================== */}

                                        </div>


                                        {/* ======================================================Kids Accessories ends================================================ */}
                                    </section>
                                </ul>
                            </ul>
                            {/* ================================================== */}

                            {/* ====================================ul-beauty ends========================================================== */}

                            <ul style={{ height: "10vh" }}>
                                <li className='headp1 mt-4'>STUDIO</li>
                            </ul>


                            {/* ======================================================= */}
                        </div>
                        {/* ===================================== */}
                        <div className=' d-flex ' style={{ width: "100%", height: "10vh" }}>
                            <input type="search" className='form-control h-75 w-100' placeholder='Search for products,brands and more' />


                            <div className=' mx-3' style={{ cursor: "pointer" }}>
                                <span className="material-symbols-outlined mx-2">
                                    person
                                </span>
                                <p className='fs-6'>Profile</p>
                            </div>

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
                        {/* ============================== */}

                    </div>
                </div>

            </section>


        </>
    )
}

export default Header