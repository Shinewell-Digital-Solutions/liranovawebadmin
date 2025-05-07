"use client";
import HomePageFourForm from "@/Components/HomePages/HomePage4";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeFour = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePageFourForm title={"theme_rome_settings"} />;
};

export default ThemeFour;
