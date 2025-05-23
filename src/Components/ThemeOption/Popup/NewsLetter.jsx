import CheckBoxField from '@/Components/InputFields/CheckBoxField';
import FileUploadField from '@/Components/InputFields/FileUploadField';
import SimpleInputField from '@/Components/InputFields/SimpleInputField';
import { getHelperText } from '@/Utils/CustomFunctions/getHelperText';
import { useTranslation } from "react-i18next";

const NewsLetter = ({values ,setFieldValue}) => {
  
  const { t } = useTranslation( 'common');

  return (
    <>
      <CheckBoxField name="[options][popup][news_letter][is_enable]" title="status" />
      <SimpleInputField
             nameList={[
               { name: "[options][popup][news_letter][offer]", title: "offer", placeholder: t("offer"),type: "number" },
               { name: "[options][popup][news_letter][title]", title: "title", placeholder: t("enter_title") },
               { name: "[options][popup][news_letter][description]", title: "description", placeholder: t("enter_description") },
             ]} />
      <FileUploadField name="newsLetterImage" title='image' id="newsLetterImage" showImage={values['newsLetterImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('90x90px')} />
    </>
  )
}

export default NewsLetter