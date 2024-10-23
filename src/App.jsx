import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="relative grid  grid-cols-1 md:grid-cols-3   gap-10 md:gap-4 overflow-hidden p-7 md:p-14 ">
      <div className="card1 flex flex-col items-center p-5 bg-gray-700 rounded-lg">
        <div
          className="img-div h-36 w-full my-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/tailwind-card/images/card-1.jpg')" }}
        ></div>
        <div className="card-title text-white font-extrabold">
          CHEESE STICKS
        </div>
        <div className="card-text text-white my-5 text-base md:font-lg max-h-36 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt
          ab recusandae eius reprehenderit, quia modi vel officia doloribus
          assumenda.
        </div>
        <button className="bg-gray-600 p-3 text-white">ORDER NOW</button>
      </div>
      <div className="card2 flex flex-col items-center p-5 bg-gray-700 rounded-lg">
        <div
          className="img-div h-36 w-full my-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/tailwind-card/images/card-2.jpg')" }}
        ></div>
        <div className="card-title text-white font-extrabold">CHICKEN</div>
        <div className="card-text text-white my-5 text-base md:font-lg max-h-36 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt
          ab recusandae eius reprehenderit, quia modi vel officia doloribus
          assumenda.
        </div>
        <button className="bg-gray-600 p-3 text-white">ORDER NOW</button>
      </div>
      <div className="card3 flex flex-col items-center p-5 bg-gray-700 rounded-lg">
        <div
          className="img-div h-36 w-full my-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/tailwind-card/images/card-3.jpg')" }}
        ></div>
        <div className="card-title text-white font-extrabold">BURGER</div>
        <div className="card-text text-white my-5 text-base md:font-lg max-h-36 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt
          ab recusandae eius reprehenderit, quia modi vel officia doloribus
          assumenda.
        </div>
        <button className="bg-gray-600 p-3 text-white">ORDER NOW</button>
      </div>
    </div>
  );
}

export default App;
