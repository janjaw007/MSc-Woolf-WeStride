import type { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { POKEMON_BASE_URL } from "@/utils/constants";
import { default as axios } from "axios";

interface IGetPokemonDetailResponse {
  status: number | undefined;
  data: IPokemonDetailResponse;
}

export const pokemonDetailService = {
  getPokemonDetail: async (
    name: string,
  ): Promise<IGetPokemonDetailResponse> => {
    const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`);
    return response;
  },
};
