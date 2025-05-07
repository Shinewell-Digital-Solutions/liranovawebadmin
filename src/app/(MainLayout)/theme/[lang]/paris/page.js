"use client";
import HomePageOneForm from "@/Components/HomePages/HomePage1";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeOne = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePageOneForm title={"theme_paris_settings"} buttonName="save" />;
};

export default ThemeOne;
