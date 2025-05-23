'use client'
import CurrencyForm from "@/Components/Currency/CurrencyForm";
import { currency } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const CreateCurrency = () => {
    const { mutate, isLoading } = useCreate(currency, false, "/currency");
    return (
        <FormWrapper title="add_currency">
            <CurrencyForm mutate={mutate} loading={isLoading} buttonName="save" />
        </FormWrapper>
    )
}

export default CreateCurrency
