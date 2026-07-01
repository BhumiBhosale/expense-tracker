function SummaryCard({
  title,
  amount,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-300">

      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h2
        className={`text-3xl font-bold mt-3 ${color}`}
      >
        {amount}
      </h2>

    </div>
  );
}

export default SummaryCard;