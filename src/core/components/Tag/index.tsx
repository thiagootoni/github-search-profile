import React from "react";
import './styles.scss';

type Props = {
    name?: string,
    info?: string,
    size?: string
}

const Tag = ({name, info, size} : Props) => (
    <div className={"tag "+size }>
        <span>{name}: </span> {info}
    </div>
);

export default Tag;