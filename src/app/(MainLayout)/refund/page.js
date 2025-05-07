'use client'
import AllRefundTable from "@/Components/Refund/AllRefundTable";
import { RefundAPI } from "@/Utils/AxiosUtils/API";
import { Col } from "reactstrap";

const Refund = () => {
    return (
        <Col sm="12">
            <AllRefundTable onlyTitle={true} url={RefundAPI} moduleName="refund" />
        </Col>
    );
}

export default Refund