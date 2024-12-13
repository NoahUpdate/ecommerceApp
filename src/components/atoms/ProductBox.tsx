import { FC } from 'react';
import { IProductBox } from '@types';

export const ProductBox: FC<IProductBox> = ({ title, price, images }) => {
  // const Producto = 'T-shirt with Product';
  const Rating = 4.5;
  const Precio = price;
  const Panterior = Math.round(1.15*price);
  const Dsc = Math.round(((Precio - Panterior) * 100) / Panterior);

  return (
    <div>
      {/* <div className="h-[298px] w-[295px] bg-[rgb(238,238,238)] rounded-[20px]"> */}
      <div >
        <img
          src={images[0]}
          alt="Producto" className="rounded-xl max-w-80" />
      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex">
        {Rating}/ <p className="text-[rgb(153,153,153)]">5</p>
      </div>
      <div className="flex gap-3 text-2xl font-bold items-center">
        <p>${price}</p>
        <p className="text-[rgb(153,153,153)] line-through">${Panterior}</p>
        <div className="bg-red-100 text-red-500 rounded-3xl font-normal w-[58px] h-7 text-[12px] flex justify-center items-center">
          {Dsc}%
        </div>
      </div>
    </div>
  );

};
