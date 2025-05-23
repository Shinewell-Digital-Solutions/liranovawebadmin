import React, { useState } from 'react'
import LeftSidebarAccordion1 from './LeftSidebarAccordion1'
import LeftSidebarAccordion2 from './LeftSidebarAccordion2'
import LeftSidebarAccordion3 from './LeftSidebarAccordion3'
import LeftSidebarAccordion4 from './LeftSidebarAccordion4'
import SellerPage from './SellerPage'

const LeftSidebarTab = ({setStoreSearch, storeData, values, setFieldValue, productData, categoryData, setSearch }) => {
    const [active, setActive] = useState(0)
    return (
        <>
            <LeftSidebarAccordion1 values={values} setFieldValue={setFieldValue} active={active} setActive={setActive} productData={productData} setSearch={setSearch} />
            <LeftSidebarAccordion2 values={values} setFieldValue={setFieldValue} active={active} setActive={setActive} categoryData={categoryData} />
            <LeftSidebarAccordion3 values={values} setFieldValue={setFieldValue} active={active} setActive={setActive} productData={productData} categoryData={categoryData} setSearch={setSearch} />
            <LeftSidebarAccordion4 values={values} setFieldValue={setFieldValue} active={active} setActive={setActive} productData={productData} setSearch={setSearch} />
            <SellerPage values={values} setFieldValue={setFieldValue} active={active} setActive={setActive} storeData={storeData} setSearch={setSearch} setStoreSearch={setStoreSearch} />
            </>
    )
}

export default LeftSidebarTab