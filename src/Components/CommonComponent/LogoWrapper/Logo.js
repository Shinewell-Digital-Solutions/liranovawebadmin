import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import SettingContext from "../../../Helper/SettingContext";


const Logo = () => {
  const { state, settingObj  } = useContext(SettingContext);
  return (
    // sidebar brand logo
    <>
    <Link href="/dashboard">
      {state?.setLightLogo?.original_url ? <Image className="for-white" src='/assets/images/brand-logo.png' alt="Light Logo" width={300} height={35} priority /> : <h2 className="text-white">{settingObj?.general?.site_name || 'Logo Here'}</h2>}
    </Link>

    {/* liranova css brand logo */}
    <style>{`
    .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper .logo-wrapper a img, .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper .logo-icon-wrapper a img{
    width: 100% !important;
    }
    `}</style>
    </>
  );
};

export default Logo;
