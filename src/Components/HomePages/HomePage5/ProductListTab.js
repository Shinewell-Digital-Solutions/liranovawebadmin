import CheckBoxField from '../../InputFields/CheckBoxField';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const ProductListTab = ({ productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: `[content][product_with_deals][products_list][title]`, placeholder: t("enter_title"), title: "title" }
            ]} />
            <SearchableSelectInput
                nameList={
                    [{
                        name: 'productDealProductIds',
                        title: "products",
                        inputprops: {
                            name: 'productDealProductIds',
                            id: 'productDealProductIds',
                            options: productData || [],
                            setsearch: setSearch,
                        }
                    },
                    ]}
            />
            <CheckBoxField name={`[content][product_with_deals][products_list][status]`} title="status" />
        </>
    )
}

export default ProductListTab