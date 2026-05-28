
export default function Loading() {
  const skeletonCards = Array(8).fill(null);

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-20">
      <div className="max-w-[93%] md:max-w-[97%] mx-auto px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col items-center text-center animate-pulse">
          <div className="h-4 w-32 bg-blue-100/50 rounded-full mb-4"></div>
          <div className="h-10 md:h-12 w-64 md:w-96 bg-slate-200 rounded-xl mb-5"></div>
          <div className="h-5 w-3/4 max-w-xl bg-slate-100 rounded-lg"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="relative col-span-1 h-[380px] w-full flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-200/40 border border-slate-100/50 animate-pulse"
            >
              <div className="p-5">
                <div className="h-7 w-28 bg-slate-300/50 rounded-full"></div>
              </div>

              <div className="p-5 flex flex-col gap-4 mt-auto w-full">
                <div className="flex flex-col gap-3">
                  <div className="h-6 w-3/4 bg-slate-300/70 rounded-md"></div>
                  <div className="h-4 w-full bg-slate-300/50 rounded-md"></div>
                  <div className="h-3 w-1/2 bg-slate-300/40 rounded-md mt-1"></div>
                </div>

                <div className="h-10 w-full bg-slate-300/60 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}