import { create } from "zustand";

export const usePosts = create((set, get) => ({
  contentPosts: [1, 2, 3],

  setContentPosts: (contentPosts) =>
    set(() => ({ contentPosts: contentPosts })),
  setNewPosts: (newPosts) => {
    const { contentPosts } = get();

    set(() => ({ contentPosts: [...contentPosts, newPosts] }));
  },
}));
