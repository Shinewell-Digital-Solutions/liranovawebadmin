'use client'
import SettingForm from "@/Components/Setting/SettingForm";
import { updateSetting } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import SettingContext from "@/Helper/SettingContext";
import { useContext } from "react";
import LanguageContext from "@/Helper/LanguageContext";

const Setting = () => {
  const { dispatch, setCurrencySymbol, setSettingObj } = useContext(SettingContext)
  const {setLocalLanguage} = useContext(LanguageContext);
  
  const { mutate, isLoading } = useCreate(updateSetting, false, false, true, (resDta) => {
    if (resDta.status == 200 || resDta.status == 201) {
      resDta?.data?.values?.general['mode'] == "dark-only" ? document.body.classList.add("dark-only") : document.body.classList.remove("dark-only")
      resDta?.data?.values?.general['admin_site_language_direction'] === 'ltr' ? (document.documentElement.dir = "ltr") : (document.documentElement.dir = "rtl");
      setCurrencySymbol(resDta?.data?.values?.general?.default_currency?.symbol)
      setLocalLanguage(resDta?.data?.values?.general?.default_language?.locale)
      setSettingObj(resDta?.data?.values)
      dispatch({
        type: 'SETTINGIMAGE',
        logo: resDta?.data?.values?.general['site_logo_image'] ? resDta?.data?.values?.general['site_logo_image'] : undefined,
        responsiveImage: resDta?.data?.values?.general['responsive_image']?.original_url ? resDta?.data?.values?.general['responsive_image']?.original_url : undefined,
        title: resDta?.data?.values["general"]['site_title'],
        tagline: resDta?.data?.values["general"]['site_tagline'],
        copyRight: resDta?.data?.values["general"]['copyright'],

        tinyLogo: resDta?.data?.values["general"]["tiny_logo_image"],
        lightLogo: resDta?.data?.values["general"]["light_logo_image"],
        darkLogo: resDta?.data?.values["general"]["dark_logo_image"],
        favicon: resDta?.data?.values["general"]["favicon_image"],
      })
    }
  });
  return <SettingForm mutate={mutate} loading={isLoading} title={"settings"} />;
};

export default Setting;
