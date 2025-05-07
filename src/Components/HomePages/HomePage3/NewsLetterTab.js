import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";
import CheckBoxField from "../../InputFields/CheckBoxField";
import FileUploadField from "../../InputFields/FileUploadField";
import SimpleInputField from "../../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const NewsLetterTab = ({ values, setFieldValue }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: "[content][news_letter][title]", placeholder: t("enter_title"), title: "title" },
                { name: "[content][news_letter][sub_title]", placeholder: t("enter_sub_title"), title: "sub_title" }
            ]} />
            <FileUploadField name="newsLetterImage" title='image' id="newsLetterImage" showImage={values['newsLetterImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('1600x218px')} />
            <CheckBoxField name="[content][news_letter][status]" title="status" />
        </>
    )
}
export default NewsLetterTab