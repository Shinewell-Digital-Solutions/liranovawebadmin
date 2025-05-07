import CheckBoxField from '../../InputFields/CheckBoxField';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const ProductListCategory6Tab = ({ nameKey, productName, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: `[content][${nameKey}][title]`, placeholder: t("enter_title"), title: "title" }
            ]} />
            <SearchableSelectInput
                nameList={
                    [{
                        name: productName,
                        title: "products",
                        inputprops: {
                            name: productName,
                            id: productName,
                            options: productData || [],
                            setsearch: setSearch,
                        }
                    },
                    ]}
            />
            <CheckBoxField name={`[content][${nameKey}][status]`} title="status" />
        </>
    )
}

export default ProductListCategory6Tab