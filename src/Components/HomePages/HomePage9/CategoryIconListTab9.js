import FileUploadField from "../../InputFields/FileUploadField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";
import MultiSelectField from "../../InputFields/MultiSelectField";

const CategoryIconListTab9 = ({ values, setFieldValue, categoryData }) => {
    return (
        <>
            <FileUploadField name="categoriesIconImage" title='image' id="categoriesIconImage" showImage={values['categoriesIconImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('153x157px')} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name="categoryIconList" title="categories" data={categoryData} />
            <CheckBoxField name={`[content][categories_icon_list][status]`} title="status" />
        </>
    )
}
export default CategoryIconListTab9