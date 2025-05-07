"use client";
import HomePageFiveForm from "@/Components/HomePages/HomePage5";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeFive = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePageFiveForm title={"theme_madrid_settings"} />;
};

export default ThemeFive;
