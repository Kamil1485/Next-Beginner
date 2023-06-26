import { cookies } from "next/headers";
const getPosts = async () => {
  /*
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
 */
  const posts = [
    { id: 1, post: "Hello there" },
    { id: 2, post: "How are you brother" },
  ];
  console.log("Getposts dayım");
  console.log(posts);
  return posts;
};
export default async function RouteSegmentConfig() {
  await getPosts();
  return <div>RougeSegmentConfig Page</div>;
}
//force-static:cookies(),headers(),useSearchParams() retun değerlerini empty olarak döndürür,
export const dynamic = "force-dynamic"; //default:auto,Sayfanın dinamik mi yoksa static mi olmasını belirleyebilriiz.
/*
export const dynamicParams = true;
export const revalidate = "force-static";
export const fetchCache = "auto";
export const runtime = "nodejs";
export const prefferedRegion = "auto";

*/
