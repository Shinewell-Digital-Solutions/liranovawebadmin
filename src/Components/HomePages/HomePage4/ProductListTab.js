import SimpleInputField from "../../InputFields/SimpleInputField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";


import { useTranslation } from "react-i18next";

const ProductListTab = ({ productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: `[content][products_list_1][title]`, placeholder: t("enter_title"), title: "title" }, { name: `[content][products_list_1][description]`, placeholder: t("enter_description"), title: "description", type: "textarea" }
            ]} />
            <SearchableSelectInput
                nameList={
                    [{
                        name: 'productList1Product',
                        title: "products",
                        inputprops: {
                            name: 'productList1Product',
                            id: 'productList1Product',
                            options: productData || [],
                            setsearch: setSearch,
                        }
                    },
                    ]}
            />
            <CheckBoxField name={`[content][products_list_1][status]`} title="status" />
        </>
    )
}
export default ProductListTab