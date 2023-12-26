import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const items: MenuProps['items'] = [
        {
            key: '1',
            label: <Link to='/'>Galería</Link>,
        },
    ]
;