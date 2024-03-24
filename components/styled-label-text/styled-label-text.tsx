import { FunctionComponent } from "react";
import Image from "next/image";

const StyledLabelText: FunctionComponent<Props> = ({ className, text, value, req, name, image, autof, type, pass, onReveal, onChange, handleInput, description, inputMode, autoComplete, placeHolder }) => {
  const onClickPassImg = () => {
    onReveal?.()
  }

  return (
    <label className={className}>
      {image && <div className="label-image"><Image src={image} height={25} width={25} ></Image></div>}
      {text && <span className="styled-span">{text}</span>}
      {description
        ? <textarea className='styled-textarea' {...handleInput ? { ...handleInput.register(name) } : ''} placeholder={placeHolder} name={name} onChange={onChange} value={value} rows={3} />
        : <input className="styled-input" {...handleInput ? { ...handleInput.register(name) } : ''} placeholder={placeHolder} type={type} autoFocus={autof} autoComplete={autoComplete} value={value} name={name} onChange={onChange} required={req} inputMode={inputMode} />
      }
      {pass && <div className="label-pass" onClick={onClickPassImg}><Image src={pass} height={25} width={25} ></Image></div>}
    </label>
  )
}

export default StyledLabelText

interface Props {
  className?: string;
  name?: string;
  placeHolder?: string;
  autoComplete?: string;
  image?: string;
  pass?: string;
  value?: string;
  text?: string;
  handleInput?: any;
  type?: string;
  onChange?: (e: any) => void;
  onReveal?: () => void;
  spanSize?: string;
  inputSize?: string;
  req?: boolean;
  autof?: boolean
  description?: boolean;
  inputMode?: 'numeric' | undefined;
}