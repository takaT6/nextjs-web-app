import { Icon } from "../Icons";

const Filtering = () => {
  return (
    <>
      <div className="flex justify-center p-2">
        <div className="flex items-center bg-gray-100 rounded-l-lg">
          <input className=" bg-gray-100 outline-none rounded-l-lg p-4 space-x-4" type="text" placeholder="Keyword..." />
          <button className="bg-blue-700 rounded-r-lg p-4 space-x-4"><Icon name="Search" stroke="white" /></button>
        </div>
      </div>
    </>
  );
};

export default Filtering;;