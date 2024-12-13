import { FC } from 'react';
import { ProductBox } from '@atoms';
import { useState, useEffect } from 'react';
import { IProductBox } from '@types';

interface ISection {
  title?: string;
  onClick?: () => void;
}

export const Section: FC<ISection> = ({ title, onClick }) => {
  const [productsList, setProductsList] = useState<IProductBox[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
      // const API_URL = "https://api.escuelajs.co/api/v1";
      // const response = await fetch(`${API_URL}/products?offset=0&limit=10`);


      if (!response.ok) {
        throw new Error('algo fallo');
      }

      const data = await response.json();

      setProductsList(data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setProductsList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-5/6 m-auto flex justify-center flex-col">
      <h1 className="font-integral-heavy text-5xl font-extrabold tracking-tighter py-10 justify-center flex">
        {title}
      </h1>
      <div className="flex flex-wrap gap-4 pb-10">
        {productsList.map((product) => (
          <ProductBox key={product.id} {...product} />
        ))}
        {/* <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox> */}
      </div>
      <div className="flex justify-center mb-20">
        <button onClick={onClick} className="border rounded-full w-[218px] h-[52px]">
          View All
        </button>
      </div>
    </div>
  );
};
