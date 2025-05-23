import React, { useState } from 'react'
import { TabContent, TabPane } from 'reactstrap';
import TabTitle from '@/Components/Widgets/TabTitle';
import { ThemeSixMainHorizontalTab } from '../../../Data/TabTitleListData';
import LeftSidebarTab from './LeftSidebarTab';
import CheckBoxField from '../../InputFields/CheckBoxField';
import RightSidebar6Tab from './RightSidebar6Tab';

const MainContent6Tab = ({ values, setFieldValue, productData,setStoreSearch, storeData,categoryData, setSearch }) => {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <>
            <CheckBoxField name="[content][main_content][status]" title="status" />
            <div className="inside-horizontal-tabs">
                <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={ThemeSixMainHorizontalTab} />
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <LeftSidebarTab setStoreSearch={setStoreSearch} storeData={storeData} values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
                    </TabPane>
                    <TabPane tabId="2">
                        <RightSidebar6Tab values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
                    </TabPane>
                </TabContent>
            </div>
        </>
    )
}

export default MainContent6Tab