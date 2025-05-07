"use client";
import HomePage7 from "@/Components/HomePages/HomePage7";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeSeven = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePage7 title={"theme_moscow_settings"} />;
};

export default ThemeSeven;
