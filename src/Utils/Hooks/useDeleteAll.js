import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../AxiosUtils";
import SuccessHandle from "../CustomFunctions/SuccessHandle";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const useDeleteAll = (reFetchKeys, setIsCheck) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(
    (deleteIds) =>
      request(
        {
          url: `${reFetchKeys}/deleteAll`,
          method: "post",
          data: { ids: deleteIds },
        },
        router
      ),
    {
      onSuccess: (resData) => {
        SuccessHandle(resData, false, false, "Deleted Successfully");
        reFetchKeys && queryClient.invalidateQueries({ queryKey: reFetchKeys });
        setIsCheck([]);
      },
    }
  );
};

export default useDeleteAll;
