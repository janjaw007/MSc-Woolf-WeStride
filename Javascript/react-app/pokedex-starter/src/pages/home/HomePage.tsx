import React, { useEffect } from "react";
import { pokemonListService } from "@/service/index";
import { SearchForm } from "@/components/SearchForm";
function HomePage() {
  const callPokemonList = async () => {
    const data = await pokemonListService.getPokemonList();
    console.log("data:", data);
  };

  useEffect(() => {
    callPokemonList();
  }, []);

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>
      <SearchForm />
    </div>
  );
}

export default HomePage;
