import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Welcome to the Saas App</h1>
      <Button>Let's get started</Button>
      <Button className="flex items-center gap-2 bg-black text-white">
        Sign In
      </Button>
    </div>
  );
};

export default Page;