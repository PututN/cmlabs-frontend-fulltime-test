import React from "react";
import Link from "next/link";
import { List } from "react-feather";

function ListIngredients({ item }) {
  return (
    <Link
      href={`/ingredient/${item.strIngredient}`}
      key={item.idIngredient}
      className="bg-white p-2 flex items-center rounded-lg gap-3 h-16"
    >
      <List />
      <div>{item.strIngredient}</div>
    </Link>
  );
}

export default ListIngredients;
