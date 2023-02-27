import { Spot } from "@/types/Spot";
import Image from "next/image";
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
        <div className="space-y-1">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <p className="text-xs text-gray-700 dark:text-gray-400">
            {props.address1 + props.address2}
          </p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            場所を確認する→
          </a>
          <details className="group">
            <summary className="flex justify-between items-center text-xs cursor-pointer list-none">
              <span>詳細を見る</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.address1 + props.address2 + props.address3}
              </p>
              <p className="mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
                {props.created_at.formatted}
              </p>
            </p>
          </details>
        </div>
      </div>
    </>
  );
};

export default Card;