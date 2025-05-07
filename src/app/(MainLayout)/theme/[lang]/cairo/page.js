"use client";
import CairoHomePage from "@/Components/HomePages/CairoHomePage";
import LanguageContext from "@/Helper/LanguageContext";
import React, { useContext, useEffect } from "react";

const cairoPage = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  return <CairoHomePage title={"theme_cairo_settings"} />;
};

export default cairoPage;
