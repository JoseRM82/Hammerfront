import { FunctionComponent } from "react";

const ChatsList: FunctionComponent<Props> = ({ className, name, last_message, messages_counter, onSelectChat }) => {
  return (
    <div className={className} onClick={onSelectChat}>
      <div className="chat_content">
        <div className="chat_content-name">{name}</div>
        <div className="chat_content-message">{last_message ? last_message : ''}</div>
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