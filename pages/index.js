import Header from "@/src/components/Header";
import SearchComponent from "@/src/components/SearchComponent";
import axios from "axios";
import React from "react";
import Navbar from "@/src/components/Navbar";
import ListIngredients from "@/src/components/ListIngredients";

export default function Home() {
  const [getIngredients, setGetIngredients] = React.useState([]);
  const onChange = (e) => {
    setGetIngredients(
      getIngredients.filter((el) =>
        el.strIngredient.toLowerCase().includes(e.toLowerCase())
      )
    );
  };
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      setGetIngredients(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
    console.log("cek");
  }, [getIngredients]);

  return (
    <>
      <Header />
      <Navbar />
      <div className="h-20 w-full"></div>
      <div className="bg-gray-200 w-full p-4 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center font-semibold text-base">
            mealapp API website
          </div>
          <div className="text-center font-bold text-2xl">
            See All The Delicious Foods
          </div>
          <SearchComponent
            onChange={onChange}
          />
        </div>
        <div className=" gap-4 grid grid-cols-2 max-[375px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {getIngredients.map((item) => {
            return <ListIngredients item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
