import { publicPages } from "@/lib/public-pages";
export const dynamicParams = false;
export function generateStaticParams() {
  return publicPages().filter((page) => page.path !== "/").map((page) => ({
    path: page.path.slice(1).split("/"),
  }));
}
export default function OtherPageHead() {
  return null;
}
