import { Spot } from "@/types/Spot";
import Image from "next/image";
const makeDate = (sec: string | number): string => {
  const udate = new Date(Number(sec) * 1000);
  console.log(udate);
  const jpDate = `${udate.getFullYear()}年${udate.getMonth() + 1}月${udate.getDate()}日`;
  return jpDate;
};
const Card = (props: Spot) => {
  return (
    <>
      <div className="w-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-auto">
          <Image className="rounded-t-lg" src="/download.jpg" alt=""
            width={1980}
            height={1150}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </div>
        <div className="p-2">
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {props.address1 + props.address2 + props.address3}
          </p>
          <p className="mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
            {makeDate(props.updated_at.seconds)}
          </p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            場所を確認する→
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;