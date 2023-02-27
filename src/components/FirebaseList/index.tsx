import { useEffect, useState } from "react";
import { db } from '@/pages/api/firebase';
import Card from "@/components/FirebaseList/Card";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Spot } from "@/types/Spot";
import { setData } from "@/libs/pushDataToFS";
import { formatDate } from "@/libs/DateUtil";

const FirebaseList = () => {
  const [spots, setSpots] = useState(Array<Spot>);
  useEffect(() => {
    const q = query(collection(db, "spots"));
    const unsub = onSnapshot(q, (snapshot) => {
      console.log("data was loaded!");
      setSpots(snapshot.docs.map((doc) => {
        const spot = doc.data() as Spot;
        spot.created_at.formatted = formatDate(spot.created_at.seconds);
        spot.updated_at.formatted = formatDate(spot.updated_at.seconds);
        return spot;
      }));
    });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="col-md-11 text-center">
          <div>
            {spots.map((spot) => (
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