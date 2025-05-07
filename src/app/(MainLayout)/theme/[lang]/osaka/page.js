"use client";
import HomePageThreeForm from "@/Components/HomePages/HomePage3";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeThree = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePageThreeForm title={"theme_osaka_settings"} />;
};

export default ThemeThree;
