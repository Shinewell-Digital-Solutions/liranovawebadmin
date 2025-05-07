'use client'
import useUpdate from "@/Utils/Hooks/useUpdate";
import { blog, tag } from "@/Utils/AxiosUtils/API";
import TagForm from "@/Components/Tag/TagForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import { useContext, useEffect } from "react";
import LanguageContext from "@/Helper/LanguageContext";

const BlogTagUpdate = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useUpdate(tag, updateId, `${blog}${tag}`);
  return (
    updateId && (
      <FormWrapper title="edit_tag" lang={lang}>
        <TagForm mutate={mutate} updateId={updateId} loading={isLoading} type={"post"}  buttonName="update" language={lang}/>
      </FormWrapper>
    )
  );
};

export default BlogTagUpdate;
