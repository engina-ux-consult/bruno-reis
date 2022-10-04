import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/criarconta");
  }, []);

  return (
    <div>
      <p>redirect create account</p>
    </div>
  );
};

export default Home;
