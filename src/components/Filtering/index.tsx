import { Icon } from "../Icons";
import { useState } from 'react';
// const setData = () => {
//   fetch(`http://localhost:3000/spots.csv`)
//     .then((res) => {
//       return res.text();
//     })
//     .then((csv_data) => {
//       const data_string = csv_data.split('\n');
//       const col_nm = data_string[0].split(",");
//       for (let i = 1; i < data_string.length; i++) {
//         const splited = data_string[i].split(',');
//         const temp_data_obj = {} as any;
//         for (let j = 0; j < splited.length; j++) {
//           if (splited[j].length == 0) break;
//           temp_data_obj[col_nm[j]] = splited[j];
//           if ("updated_at" == col_nm[j]) temp_data_obj[col_nm[j]] = serverTimestamp();
//           if ("created_at" == col_nm[j]) temp_data_obj[col_nm[j]] = serverTimestamp();
//         }
//         if (Object.keys(temp_data_obj).length) {
//           temp_data_obj["coordinates"] = new GeoPoint(Number(temp_data_obj["latitude"]), Number(temp_data_obj["longitude"]));
//           delete temp_data_obj["latitude"];
//           delete temp_data_obj["longitude"];
//           data_array.push(temp_data_obj);
//         }
//       }
//       console.log(data_array);
//       for (let i = 0; i < data_array.length; i++) {
//         set(data_array[i]);
//       }
//     });
// };
const Filtering = () => {
  const [selectedArea, setSelectedArea] = useState("");
  return (
    <>
      <div className="flex justify-center p-2">
        <div className="flex items-center bg-gray-100 rounded-l-lg">
          <input className=" bg-gray-100 outline-none rounded-l-lg p-4 space-x-4" type="text" placeholder="Keyword..." />
          <button className="bg-blue-700 rounded-r-lg p-4 space-x-4"><Icon name="Search" stroke="white" /></button>
        </div>
      </div>
      <select
        value={selectedArea}
        onChange={e => setSelectedArea(e.target.value)}>
        <option value="9to12">9:00-12:00</option>
        <option value="12to14">12:00-14:00</option>
        <option value="14to16">14:00-16:00</option>
        <option value="16to18">16:00-18:00</option>
        <option value="18to20">18:00-20:00</option>
        <option value="20to21">20:00-21:00</option>
      </select>
    </>
  );
};

export default Filtering;;