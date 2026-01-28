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

      if (responseResults) {
        setPokemon({
          data: {
            ...responseResults,
            image:
              responseResults.sprites.other.dream_world.front_default ||
              responseResults.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
      }
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
      <div className="w-[90%] max-w-[600px] m-[auto]">
        {pokemon.data && (
          <div className="p-2  text-white flex flex-col h-full  rounded-base shadow-xs dark:border-gray-70 m-[auto]">
            <div className="bg-center aspect-square w-full bg-cover rounded-[20px] relative h-[400px]">
              <img
                className="absolute h-[auto] max-h-[400px] w-full translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" // 1. บังคับความสูงรูป + object-cover
                src="/images/pokemon_bg.png"
                alt=""
              />
              <img
                className="absolute  h-[150px] sm:h-[200px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" // 1. บังคับความสูงรูป + object-cover
                src={pokemon.data.image}
                alt=""
              />
            </div>

            <div className=" px-2 mt-1 flex justify-between">
              <h5 className="capitalize mb-2 text-xl font-semibold tracking-tight text-heading line-clamp-1">
                {pokemon.data.name}
              </h5>
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-heading line-clamp-1">
                #{pokemon.data.id}
              </h5>
            </div>

            <div className="mt-auto px-1 py-2 flex gap-2 justify-end">
              {pokemon.data.types.map((item) => {
                return (
                  <span
                    className={`badge-type-${item.type.name} rounded-xl text-black px-3 py-2 capitalize`}
                  >
                    {item.type.name}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
