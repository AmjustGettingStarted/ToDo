import { testDb } from "@/actions/testDb";

export default async function Page() {
  const res = await testDb();

  return <pre className="p-6">{JSON.stringify(res, null, 2)}</pre>;
}
