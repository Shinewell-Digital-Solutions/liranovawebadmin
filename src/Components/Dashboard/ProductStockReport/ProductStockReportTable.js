import { Col, Row } from "reactstrap";
import { Form, Formik } from "formik";
import { Category, product } from "../../../Utils/AxiosUtils/API";
import ProductStockReport from "./ProductStockReport";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";
import { useQuery } from "@tanstack/react-query";
import request from "../../../Utils/AxiosUtils";
import ReviewCard from "./ReviewCard";
import LatestBlogs from "./LatestBlogs";
import { checkPermission } from "@/Components/Common/checkPermissonList";
import { useRouter } from "next/navigation";

const ProductStockReportTable = () => {
  const router = useRouter()   

  const { data } = useQuery(
    [Category],
    () => request({ url: Category, params: { status: 1, type: "product" } },router),
    {
      refetchOnWindowFocus: false,
      select: (data) => data?.data?.data,
    }
  );
  return (
    <Row className="theme-form dashboard-form">
      {checkPermission("product.index") && (
        <Col xl={7} md={6}>
          <Formik initialValues={{ category_ids: "" }}>
            {({ values, setFieldValue }) => (
              <Form>
                <ProductStockReport
                  url={product}
                  moduleName={"product"}
                  paramsProps={{
                    category_ids: values["category_ids"]
                      ? values["category_ids"]
                      : null,
                    paginate: 8,
                    field: "quantity",
                    sort: "asc",
                  }}
                  filterHeader={{
                    noPagination: true,
                    noSearch: true,
                    noPageDrop: true,
                    customTitle: "product_stock_report",
                    customFilter: (
                      <SearchableSelectInput
                        nameList={[
                          {
                            name: "category_ids",
                            notitle: "true",
                            inputprops: {
                              name: "category_ids",
                              id: "category_ids",
                              options: data || [],
                              close:
                                values["category_ids"] !== "" ? true : false,
                            },
                          },
                        ]}
                      />
                    ),
                  }}
                />
              </Form>
            )}
          </Formik>
        </Col>
      )}

      <Col xl={5} md={6}>
        {checkPermission("review.index") && <ReviewCard />}
        {checkPermission("blog.index") && <LatestBlogs />}
      </Col>
    </Row>
  );
};

export default ProductStockReportTable;
