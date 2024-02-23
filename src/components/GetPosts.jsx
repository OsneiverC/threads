"use client";

import { useEffect, useState } from "react";
import { Corazones } from "./corazon";
import { getPosts } from "@/app/firebase";
import { usePosts } from "@/stores/posts";

export function GetPosts() {
  const [loading, setLoadig] = useState(false);
  const contentPosts = usePosts((state) => state.contentPosts);
  const { setContentPosts } = usePosts();

  useEffect(() => {
    const getPostsWithAsync = async () => {
      try {
        setLoadig(true);
        const posts = await getPosts();
        setContentPosts(posts)
      } catch (error) {
        console.log(error);
      } finally {
        setLoadig(false);
      }
    };

    getPostsWithAsync();
  }, []);
  return (
    <>
      {loading && (
        <div className="absolute w-full bg-gray-500 opacity-50 h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold font-sans">Loading....</h2>
        </div>
      )}
      <div>
        {contentPosts.map((msg, i) => (
          <div className="px-[30%] mt-8" key={i}>
            <div className="border-t-2 border-b-2 border-gray-500 py-5 ">
              <div>
                <div className="flex gap-4">
                  <img
                    src="https://dgalywyr863hv.cloudfront.net/pictures/athletes/15905202/5059731/2/full.jpg"
                    alt=""
                    className="rounded-full w-14 h-14"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Admin</h3>
                    <p>Reciente</p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-500 p-3 mt-10">
                  <h2 className="text-2xl">{msg.message}</h2>
                  {/* <img src="https://pbs.twimg.com/profile_images/1201553102849167360/lwNVMXo7_400x400.jpg" alt="" className="w-[30%]" /> */}
                </div>
                <Corazones />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
