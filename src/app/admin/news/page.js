"use client";
import useSWR from "swr";
export default function PageNews() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher);
  if (isLoading) {
    return (
      <div>
        <p>Loading . . .</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Gagal Mengambil Data</p>
      </div>
    );
  }

  return (
    <section id="Container" className="flex h-screen justify-center">
      <div className="flex flex-col gap-3">
        <div classname="border-2 border-slate-200 p-4 rounded-lg" key={index}>
        <p>{posts.title}</p>
        </div>
      </div>
    </section>
  );
}
