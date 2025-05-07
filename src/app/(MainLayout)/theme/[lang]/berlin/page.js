"use client";
import HomePageSixForm from "@/Components/HomePages/HomePage6";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeSix = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePageSixForm title={"theme_berlin_settings"} />;
};

export default ThemeSix;
