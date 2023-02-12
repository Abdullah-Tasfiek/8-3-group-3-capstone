import "../Styles/Home.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="my-30">
      {/* {loading ? <img src={require("../Assets/TableForTwoLogo.png")} className="reload"/> : 
      <> */}
      <div className="header-div text-center text-7xl font-bold font-fonts grid content-center my-20">
        <h2 className="text-white drop-shadow-2xl">Eating is a lifestyle </h2>
        <br></br>
        <h2 className="text-white drop-shadow-2xl">
          Find a partner based on your diet
        </h2>
      </div>
      <div className="middle bg-beige">
        <div className="bg-beige text-2xl font-fonts text-logored p-12">
          Our Approach
          <div className="bg-beige text-black font-fonts text-6xl my-5 ml-24">
            Food Reflects Values
          </div>
        </div>
        <div className="bg-beige text-2xl font-fonts my-15">
          <div className="rounded-full bg-logored text-white p-12 mx-12">
            Welcome to Table For Two, where you can find your future partner
            through their diet! Table For Two is a dating app that allows you to
            find a partner based on different diets. Food is an important part
            of a relationship; so don't forget to write down your favorite foods
            to eat on your profile!
          </div>
          <br></br>
          <div className="rounded-full bg-logopurple text-white p-12 mx-12 my-10">
            The main inspiration for Table For Two stems from making ones
            dietary restrictions represented in todays dating ecosystem. For
            example, if someone can only eat Halal foods or if someone must eat
            a gluten-free diet. Diets can affect your health, social
            interaction, and finances. We believe finding a partner that share a
            similar diet as you can compliment your lifestlye more seamlessly.
          </div>
        </div>
      </div>
      <div className="">Support Stuff</div>
      {/* </>
      } */}
    </div>
  );
}
