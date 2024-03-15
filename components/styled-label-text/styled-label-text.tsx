import { FunctionComponent } from "react";

const StyledLabelText: FunctionComponent<Props> = ({ className, text, value, req, name, autof, type, onChange, handleInput, description, inputMode }) => {
  return (
    <label className={className}>
      <span className="styled-span">{text}</span>
      {description
        ? <textarea className='styled-textarea' {...handleInput ? { ...handleInput.register(name) } : ''} name={name} onChange={onChange} value={value} rows={3} />
        : <input className="styled-input" {...handleInput ? { ...handleInput.register(name) } : ''} type={type} autoFocus={autof} value={value} name={name} onChange={onChange} required={req} inputMode={inputMode} />
      }
    </label>
  )
}

export default StyledLabelText

interface Props {
  className?: string;
  name?: string;
  value?: string;
  text: string;
  handleInput?: any;
  type?: string;
  onChange?: (e: any) => void;
  spanSize?: string;
  inputSize?: string;
  req?: boolean;
  autof?: boolean
  description?: boolean;
  inputMode?: 'numeric' | undefined;
}