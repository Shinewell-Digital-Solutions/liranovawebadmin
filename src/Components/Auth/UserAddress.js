import { useQuery } from "@tanstack/react-query";
import { Field } from "formik";
import { Col } from "reactstrap";
import request from "../../Utils/AxiosUtils";
import { country } from "../../Utils/AxiosUtils/API";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import { ReactstrapInput } from "../ReactstrapFormik";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const UserAddress = ({ values }) => {
  const router =useRouter()
  const { t } = useTranslation('common')
  const { data  } = useQuery([country], () => request({ url: country },router), {refetchOnWindowFocus: false, select: (res) => res.data.map((country) => ({ id: country.id, name: country.name, state: country.state })) });

  return (
    <>
      <Col sm="4">
        <SearchableSelectInput
          nameList={[
            {
              formfloat: "true",
              notitle: "true",
              name: "country_id",
              floatlabel: "Country",
              require: "true",
              inputprops: {
                name: "country_id",
                id: "country_id",
                options: data,
                defaultOption: "Select state",
              },
              disabled: values?.["country_id"] ? false : true,
            },
          ]}
        />
      </Col>
      <Col sm="4">
        <div className="form-floating theme-form-floating log-in-form">
          <SearchableSelectInput
            nameList={[
              {
                floatlabel: "State",
                formfloat: "true",
                name: "state_id",
                notitle: "true",
                require: "true",
                inputprops: {
                  name: "state_id",
                  id: "state_id",
                  options: values?.["country_id"] ? data?.filter((country) => Number(country.id) === Number(values?.["country_id"]))?.[0]?.["state"] : [],
                  defaultOption: "Select state",
                },
                disabled: values?.["country_id"] ? false : true,
              },
            ]}
          />
        </div>
      </Col>
      <Col sm="4" xs="6">
        <Field name="city" inputprops={{noExtraSpace:true}}  component={ReactstrapInput} type="text" className="form-control" id="city" placeholder={t("city")} label="city" />
      </Col>
      <Col xs="12">
        <Field name="address" inputprops={{noExtraSpace:true}} component={ReactstrapInput} type="textarea" className="form-control" id="address" placeholder={t("address")} label="address"/>
      </Col>
      <Col sm="6">
        <Field name="pincode" inputprops={{noExtraSpace:true}} component={ReactstrapInput} type="text" className="form-control" id="pincode" placeholder={t("pincode")} label="pincode" />
      </Col>
    </>
  );
};

export default UserAddress;
