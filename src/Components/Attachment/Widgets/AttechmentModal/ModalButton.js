import { useTranslation } from "react-i18next";
import Btn from "../../../../Elements/Buttons/Btn";

const ModalButton = ({
    setModal,
    attachmentsData,
    dispatch,
    state,
    name,
    setSelectedImage,
    setFieldValue,
    tabNav,
    multiple,
    mutate,
    isLoading,
    showImage,
    values
}) => {
    const { t } = useTranslation('common');
    const storeImageObject = name?.split("_id")[0];

    const handleClick = (value) => {
        if (tabNav === 2) {
            if (state.setBrowserImage) {
                let formData = new FormData();
                Object.values(state.setBrowserImage.attachments).forEach((el, i) => {
                    formData.append(`attachments[${i}]`, el);
                });
                mutate(formData);
            }
        } else {
            if (multiple) {
                if (value && setFieldValue && typeof setFieldValue === "function") {
                    setSelectedImage([...state.selectedImage]);
                    setFieldValue(name, state.selectedImage.map((img) => img.id));
                }
            } else {
                if (state?.selectedImage?.length > 0) {
                    const selectedItem = attachmentsData?.find((item) => item.id === value[0]?.id);
                    if (!selectedItem) return;

                    if (showImage) {
                        setFieldValue?.(name, value[0]);
                    } else {
                        if (typeof setFieldValue === "function") {
                            setFieldValue(name, selectedItem.id);
                            if (storeImageObject) {
                                setFieldValue(storeImageObject, selectedItem);
                            }
                        }
                        setSelectedImage([selectedItem]);
                    }
                }
            }
        }
        setModal(false);
    };

    return (
        <div className="media-bottom-btn">
            <div className="left-part">
                <div className="file-detail">
                    <h6>{state.selectedImage?.length || 0} {t("file_selected")}</h6>
                    <a
                        href="#"
                        className="font-red"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch({ type: "SELECTEDIMAGE", payload: [] });
                        }}
                    >
                        {t("clear")}
                    </a>
                </div>
            </div>
            <div className="right-part">
                <Btn
                    type="submit"
                    className="btn btn-solid"
                    title={tabNav === 2 ? "Submit" : t("insert_media")}
                    loading={Number(isLoading)}
                    onClick={() => handleClick(state.selectedImage)}
                />
            </div>
        </div>
    );
};

export default ModalButton;
