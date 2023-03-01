export function InputSection(params) {
  return (
    <form className="w-full bg-green-200 p-2">
      <div className="bg-green-300 flex justify-evenly text-xl pt-5 pb-5">
        <div className="flex flex-col text-center">
          <label className="underline pb-2">YEAR</label>
          <input type="text" className="text-center p-1 rounded-lg" />
        </div>
        <div className="flex flex-col text-center">
          <label className="underline pb-2">REGION</label>
          <input type="text" className="text-center p-1 rounded-lg" />
        </div>
        <div className="flex flex-col text-center">
          <label className="underline pb-2">PROVINCE</label>
          <input type="text" className="text-center p-1 rounded-lg" />
        </div>
        <div className="flex flex-col text-center">
          <label className="underline pb-2">DISTRICT</label>
          <input type="text" className="text-center p-1 rounded-lg" />
        </div>
        <div className="flex flex-col text-center">
          <label className="underline pb-2">POP-ZONE</label>
          <input type="text" className="text-center p-1 rounded-lg" />
        </div>
      </div>
      <div className="bg-green-300 text-center text-xl pb-5">
        <button type="submit" className="bg-gray-200 py-1 px-4 rounded-lg">
          filter database
        </button>
      </div>
    </form>
  );
}
