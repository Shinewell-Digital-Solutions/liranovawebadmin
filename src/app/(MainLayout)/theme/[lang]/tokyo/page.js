"use client";
import HomePageTwoForm from "@/Components/HomePages/HomePage2";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeTwo = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePageTwoForm title={"theme_tokyo_settings"} />;
};
export default ThemeTwo;
