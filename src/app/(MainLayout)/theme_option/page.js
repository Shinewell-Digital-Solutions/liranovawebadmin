'use client'

import ThemeOptionForm from "@/Components/ThemeOption";
import { ThemeOptions } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";

const ThemeOption = () => {
    const { mutate, isLoading } = useCreate(ThemeOptions, false, '/theme_option');
    return <ThemeOptionForm mutate={mutate} loading={isLoading} title={"theme_options"} />;
}

export default ThemeOption