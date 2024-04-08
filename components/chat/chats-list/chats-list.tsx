import { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";

const ChatsList: FunctionComponent<Props> = ({ className, name, last_message, messages_counter, onSelectChat }) => {
  return (
    <div className={className} key={uuidv4()} onClick={onSelectChat}>
      <div className="chat_content">
        <div className="chat_content-name">{name}</div>
        <div className="chat_content-message">{last_message}</div>
      </div>
      <div className="chat_counter">{messages_counter! > 0 ? `(${messages_counter})` : ''}</div>
    </div>
  )
}

interface Props {
  className?: string;
  onSelectChat?: () => void;
  name?: string;
  last_message?: string;
  messages_counter?: number;
}

export default ChatsList