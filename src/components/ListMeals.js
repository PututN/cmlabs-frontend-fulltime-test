import React from "react";
import Image from "next/image";
import Link from "next/link";

function ListMeals({ item }) {
  return (
    <div className="card bg-base-200 shadow-xl h-full" key={item.idMeal}>
      <figure className="pt-3 px-5">
        <Image
          className="rounded-xl"
          src={item.strMealThumb}
          alt={item.strMeal}
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold flex-1 md:text-xl text-base">
          {item.strMeal}
        </h2>
        <div className="card-actions justify-end">
          <Link href={`meal/${item.idMeal}`} key={item.idMeal}>
            <button className="px-3 py-2 rounded-lg font-semibold btn-primary hover:btn-warning">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListMeals;
