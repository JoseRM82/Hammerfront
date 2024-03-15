import { FunctionComponent } from "react";

const NumberCard: FunctionComponent<Props> = ({ className, number }) => {
    return (
        <div className={className}>
            {number}
        </div>
    )
}

export default NumberCard

interface Props {
    className?: string;
    number?: string;
}