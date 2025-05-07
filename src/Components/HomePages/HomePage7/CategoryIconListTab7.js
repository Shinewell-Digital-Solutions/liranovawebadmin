import FileUploadField from "../../InputFields/FileUploadField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";
import MultiSelectField from "../../InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";


import { useTranslation } from "react-i18next";

const CategoryIconListTab7 = ({ values, setFieldValue, categoryData }) => {
    
    const { t } = useTranslation( 'common');

    return (
        <>
            <SimpleInputField nameList={[{ name: `[content][categories_icon_list][title]`, placeholder: t("enter_title"), title: "title" }]} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name="categoryIconList" title="categories" data={categoryData} />
            <CheckBoxField name={`[content][categories_icon_list][status]`} title="status" />
        </>
    )
}
export default CategoryIconListTab7