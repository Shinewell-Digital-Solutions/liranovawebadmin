import TableWarper from '../../../Utils/HOC/TableWarper'
import ShowTable from '../../Table/ShowTable';

const TopStore = ({ data, ...props }) => {
    const headerObj = {
        checkBox: false,
        isOption: false,
        isSerialNo:false,
        noEdit: false,
        isSerialNo: false,
        column: [
            { title: "store_name", apiKey: "store_name" },
            { title: "orders", apiKey: "orders_count" },
            { title: "earning", apiKey: "order_amount" },
        ],
        data: data || []
    };
    return (
        <>
            <ShowTable {...props} headerData={headerObj} />
        </>
    )
}

export default TableWarper(TopStore)