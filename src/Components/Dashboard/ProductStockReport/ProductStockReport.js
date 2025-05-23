import { useContext } from 'react';
import placeHolderImage from '../../../../public/assets/images/placeholder.png';
import TableWarper from '../../../Utils/HOC/TableWarper'
import ShowTable from '../../Table/ShowTable'
import SettingContext from '@/Helper/SettingContext';

const ProductStockReport = ({ data, ...props }) => {
    const { settingObj } = useContext(SettingContext); 
    const language = settingObj?.general?.default_language?.locale

    const headerObj = {
        checkBox: false,
        isOption: true,
        noEdit: false,
        isSerialNo: false,
        noDelete: true,
        editRedirect: "product",
        optionHead: { title: "action" },
        noCustomClass: true,
        column: [
            { title: 'image', apiKey: 'product_thumbnail', type: 'image', placeholder: placeHolderImage },
            { title: 'name', apiKey: 'name' },
            { title: 'quantity', apiKey: 'quantity' },
            { title: 'stock', apiKey: 'stock_status', type: 'stock_status' },
        ],
        data: data || []
    };
    return (
        <ShowTable {...props} headerData={headerObj} keyInPermission={"product"} lang={language} />
    )
}

export default TableWarper(ProductStockReport)