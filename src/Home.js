import React from 'react'
import Product from './Product';
import './Home.css';


function Home() {
    return(
        <div className="home">
            <img
                className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            {/** Product id, tittle, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                />
                <Product
                    id="12321341"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bown"
                    price={239}
                    rating={4}
                    image="https://www.espacios.co.com/wp-content/uploads/2019/10/KSM150PSLCA.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="12321341"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="12321341"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128 GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={5}
                    image="https://falabella.scene7.com/is/image/FalabellaCO/5411977_1?wid=1500&hei=1500&qlt=70"
                />
            </div>

            <div className="home__row">
            <Product
                    id="12321341"
                    title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor"
                    price={11.96}
                    rating={5}
                    image="https://images.samsung.com/is/image/samsung/es-curvo-lc49j890dkuxen-lc49j890dkuxen-frontblack-104369739?$PD_GALLERY_L_JPG$"
                />
            </div>

            {/** Product */}
        </div>
    )
}

export default Home
