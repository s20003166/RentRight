function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">RentRight</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Welcome to your rental platform</h1>
        <p className="mt-4 text-slate-600">
          This is the frontend for the RentRight Sri Lanka rental marketplace.
        </p>
        <button className="mt-6 bg-emerald-600 text-white px-5 py-3 rounded-lg hover:bg-emerald-700 transition">
          Explore Rentals
        </button>
      </div>
    </div>
  );
}

export default App;
