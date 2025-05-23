"use client"
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowBox from "@/Elements/Alerts&Modals/ShowBox";
import Btn from "@/Elements/Buttons/Btn";
import SettingContext from "@/Helper/SettingContext";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import useHandleLogin from "@/Utils/Hooks/Auth/useLogin";
import { YupObject, emailSchema, passwordSchema, recaptchaSchema } from "@/Utils/Validation/ValidationSchemas";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";

const Login = () => {
  const [showBoxMessage, setShowBoxMessage] = useState();
  const { settingObj } = useContext(SettingContext);
  const { t } = useTranslation( 'common');
  const { mutate, isLoading } = useHandleLogin(setShowBoxMessage);
  const reCaptchaRef = useRef()

  return (
    <div className="box-wrapper">
      <ShowBox showBoxMessage={showBoxMessage} />
      <LoginBoxWrapper>
        <div className="log-in-title">
          <h3>{t("welcome_to_store")}</h3>
          <h4>{t("log_in_your_account")}</h4>
        </div>
        <div className="input-box">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={YupObject({ 
              email: emailSchema,
              password: passwordSchema,
              recaptcha: settingObj?.google_reCaptcha?.status ? recaptchaSchema  : ""
            })}
            onSubmit={mutate}>
            {({errors, touched, setFieldValue}) => (
              <Form className="row g-4">
                <Col sm="12">
                  <Field inputprops={{noExtraSpace:true}}  name="email" type="email" component={ReactstrapInput} className="form-control" id="email" placeholder={t("email_address")} label={t("email_address")} />
                </Col>
                <Col sm="12">
                  <Field inputprops={{noExtraSpace:true}} name="password" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder={t("password")} label={t("password")} />
                </Col>
                {settingObj?.google_reCaptcha?.status &&
                <Col sm="12">
                    <ReCAPTCHA                  
                      ref={reCaptchaRef}
                      sitekey={settingObj?.google_reCaptcha?.site_key}
                      onChange={(value) => {
                        setFieldValue('recaptcha', value);
                      }}
                    />
                  {errors.recaptcha && touched.recaptcha && <ErrorMessage name="recaptcha" render={(msg) =><div className="invalid-feedback d-block">{errors.recaptcha}</div>} />}
                </Col>}
                <Col sm="12">
                  <div className="forgot-box">
                    <Link href={`/auth/forgot-password`} className="forgot-password">
                      {t("forgot_password")}?
                    </Link>
                  </div>
                </Col>
                <Col sm="12">
                  <Btn title="log_in" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" loading={Number(isLoading)} />
                  <div className="sign-up-box">
                    <h4>{t("dont_account")}</h4>
                    <Link href={`/auth/register`}>{t('sign_up')}</Link>
                  </div>
                </Col>
              </Form>
            )}
          </Formik>
        </div>
      </LoginBoxWrapper>
    </div>
  );
};

export default Login;