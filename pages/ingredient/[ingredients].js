import React from "react";
import { useRouter } from "next/router";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { Home, ChevronRight } from "react-feather";
import Link from "next/link";
import axios from "axios";
import SearchComponent from "@/src/components/SearchComponent";
import Image from "next/image";
import ListMeals from "@/src/components/ListMeals";

function Ingredients() {
  const router = useRouter();
  const { ingredients } = router.query;
  const [getIngredients, setGetIngredients] = React.useState(null);
  const fetchData = async () => {
    try {
      if (ingredients) {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
        );
        setGetIngredients(data.meals);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setGetIngredients(
      getIngredients.filter((el) =>
        el.strMeal.toLowerCase().includes(e.toLowerCase())
      )
    );
  };
  React.useEffect(() => {
    fetchData();
  }, [ingredients, getIngredients]);

  return (
    <>
      <Header />
      <Navbar />
      <div className="h-20 w-full"></div>
      <div className="py-4 md:px-16 px-4 bg-gray-200">
        <div className="flex gap-3">
          <Home />
          <Link href={"/"} className="font-semibold">
            Home
          </Link>
          <ChevronRight />
          <p className="font-semibold">Foods</p>
          <ChevronRight />
          {ingredients ? (
            <p className="font-semibold">{ingredients}</p>
          ) : (
            <div className="h-5 w-1/6 bg-slate-400 rounded animate-pulse"></div>
          )}
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center pb-5 border-b-2 border-b-slate-700 mb-5">
          {ingredients ? (
            <p className="font-bold text-2xl flex-1 mb-3 md:mb-0">
              {ingredients} Meals
            </p>
          ) : (
            <div className="h-5 w-1/6 bg-slate-400 rounded animate-pulse mb-3 md:mb-0 flex-1"></div>
          )}
          <SearchComponent onChange={onChange} />
        </div>
        {getIngredients ? (
          <div className=" gap-4 grid grid-cols-2 max-[375px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {getIngredients.map((item) => {
              return <ListMeals item={item} />;
            })}
          </div>
        ) : (
          <div className=" gap-4 grid grid-cols-2 max-[375px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div className="card bg-slate-400 h-[378px] md:w-[200px] w-full max-[375px]:w-full animate-pulse">
              <figure className="pt-3 px-5">
                <div className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold"></h2>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card bg-slate-400 h-[378px] md:w-[200px] w-full max-[375px]:w-full animate-pulse">
              <figure className="pt-3 px-5">
                <div className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold"></h2>
                <div className="card-actions justify-end"></div>
              </div>
            </div>{" "}
            <div className="card bg-slate-400 h-[378px] md:w-[200px] w-full max-[375px]:w-full animate-pulse">
              <figure className="pt-3 px-5">
                <div className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold"></h2>
                <div className="card-actions justify-end"></div>
              </div>
            </div>{" "}
            <div className="card bg-slate-400 h-[378px] md:w-[200px] w-full max-[375px]:w-full animate-pulse">
              <figure className="pt-3 px-5">
                <div className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold"></h2>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Ingredients;
