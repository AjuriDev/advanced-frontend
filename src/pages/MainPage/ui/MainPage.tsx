import {FC} from "react";
import {useTranslation} from "react-i18next";

const MainPage:FC = () => {
    const {t} = useTranslation('mainPage');

    return (
        <div className="page">
            {t('pageName')}
        </div>
    );
};

export default MainPage;