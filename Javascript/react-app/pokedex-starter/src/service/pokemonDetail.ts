import type { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { POKEMON_BASE_URL } from "@/utils/constants";
import { handleResponse, type IResponse } from "@/utils/handleResponse";
import { default as axios } from "axios";

interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonDetailResponse;
}

export const pokemonDetailService = {
  getPokemonDetail: async (
    name: string,
  ): Promise<IGetPokemonDetailResponse> => {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`);
      return response;
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
