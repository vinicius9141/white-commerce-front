import React, { useState, useEffect } from 'react'; // Importa useState e useEffect corretamente
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { StarIcon } from '@heroicons/react/solid';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", productId);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct(productSnap.data());
      } else {
        console.log("Nenhum produto encontrado!");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  const stars = Array(5).fill(0).map((_, index) => (
    <StarIcon key={index} className={`h-5 w-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
  ));

  return (
    <div className="max-w-[256px] rounded overflow-hidden shadow-lg m-2 bg-white">
      {product.images.map((imageUrl, index) => (
        <img 
        key={index} 
        className="w-[256px] h-[280px] object-cover" 
        src={imageUrl} 
        alt={`Produto ${product.name}`} />
      ))}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="pt-4 pb-2 flex">
          {stars}
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="text-xl">R$ {product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
