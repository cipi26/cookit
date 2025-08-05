const StatsCard = () => {
  return (
    <section className="rounded-4xl bg-card shadow-md w-full p-9 flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Stats</h2>
      <div className="flex justify-around items-center h-full">
        {stats.map((stat, key) => (
          <div key={key} className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold">{stat.value}</h3>
            <span className="text-copy-light">{stat.key}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCard;

const stats = [
  {
    value: "612K",
    key: "likes"
  },
  {
    value: "312",
    key: "recipes"
  },
  {
    value: "1.3M",
    key: "likes"
  },
]