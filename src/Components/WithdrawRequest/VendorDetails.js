import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { RiAddLine, RiWalletLine } from 'react-icons/ri';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import request from '../../Utils/AxiosUtils';
import { VendorTransations, WithdrawRequestAPI } from '../../Utils/AxiosUtils/API';
import AllWithdrawRequestTable from './AllWithdrawRequestTable';
import WithdrawModal from './WithdrawModal';

import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation';

const VendorDetails = () => {
    const router = useRouter();
    const { t } = useTranslation( 'common');
    const [isCheck, setIsCheck] = useState([]);
    const [modal, setModal] = useState(false)
    const [role, setRole] = useState('')
    const { data, isLoading, refetch } = useQuery([VendorTransations, role], () => request({ url: VendorTransations },router), { enabled: false, refetchOnWindowFocus: false, select: (data) => data.data });
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("role"))?.name == 'vendor') {
            refetch()
        }
        setRole(JSON.parse(localStorage.getItem("role"))?.name)
    }, [])
    return (
        <>
            {role == "vendor" && <Container fluid={true}>
                <Row>
                    <Col sm="6" lg="7" xxl='8'>
                        <Card className="pending-balance-sec">
                            <CardBody>
                                <div className="wallet-sec theme-form">
                                    <div className="wallet-amount w-100">
                                        <div className="wallet-icon">
                                            <RiWalletLine />
                                        </div>
                                        <div>
                                            <h2 className="fw-semibold">
                                                <span>{`${(data?.balance || 0).toFixed(2)}`}</span>
                                            </h2>
                                            <h5>{t("pending_balance")}</h5>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" lg="5" xxl='4'>
                        <Card className='withdraw-card'>
                            <CardBody>
                                <a className="withdraw-btn" onClick={() => setModal(true)}>
                                    <div className="plus-icon">
                                        <RiAddLine />
                                    </div>
                                    <h3>{t("send_withdraw_request")}</h3>
                                </a>
                                <WithdrawModal setModal={setModal} modal={modal} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>}
            <Col sm="12">
                <AllWithdrawRequestTable onlyTitle={true} url={WithdrawRequestAPI} moduleName="Withdrawal" isCheck={isCheck} setIsCheck={setIsCheck} dateRange={true} />
            </Col>
        </>
    )
}

export default VendorDetails