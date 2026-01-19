import { pokemonDetailService } from "@/service";
import React, { useEffect } from "react";

function DetailPage() {
  async function callPokemonDetail(name: string) {
    const data = await pokemonDetailService.getPokemonDetail(name);
    console.log(data);
  }

  useEffect(() => {
    callPokemonDetail("ditto");
  }, []);
  return <div>DetailPage</div>;
}

export default DetailPage;
