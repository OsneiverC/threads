"use client"
export function Corazones (){
    return (
        <div className="mt-10 flex gap-5">
                <svg
                onClick={()=>document.querySelector(".corazon").classNameList.toggle("fill-white")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="corazon icon icon-tabler icon-tabler-heart hover:bg-gray-800 rounded-md cursor-pointer"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-message-circle-2 hover:bg-gray-800 rounded-md cursor-pointer"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-capsule hover:bg-gray-800 rounded-md cursor-pointer"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
                  <path d="M15 8l3 3l3 -3" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-send hover:bg-gray-800 rounded-md cursor-pointer"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 14l11 -11" />
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              </div>
    )
}