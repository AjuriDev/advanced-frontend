import {FC} from 'react';

import {ClassName} from "shared/ui/types";
import {joinClassNames as cn} from "shared/lib/utils";
import {AppRoutes, RoutePath} from "shared/lib/constants";
import {UIColors} from "shared/ui/lib/constants";

import {AppLink} from "shared/ui";

import cls from './Navbar.module.scss';

interface NavbarProps extends ClassName {}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props
    return (
        <div className={cn(cls.Navbar, undefined, [className])}>
            <AppLink color={UIColors.SECONDARY} to={RoutePath[AppRoutes.MAIN]}>Главная</AppLink>
            <AppLink color={UIColors.SECONDARY} to={RoutePath[AppRoutes.ABOUT]}>О сайте</AppLink>
        </div>
    );
};

export default Navbar;