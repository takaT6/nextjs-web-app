import { useEffect, useState } from "react";
import { db } from '@/pages/api/firebase';
import Card from "@/components/FirebaseList/Card";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Spot } from "@/types/Spot";
import { setData } from "@/libs/pushDataToFS";

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