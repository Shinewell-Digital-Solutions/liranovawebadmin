"use client";
import HomePageNineForm from "@/Components/HomePages/HomePage9";
import LanguageContext from "@/Helper/LanguageContext";
import { useContext, useEffect } from "react";

const ThemeNine = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <HomePageNineForm title={"theme_denver_settings"} />;
};
export default ThemeNine;
