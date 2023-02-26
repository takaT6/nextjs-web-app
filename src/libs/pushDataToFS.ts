
import { db } from '../pages/api/firebase';
import { setDoc, doc, serverTimestamp, GeoPoint } from "firebase/firestore";
const data_array = Array();
export const setData = () => {
  fetch(`http://localhost:3000/spots.csv`)
    .then((res) => {
      return res.text();
    })
    .then((csv_data) => {
      const data_string = csv_data.split('\n');
      const col_nm = data_string[0].split(",");
      for (let i = 1; i < data_string.length; i++) {
        const splited = data_string[i].split(',');
        const temp_data_obj = {} as any;
        for (let j = 0; j < splited.length; j++) {
          if (splited[j].length == 0) break;
          temp_data_obj[col_nm[j]] = splited[j];
          if ("updated_at" == col_nm[j]) temp_data_obj[col_nm[j]] = serverTimestamp();
          if ("created_at" == col_nm[j]) temp_data_obj[col_nm[j]] = serverTimestamp();
        }
        if (Object.keys(temp_data_obj).length) {
          temp_data_obj["coordinates"] = new GeoPoint(Number(temp_data_obj["latitude"]), Number(temp_data_obj["longitude"]));
          delete temp_data_obj["latitude"];
          delete temp_data_obj["longitude"];
          data_array.push(temp_data_obj);
        }
      }
      console.log(data_array);
      for (let i = 0; i < data_array.length; i++) {
        set(data_array[i]);
      }
    });
};

const set = (data: any) => {
  setDoc(doc(db, "spots", data.name), data as any);
};