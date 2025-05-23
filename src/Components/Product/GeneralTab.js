import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import request from "../../Utils/AxiosUtils";
import { tax } from "../../Utils/AxiosUtils/API";
import { store } from "../../Utils/AxiosUtils/API";
import SimpleInputField from "../InputFields/SimpleInputField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import DescriptionInput from "../Widgets/DescriptionInput";
import SettingContext from "../../Helper/SettingContext";
import { useTranslation } from "react-i18next";
import AccountContext from "@/Helper/AccountContext";
import { useRouter } from "next/navigation";
import { generateSlug } from "@/Utils/CustomFunctions/SlugName";

const GeneralTab = ({ values, setFieldValue ,updateId }) => {  
  const { t } = useTranslation( 'common');
  const { state } = useContext(SettingContext)
  const {role} =useContext(AccountContext)
  const router = useRouter()
  const { data: taxData } = useQuery([tax], () => request({ url: tax, params: { status: 1 } },router), { refetchOnWindowFocus: false, select: (data) => data.data.data });
  const { data: StoreData } = useQuery([store], () => request({ url: store, params: { status: 1 } },router), { refetchOnWindowFocus: false, select: (data) => data.data.data.map((item) => ({ id: item.id, name: item.store_name })) });
  
  useEffect(() => {
    if (values.name && !updateId && !values.slug) {
      setFieldValue("slug", generateSlug(values.name));
    }
  }, [values.name, setFieldValue, updateId, values.slug]);

  return (
    <>
    {!updateId && <SearchableSelectInput
        nameList={[
          {
            name: "product_type",
            title: "product_type",
            require: "true",
            inputprops: {
              name: "product_type",
              id: "product_type",
              options: [
                { id: "physical", name: "Physical Product" },
                { id: "digital", name: "Digital Product" },
                { id: "external", name: "External/Affiliate  Product" },
              ],
              close: false
            },
          },
        ]}
      /> }
       {state?.isMultiVendor &&  role === 'admin'&& <SearchableSelectInput
        nameList={[
          {
            name: "store_id",
            title: "store",
            inputprops: {
              name: "store_id",
              id: "store_id",
              options: StoreData || [],
              close: false

            },
          },
        ]}
      />}
      <SimpleInputField nameList={[{ name: "name", require: "true", placeholder: t("enter_name"), value: values.name, onChange: (e) => { const nameValue = e.target.value; setFieldValue("name", nameValue); if (!updateId) { setFieldValue("slug", generateSlug(nameValue));}}, }, 
                                   { name: "slug", require: "true", placeholder: t("enter_slug"), value: values.slug, onChange: (e) => setFieldValue("slug", e.target.value)}, 
                                   { name: "short_description", require: "true", title: "short_description", type: "textarea", rows: 3, placeholder: t("enter_short_description"), helpertext: "*Maximum length should be 300 characters." }]} 
      />
      <DescriptionInput values={values} setFieldValue={setFieldValue} title={t('description')} nameKey="description" errorMessage={"Descriptionisrequired"} />
      <SearchableSelectInput
        nameList={[ 
          {
            name: "tax_id",
            title: "tax",
            require: "true",
            inputprops: {
              name: "tax_id",
              id: "tax_id",
              options: taxData || [],
            },
          },
        ]}
      />
    </>
  );
};

export default GeneralTab;
