import { imageGridCards3 } from "../Utils/FoodData";
import DineCard from "./DineCard";
import logo2 from "../assets/FoodAI2.png"

export default function DineOption() {
  return (
    <>
    <div className="w-[80%] mx-auto mt-28">
      <h1 className="mb-8 text-2xl font-bold ">Discover best restaurants on Dineout</h1>

      <div
        style={{ scrollbarWidth: "none" }}
        className="grid grid-rows-1 grid-flow-col auto-cols-max overflow-x-auto gap-x-4"
      >
        {imageGridCards3.map((data) => (
          <DineCard key={data.info.id} data={data}></DineCard>
        ))}
      </div>
    </div>

    <img className="w-full object-cover mt-20 h-80 object-fill" alt="Get the App banner" src={logo2} />
    </>
  );
}
