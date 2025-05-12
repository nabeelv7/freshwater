import DrinkerCTA from "./DrinkerCTA";

const SectionHero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen md:gap-10 gap-6 px-5">
      <h1 className="md:text-6xl text-4xl font-extrabold tracking-tight max-w-3xl text-center">
        The&nbsp;
        <span className="text-blue-500">Freshest</span>
        &nbsp;🌊 Water you&apos;ll ever drink.
      </h1>
      <div>
        <p className="opacity-80 max-w-xl text-center">
          Sourced from the pristine rivers of the Himalayas, our water is
          naturally pure-crafted by nature to support&nbsp;
          <span className="underline">your health and well-being.</span>
        </p>
      </div>
      <button className="btn btn-wide btn-lg bg-blue-700 hover:bg-blue-600 border-2 border-blue-600 hover:border-blue-400">
        Buy Now
      </button>
      <DrinkerCTA />
    </div>
  );
};

export default SectionHero;
