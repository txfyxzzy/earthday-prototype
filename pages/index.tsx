import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Logo from "../components/logo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header";
import { getCountry, setCss } from "../components/setStyles";
import config from "../constants/config.json";
import { main } from "../utils/operatest";  //added to include the Opera test code

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [countryCode, setCountryCode] = useState("");

  main //added to include the Opera test code

  useEffect(() => {
    setMounted(true);
    const tempCode = getCountry();
    setCountryCode(tempCode);
    setCss();
    setTimeout(() => {
      router.push("/welcome", "/welcome", {
        locale: config[tempCode].lang[0].code,
      });
    }, 1500);
  }, []);
  console.log("countryCode", countryCode);
  return (
    mounted && (
      <div>
        <div>
          <Header />
          <div className="splash-screen">
            <Logo />
          </div>
        </div>
      </div>
    )
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
