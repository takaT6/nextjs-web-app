import { Icon } from "@/components/Icons";
import { Spot } from "@/types/Spot";
import Image from "next/image";
const Card = (props: Spot) => {
  console.log(props);
  return (
    <>
      <div className="w-2/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        <div className="space-y-1">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
            {props.address1 + props.address2}
          </p>
          <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-1 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              詳細
            </summary>
            <div className="leading-6 text-slate-600 dark:text-slate-400">
              <table className="table-fixed w-full">
                <tr className="mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
                  <td className="w-auto">住所：</td>
                  <td>{props.address1 + props.address2 + props.address3}</td>
                </tr>
                <tr className="mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
                  <td>駐車場：</td>
                  <td>{props.parking_info == 2 ? "周辺にあり" : props.parking_info == 1 ? "あり" : "不明"}</td>
                </tr>
                <tr className="mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
                  <td>更新日：</td>
                  <td>{props.created_at.formatted}</td>
                </tr>
              </table>
            </div>
          </details>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            場所を確認する→
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;