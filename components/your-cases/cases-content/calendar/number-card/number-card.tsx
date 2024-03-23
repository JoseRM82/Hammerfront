import { FunctionComponent } from "react";
import { Popover } from "antd";

const NumberCard: FunctionComponent<Props> = ({ className, number, month, year }) => {
    const content = (
        <div className={`${className} new-citation`}>+ add a new citation</div>
    )
        
    return (
        number ? <Popover trigger='click' content={content}>
            <div className={className}>
                {number}
            </div>
        </Popover>
        :
        <div className={className}></div>
    )
}

export default NumberCard

interface Props {
    className?: string;
    number?: string;
    month?: string;
    year?: string;
    citation?: Citation;
}
    
interface Citation {
    hour: string;
    minute: string;
    content: string;
}