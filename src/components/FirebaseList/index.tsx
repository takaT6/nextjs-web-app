import { useEffect, useState } from "react";
import { db } from '../../pages/api/firebase';
import Card from "./Card";
import { collection, query, onSnapshot, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { Spot } from "@/types/Spot";

const makeDate = (sec: string | number): string => {
  const udate = new Date(Number(sec) * 1000);
  const jpDate = `${udate.getFullYear()}年${udate.getMonth() + 1}月${udate.getDate()}日`;
  return jpDate;
};


const data_array = Array();
const setData = () => {
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
        if (Object.keys(temp_data_obj).length) data_array.push(temp_data_obj);
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

const FirebaseList = () => {
  const [spots, setSpots] = useState(Array<Spot>);
  useEffect(() => {
    const q = query(collection(db, "spots"));
    const unsub = onSnapshot(q, (snapshot) => {
      setSpots(snapshot.docs.map((doc) => {
        const spot = doc.data() as Spot;
        // spot.udate2 = makeDate(spot.udate.seconds);
        return spot;
      }));
    });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="col-md-11 text-center">
          <div>
            {spots.map((spot: Spot) => (
              <Card {...spot} key={spot.name} />
            ))}
          </div>
        </div>
      </div>
      <button onClick={setData}>hoge</button>
    </>
  );
};

export default FirebaseList;