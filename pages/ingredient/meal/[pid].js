import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/src/components/Navbar";
import Header from "@/src/components/Header";
import { ArrowLeft, Home, ChevronRight, ChevronDown } from "react-feather";
import TitleMeal from "@/src/components/TitleMeal";
import Link from "next/link";
import axios from "axios";
import ImageMeal from "@/src/components/ImageMeal";
import InstructionMeal from "@/src/components/InstructionMeal";
import EmbededYt from "@/src/components/EmbededYt";

function pid() {
  const router = useRouter();
  const { pid } = router.query;
  const [meal, setMeal] = React.useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pid}`
      );
      setMeal(data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (pid) {
      fetchData();
    }
  }, [pid]);

  // Change Youtube URL to embed URL
  const embedUrl = meal?.strYoutube?.replace("watch?v=", "embed/");

  return (
    <>
      <Header />
      <Navbar />
      <div className="h-20 w-full"></div>
      <div className="py-4 md:px-16 px-4 bg-gray-200 flex flex-col gap-4">
        <div className="flex md:gap-3 gap-1 md:flex-row  flex-col md:items-start items-center">
          <Home />
          <Link href={"/"} className="font-semibold">
            Home
          </Link>
          <ChevronRight className="md:block hidden" />
          <ChevronDown className="md:hidden block" />
          <p className="font-semibold">Foods</p>
          <ChevronRight className="md:block hidden" />
          <ChevronDown className="md:hidden block" />
          {meal ? (
            <p className="font-semibold">{meal.strCategory}</p>
          ) : (
            <div className="h-5 w-1/6 bg-slate-400 rounded animate-pulse"></div>
          )}
          <ChevronRight className="md:block hidden" />
          <ChevronDown className="md:hidden block" />
          {meal ? (
            <p className="font-semibold">{meal.strMeal}</p>
          ) : (
            <div className="h-5 w-1/6 bg-slate-400 rounded animate-pulse"></div>
          )}
        </div>

        <div className="pb-5 border-b-2 border-b-slate-700">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-4 btn-warning px-4 py-2 rounded-lg hover:btn-primary mb-5"
          >
            <ArrowLeft />
            <p>Back</p>
          </button>
          {meal ? (
            <TitleMeal title={meal.strMeal} />
          ) : (
            <div className="h-8 w-full bg-slate-400 rounded animate-pulse"></div>
          )}
        </div>
        <div className="flex md:flex-row flex-col gap-5">
          <div className="md:w-1/2 w-full">
            {meal ? (
              <p className="font-bold text-red-400 text-base mb-2">
                {meal.strArea}
              </p>
            ) : (
              <div className="h-5 w-1/6 bg-slate-400 rounded animate-pulse mb-2"></div>
            )}
            {meal ? (
              <ImageMeal src={meal.strMealThumb} alt={meal.strMeal} />
            ) : (
              <div className="h-screen w-full bg-slate-400 rounded animate-pulse"></div>
            )}
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-3">
            <h1 className="font-bold text-4xl">Instructions</h1>
            {meal ? (
              <InstructionMeal instruction={meal.strInstructions} />
            ) : (
              <div className="h-8 w-full bg-slate-400 rounded animate-pulse"></div>
            )}
            <div>
              <p className="font-bold text-2xl mb-3">Recipes</p>
              <div className="flex flex-col md:flex-row md:gap-4">
                <div className="w-full">
                  {meal ? (
                    <ul className="list-disc pl-5">
                      {meal?.strIngredient1 ? (
                        <li>
                          <p>
                            {meal?.strMeasure1} {meal?.strIngredient1}
                          </p>
                        </li>
                      ) : (
                        <div className="h-4 w-full bg-slate-400 rounded animate-pulse"></div>
                      )}
                      {meal?.strIngredient2 ? (
                        <li>
                          <p>
                            {meal?.strMeasure2} {meal?.strIngredient2}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient3 ? (
                        <li>
                          <p>
                            {meal?.strMeasure3} {meal?.strIngredient3}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient4 ? (
                        <li>
                          <p>
                            {meal?.strMeasure4} {meal?.strIngredient4}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient5 ? (
                        <li>
                          <p>
                            {meal?.strMeasure5} {meal?.strIngredient5}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient6 ? (
                        <li>
                          <p>
                            {meal?.strMeasure6} {meal?.strIngredient6}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient7 ? (
                        <li>
                          <p>
                            {meal?.strMeasure7} {meal?.strIngredient7}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient8 ? (
                        <li>
                          <p>
                            {meal?.strMeasure8} {meal?.strIngredient8}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient9 ? (
                        <li>
                          <p>
                            {meal?.strMeasure9} {meal?.strIngredient9}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient10 ? (
                        <li>
                          <p>
                            {meal?.strMeasure10} {meal?.strIngredient10}
                          </p>
                        </li>
                      ) : null}
                    </ul>
                  ) : (
                    <div className="h-4 w-full bg-slate-400 rounded animate-pulse"></div>
                  )}
                </div>
                <div className="w-full">
                  {meal ? (
                    <ul className="list-disc pl-5">
                      {meal?.strIngredient11 ? (
                        <li>
                          <p>
                            {meal?.strMeasure11} {meal?.strIngredient11}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient12 ? (
                        <li>
                          <p>
                            {meal?.strMeasure12} {meal?.strIngredient12}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient13 ? (
                        <li>
                          <p>
                            {meal?.strMeasure13} {meal?.strIngredient13}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient14 ? (
                        <li>
                          <p>
                            {meal?.strMeasure14} {meal?.strIngredient14}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient15 ? (
                        <li>
                          <p>
                            {meal?.strMeasure15} {meal?.strIngredient15}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient16 ? (
                        <li>
                          <p>
                            {meal?.strMeasure16} {meal?.strIngredient16}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient17 ? (
                        <li>
                          <p>
                            {meal?.strMeasure17} {meal?.strIngredient17}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient18 ? (
                        <li>
                          <p>
                            {meal?.strMeasure18} {meal?.strIngredient18}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient19 ? (
                        <li>
                          <p>
                            {meal?.strMeasure19} {meal?.strIngredient19}
                          </p>
                        </li>
                      ) : null}
                      {meal?.strIngredient20 ? (
                        <li>
                          <p>
                            {meal?.strMeasure20} {meal?.strIngredient20}
                          </p>
                        </li>
                      ) : null}
                    </ul>
                  ) : (
                    <div className="h-4 w-full bg-slate-400 rounded animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl">Tutorials</h1>
          <div className="aspect-video w-full mt-5">
            {embedUrl ? (
              <EmbededYt src={embedUrl} title={meal?.strMeal} />
            ) : (
              <div className="h-80 w-full bg-slate-400 rounded animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default pid;
