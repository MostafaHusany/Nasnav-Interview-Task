import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import Product from "./pages/product/Product";
import axios from 'axios';

function App() {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = (flag = null) => {
    Boolean(flag) ? setShowCart(flag) : setShowCart((prevState) => {
      return !prevState;
    })
  };

  const [product, setProduct] = useState({
    id : Math.round(Math.random() * 1000),
    description : 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    brand : './images/add-brand.svg',
    rating  : '4.9 of 5',
    rated_users : '22 Rates',
    category : 'Men',
    price : 9999,

    main_image : '/images/product1-1.png',
    images : [
              '/images/product/p6.png',
              '/images/product/p1.png', '/images/product/p2.png', 
              '/images/product/p3.png', '/images/product/p4.png',  
            ]
  });
  
  const [similarProducts, setSimilarProducts] = useState([
    {
      title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      main_img: './images/sugested_products/Group575.png',
      brand_img : './images/add-brand.svg'
    },

    {
      title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      main_img: './images/sugested_products/Group583.png',
      brand_img : './images/add-brand.svg'
    },

    {
      title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      main_img: './images/sugested_products/Group589.png',
      brand_img : './images/add-brand.svg'
    },

    {
      title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      main_img: './images/sugested_products/Group597.png',
    },
  ]);

  const [cart, setCart] = useState({
    count : 0,
    total : 0,
    products_id : [],
    products : {}
  });

  useEffect(() => {
    /**
     * # In case there is not json server set
     * data to the default one to keep app working
     */

    axios.get('http://localhost:3001/product')
    .then(res => {
      const { data, status } = res;
      if (status === 200) {
        setProduct(data);
      } else {
        throw 'error';
      }
    })
    .catch(err => {
      setProduct({
        id : Math.round(Math.random() * 1000),
        description : 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        brand : './images/add-brand.svg',
        rating  : '4.9 of 5',
        rated_users : '22 Rates',
        category : 'Men',
        price : 9999,

        main_image : '/images/product1-1.png',
        images : [
          '/images/product/p6.png',
          '/images/product/p1.png', '/images/product/p2.png', 
          '/images/product/p3.png', '/images/product/p4.png',  
        ]
      });
    });

    axios.get('http://localhost:3001/similarProducts')
    .then(res => {
      const { data, status } = res;
      if (status === 200) {
        setSimilarProducts(data);
      } else {
        throw 'error';
      }
    })
    .catch(err => {
      setSimilarProducts([
        {
          title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          price: '9,999',
          main_img: './images/sugested_products/Group575.png',
          brand_img : './images/add-brand.svg'
        },
    
        {
          title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          price: '9,999',
          main_img: './images/sugested_products/Group583.png',
          brand_img : './images/add-brand.svg'
        },
    
        {
          title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          price: '9,999',
          main_img: './images/sugested_products/Group589.png',
          brand_img : './images/add-brand.svg'
        },
    
        {
          title : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          price: '9,999',
          main_img: './images/sugested_products/Group597.png',
        }
      ]);
    });
  }, []);

  const addProductToCart = (product, quantity) => {
    /**
     * # Assuming that we have a real cart, we will need to 
     * check if the product do exists befor adding to the cart.
     * 
     * # First senario check if the product exists than update the
     * product.
     * 
     * # Second senario add new product to the cart 
     */

    if (cart.products_id.includes(product.id)) {
      const target_product = cart.products[product.id];
      target_product.quantity += quantity
      target_product.total_price = product.quantity * product.price; 
      
      setCart(prevState => {
        return {
          products : {[target_product.id] : target_product, ...prevState.products},
          products_id : [...prevState.products_id],
          total : prevState.products_id.map(pr_id => parseFloat(cart.products[pr_id].total_price)).reduce((a, b) => a + b , 0),
          count : prevState.products_id.map(pr_id => cart.products[pr_id].quantity).reduce((a, b) => a + b , 0)
        }
      });

    } else {
      product.quantity = quantity;
      product.total_price = product.quantity * product.price; 

      setCart(prevState => {
        return {
          products : {[product.id] : product, ...prevState.products},
          products_id : [product.id, ...prevState.products_id],
          count : prevState.count + 1,
          total : prevState.total + product.total_price,
          count : prevState.count + product.quantity
        }
      });
    }

    toggleCart(true);
  }

  const removeProductFromCart = (target_product_id) => {
    
    setCart(prevState => {
      return {
        products : {...prevState.products, target_product_id :  null},
        products_id : prevState.products_id.filter(product_id => product_id != target_product_id),
        total : prevState.products_id.map(pr_id => parseFloat(cart.products[pr_id].total_price)).reduce((a, b) => a + b , 0),
        count : prevState.products_id.map(pr_id => cart.products[pr_id].quantity).reduce((a, b) => a + b , 0)
      }
    });

  }

  return (
    <Layout cart={cart} showCart={showCart} toggleCart={toggleCart} removeProductFromCart={removeProductFromCart} >
      <Product product={product} toggleCart={toggleCart} addProductToCart={addProductToCart} similarProducts={similarProducts} />
    </Layout>
  );
}

export default App;
