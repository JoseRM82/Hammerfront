import { FunctionComponent } from "react";

const MessagesList: FunctionComponent<Props> = ({ className, message }) => {
  return (
    <div className={className}>
      {message}
    </div>
  )
}

interface Props {
  className?: string;
  myMessage?: boolean;
  message?: string;
}

export default MessagesList