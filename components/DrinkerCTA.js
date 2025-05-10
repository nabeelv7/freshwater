const drinkers = [
  "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
  "https://img.daisyui.com/images/profile/demo/superperson@192.webp",
  "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
  "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
];

const DrinkerCTA = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-gray-300">
      <p className="text-lg font-medium">
        Join <span className="text-white font-semibold">1,358</span> mindful
        drinkers
      </p>
      <div className="flex -space-x-3">
        {drinkers.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${index + 1}`}
            className="w-10 h-10 rounded-full border-2 border-black object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default DrinkerCTA;
