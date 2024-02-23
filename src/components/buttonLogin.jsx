"use client";
import { useRouter } from "next/navigation";
import { initGoogle } from "../app/firebase.js";
export function Buttonlogin() {
  const router = useRouter();
  return (
    <>
      <div
        className="flex gap-3 p-5 items-center justify-center border-2 border-gray-700 rounded-2xl w-[470px] cursor-pointer"
        onClick={() => {
          initGoogle();
          router.push("/main");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-google"
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
          <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
        </svg>
        <h3 className="font-bold text-2xl">Continuar con Google</h3>
      </div>
    </>
  );
}
