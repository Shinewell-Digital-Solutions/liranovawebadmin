import Image from "next/image";
import { dateFormate } from "../../Utils/CustomFunctions/DateFormate";
import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import PlaceHolderImage from '../../../public/assets/images/placeholder.png';
import { useContext } from "react";
import SettingContext from "@/Helper/SettingContext";

const AllCategoriesTable = ({ data, ...props }) => {
  const { settingObj } = useContext(SettingContext); 
  const language = settingObj?.general?.default_language?.locale

  const formatData = (data) => {
    return data.map((item) => ({
      id: item.id,
      Name: item.name,
      Image: <Image src={item.media?.filter((item) => item.collection_name == "image")[0]?.original_url || PlaceHolderImage} height="100" width="100" alt={item.name} />,
      Icon: <Image src={item.media?.filter((item) => item.collection_name == "icon")[0]?.original_url || PlaceHolderImage} height="100" width="100" alt={item.name} />,
      CreateAt: dateFormate(item.created_at),
      status: item.status,
    }));
  };
  if (!data) return null;
  return <ShowTable {...props} data={formatData(data)} lang={language} />;
};

export default TableWarper(AllCategoriesTable);