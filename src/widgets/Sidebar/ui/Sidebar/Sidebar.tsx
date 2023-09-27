import {FC, useState} from 'react';

import {ClassName} from "shared/ui/types";
import {joinClassNames as cn} from "shared/lib/utils";

import {Button} from "shared/ui";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

import cls from './Sidebar.module.scss';

interface SidebarProps extends ClassName {}

const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [opened, setOpened] = useState<boolean>(true)

    const handleToggle = () => {
        setOpened((prevState) => !prevState);
    }

    return (
        <div className={cn(cls.Sidebar, {[cls.opened]: opened}, [className])}>
            <Button onClick={handleToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;