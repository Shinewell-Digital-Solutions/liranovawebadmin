import CheckBoxField from '../../InputFields/CheckBoxField';
import MultiSelectField from '../../InputFields/MultiSelectField';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const CategoryProductTab = ({ values, setFieldValue, categoryData }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: "[content][categories_products][title]", placeholder: t("enter_title"), title: "title" }]} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='categoryProduct' title="categories" data={categoryData} />
            <CheckBoxField name="[content][categories_products][status]" title="status" />
        </>
    )
}

export default CategoryProductTab