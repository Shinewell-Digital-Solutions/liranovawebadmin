import { useQuery } from '@tanstack/react-query';
import request from '../../../Utils/AxiosUtils';
import { blog } from '../../../Utils/AxiosUtils/API';
import Loader from '../../CommonComponent/Loader';
import CheckBoxField from '../../InputFields/CheckBoxField';
import MultiSelectField from '../../InputFields/MultiSelectField';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation';

const FeatureBlog4 = ({ values, setFieldValue }) => {
    
    const { t } = useTranslation( 'common');
    const router = useRouter()
    const { data, isLoading } = useQuery([blog], () => request({ url: blog },router), {
        refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem.id, name: elem.title } })
    });
    if (isLoading) return <Loader />
    return (
        <>
            <SimpleInputField nameList={[{ name: `[content][featured_blogs][title]`, placeholder: t("enter_title"), title: "title" }]} />
            <MultiSelectField name='featureBlogSelect' title="blog" data={data} values={values} setFieldValue={setFieldValue} />
            <CheckBoxField name={`[content][featured_blogs][status]`} title="status" />
        </>
    )
}

export default FeatureBlog4