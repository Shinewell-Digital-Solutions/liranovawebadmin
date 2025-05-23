import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Col, Input, Label, Row } from 'reactstrap'
import { HeaderOption } from '../../Data/TabTitleListData'
import request from '../../Utils/AxiosUtils'
import { product } from '../../Utils/AxiosUtils/API'
import Loader from '../CommonComponent/Loader'
import CheckBoxField from '../InputFields/CheckBoxField'
import InputWrapperComponent from '../InputFields/InputWrapperComponent'
import MultiSelectField from '../InputFields/MultiSelectField'
import SimpleInputField from '../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"
import { useRouter } from 'next/navigation'

const HeaderTab = ({ values, setFieldValue, categoryData }) => {

  const { t } = useTranslation('common');
  const router = useRouter();
  const handleClick = (val) => {
    setFieldValue("[options][header][header_options]", val.value)
  }
  const { data, isLoading } = useQuery([product], () => request({ url: product, params: { status: 1 } },router), { refetchOnWindowFocus: false, select: (res) => res?.data?.data });
  if (isLoading) return <Loader />
  return (
    <>
      <Row>
        <Col sm="12">
          <InputWrapperComponent name={"header_option"} classes="d-flex">
            <ul className="radio-type-sec">
              {HeaderOption.map((elem, i) => (
                <li key={i}>
                  <div className="selection-box">
                    <Input name="Header" type="radio" id={elem.id} checked={values['options']?.['header']?.['header_options'] == elem.value ? true : false} onChange={() => handleClick(elem)} />
                    <Label className='w-100' htmlFor={elem.id}>
                      <div>
                        <Image src={`/assets/images/theme-option/header/${elem.dummyImg}`} className="img-fluid dummy-img" alt={elem.value} width={1000} height={4000} />
                        <Image src={`/assets/images/theme-option/header/${elem.realImg}`} className="img-fluid real-img" alt={elem.value} width={1000} height={4000} />
                      </div>
                    </Label>
                  </div>
                </li>
              ))}
            </ul>
          </InputWrapperComponent>
          <CheckBoxField name="[options][header][sticky_header_enable]" title="sticky_header" />
          <CheckBoxField name="[options][header][page_top_bar_enable]" title="topbar" />
          {
            values['options']?.['header']?.['page_top_bar_enable'] ?
            values['options']?.['header']?.['top_bar_content']?.map((elem, i) => (
              <SimpleInputField
                nameList={[
                  {
                    name: `[options][header][top_bar_content]${i}[content]`, title: `topbar_content_${i + 1}`, placeholder: t("enter_top_bar_content"), helpertext: "*Utilize HTML tags for custom content presentation."
                  },
                ]} key={i} />
            ))
          :null}
          <CheckBoxField name="[options][header][page_top_bar_dark]" title="topbar_dark" />
          <SimpleInputField
            nameList={[
              { name: '[options][header][support_number]', title: "support_number", placeholder: t("enter_support_number") },
            ]} />
          <MultiSelectField values={values} setFieldValue={setFieldValue} name='today_deals' title="today_deals" data={data} helpertext="*Choose products to display in the deal popup on the header. Select up to 3 recommended products." />
          <MultiSelectField values={values} setFieldValue={setFieldValue} name='headerCategories' title='categories' data={categoryData || []} />
        </Col>
      </Row>
    </>
  )
}

export default HeaderTab