import { PokemonCard } from "@/components/PokemonCard";
import { SearchForm } from "@/components/SearchForm";
import { usePokemonListStore } from "@/store/pokemonList";
import { ClipLoader } from "react-spinners";
function HomePage() {
  const { pokemon, fetchPokemon } = usePokemonListStore();
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
      {fetchPokemon.loading && (
        <div className="h-[400px] flex justify-center items-center">
          <ClipLoader color="#fff" />
        </div>
      )}

      {!fetchPokemon.loading && (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-[20px] mt-[40px] ">
          {pokemon.data?.map((item) => {
            return <PokemonCard data={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
