"use client";

import { crearPost, getPosts } from "@/app/firebase";
import { usePosts } from "@/stores/posts";
import { useState } from "react";

export function PostSeed() {
  const [message, setMessage] = useState("");
  const {setNewPosts} = usePosts()

  const [loading, setLoadig] = useState(false);

  const crearPostFormulario = async () => {
    try {
      setLoadig(true);
      if (!message) {
        alert("Por favor escribe algo en el post");
        return;
      }
      const post = await crearPost(message);

      setNewPosts(post)
      
    } catch (error) {
      console.log(error);
    } finally {
      setMessage("");
      setLoadig(false);
    }
  };
  return (
    <>
      {loading && (
        <div className="absolute w-full bg-gray-500 opacity-20 h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold font-sans">Loading....</h2>
        </div>
      )}
      <div className="px-[30%] p-3 flex justify-between">
        <div className="flex items-center w-full gap-4">
          <img
            src="https://dgalywyr863hv.cloudfront.net/pictures/athletes/15905202/5059731/2/full.jpg"
            alt=""
            width="44px"
            height="44px"
            className="rounded-full"
          />
          <input
            type="text"
            className="bg-transparent p-3 outline-none w-full "
            placeholder="Inicio Hilo ...."
            onChange={(e) => setMessage(e.currentTarget.value)}
            value={message}
          />
        </div>
        <button
          className="py-2 px-3 rounded-lg bg-gray-500"
          onClick={crearPostFormulario}
        >
          Publicar
        </button>
      </div>
    </>
  );
}
