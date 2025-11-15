import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Link href={"/todos"}>
        <Button size={"lg"} className="cursor-pointer" variant={"default"}>
          TO-DO
        </Button>
      </Link>
    </div>
  );
};

export default page;
