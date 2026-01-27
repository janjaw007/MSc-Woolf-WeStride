import { PokemonCard } from "@/components/PokemonCard";
import type { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { pokemonDetailService, pokemonListService } from "@/service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

function DetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });
  async function callData(name: string) {
    const response = await pokemonDetailService.getPokemonDetail(name);
    if (response.status === 200) {
      const responseResults = response.data;
      setPokemon({
        data: responseResults,
        loading: false,
        error: null,
      });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  }

  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-[20px] mt-[40px] ">
        {pokemon.data && <PokemonCard data={pokemon.data} />}
      </div>
    </div>
  );
}

export default DetailPage;
