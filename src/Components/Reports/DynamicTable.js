import React from "react";
import TableWarper from "@/Utils/HOC/TableWarper";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import ShowTable from "../Table/ShowTable";
import { useTranslation } from "react-i18next";

const DynamicTable = ({
  data,
  showFieldsTable,
  loading,
  moduleName,
  ...props
}) => {
  const { t } = useTranslation("common");
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"]);

  const extractNestedKeys = (field) => {
    const keys = field.split(".");
    // Remove the first key ("store") and return the remaining keys
    return keys.length > 1 ? keys.slice(1) : [];
  };
  
  const key = (field) => {
    const keys = field?.includes(".") ? field.split(".")[0] : field;
    return keys;
  };
  

  const headerObj = {
    checkBox: false,
    isSerialNo: false,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    optionHead: { title: "Action" },
    column: showFieldsTable.map((field) => ({
      title: t(field.replace(/_/g, " ").toUpperCase()),
      apiKey: key(field),
      subKey: extractNestedKeys(field),
      sorting: true,
      sortBy: "desc",
    })),
    data: data || [],
  };

  if (!data) return <Loader />;

  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(DynamicTable);
