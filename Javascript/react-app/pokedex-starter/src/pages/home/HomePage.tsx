import React, { useEffect } from "react";
import { pokemonListService } from "@/service/index";
function HomePage() {
  const callPokemonList = async () => {
    const data = await pokemonListService.getPokemonList();
    console.log("data:", data);
  };

  useEffect(() => {
    callPokemonList();
  }, []);

  return <div>HomePage</div>;
}

export default HomePage;
