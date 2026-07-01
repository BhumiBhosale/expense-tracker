function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <h2 className="text-2xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          B
        </div>
      </div>
    </header>
  );
}

export default Topbar;