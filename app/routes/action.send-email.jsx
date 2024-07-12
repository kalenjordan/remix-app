import { json, redirect } from "@remix-run/node"; // or cloudflare/deno

export async function loader() {
  const response = await fetch("https://github.com/kalenjordan.json");
  const data = await response.json();
  
  return json({ data });
}
