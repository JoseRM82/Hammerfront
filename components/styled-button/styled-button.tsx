import { FunctionComponent } from "react";

const StyledButton: FunctionComponent<Props> = ({ className, text, type, form, active, onClick }) => {
  return (
    <button onClick={onClick} disabled={active} type={type} form={form} className={className}>{text}</button>
  )
}

export default StyledButton

interface Props {
  className?: string;
  text: string;
  small?: boolean;
  active?: boolean;
  white?: boolean;
  luxury?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  onClick?: (e: any) => void
}