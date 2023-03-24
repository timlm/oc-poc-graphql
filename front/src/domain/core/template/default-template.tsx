import type {ReactElement} from "react";
import "./default-template.scss";

interface defaultTemplateProps {
    children?: ReactElement,
    classname?: string,
    title?: string
}

const DefaultTemplate = ({ children, classname, title }: defaultTemplateProps) => {

    return (
        <div className={`default-template ${classname}`}>
            <div className="default-template__title">{title}</div>
            {children}
        </div>
    );
};

export default DefaultTemplate;
