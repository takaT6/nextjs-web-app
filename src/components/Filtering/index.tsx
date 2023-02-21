import { SearchIcon } from "../Icons";

const Filtering = () => {
  return (
    <>
      {/* <div className="min-h-screen bg-gray-100 flex justify-center p-2">
        <div className="space-y-10">
          <div className="items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 space-x-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input className="w-6/12 bg-gray-100 outline-none" type="text" placeholder="Keyword..." />
            </div>
            <div className="flex py-2 px-2 rounded-lg text-gray-500 font-semibold cursor-pointer">
              <span>All categorie</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center p-2">
        <div className="flex items-center bg-gray-100 rounded-xl p-4 space-x-4">
          <SearchIcon />
          <input className=" bg-gray-100 outline-none" type="text" placeholder="Keyword..." />
        </div>
      </div>
    </>
  );
};

export default Filtering;;