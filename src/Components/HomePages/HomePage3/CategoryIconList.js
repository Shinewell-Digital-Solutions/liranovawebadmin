import FileUploadField from "../../InputFields/FileUploadField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import SimpleInputField from "../../InputFields/SimpleInputField";
import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";
import MultiSelectField from "../../InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const CategoryIconList = ({ values, setFieldValue, isTitleDescription, helpertext, categoryData }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            {isTitleDescription && <SimpleInputField nameList={[
                { name: `[content][categories_icon_list][title]`, placeholder: t("enter_title"), title: "title" },
                { name: `[content][categories_icon_list][description]`, placeholder: t("enter_description"), title: "description" }
            ]} />}
            <FileUploadField name="categoriesIconImage" title='image' id="categoriesIconImage" showImage={values['categoriesIconImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText(helpertext || '153x157px')} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name="categoryIconList" data={categoryData} title="categories" />
            <CheckBoxField name={`[content][categories_icon_list][status]`} title="status" />
        </>
    )
}
export default CategoryIconList