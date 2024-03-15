import { FunctionComponent } from "react";
import { Popover } from "antd";

const NumberCard: FunctionComponent<Props> = ({ className, number }) => {
    const content = (
        <div className={`${className} new-citation`}>+ add a new citation</div>
    )
        
    return (
        <div className={className}>
            <Popover trigger='click' content={content}>
                {number}
            </Popover>
        </div>
    )
}

export default NumberCard

interface Props {
    className?: string;
    number?: string;
    citation?: Citation;
}
    
interface Citation {
    hour: string;
    minute: string;
    content: string;
}