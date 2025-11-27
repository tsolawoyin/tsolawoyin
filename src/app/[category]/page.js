import { capitalize } from "lodash";

export default async function Page({ params }) {
  const category = (await params).category;
  return <h1 className="text-3xl">{capitalize(category)}</h1>;
}
