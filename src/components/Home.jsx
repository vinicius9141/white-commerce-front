import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ProductCard from './ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollectionRef = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollectionRef);
      const productList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} productId={product.id} />
      ))}
    </div>
  );
};

export default Home;
