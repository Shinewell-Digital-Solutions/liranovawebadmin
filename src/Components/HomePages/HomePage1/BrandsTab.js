import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";

const BrandsTab = ({ name,setBrandSearch,brandData }) => {

  return (
    <>
      <CheckBoxField name={`[content][brands][status]`} title="status" />
      <SearchableSelectInput
        nameList={[
          {
            name: name,
            title: "brands",
            inputprops: {
              name: name,
              id: name,
              options: brandData || [],
              setsearch: setBrandSearch,
            },
          },
        ]}
      />
    </>
  );
};

export default BrandsTab;
