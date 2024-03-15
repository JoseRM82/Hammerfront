import { FunctionComponent } from "react";
import { useAppSelector } from "../../../../../state";
import StyledButton from "../../../../styled-button";

const CasesCard: FunctionComponent<Props> = ({ className, requests, CurrentCases, firstField, secondField, thirdField, fourthField, fifthField, sixthField, seventhField, eighthField, ninethField, extraField, firstFieldText, secondFieldText, thirdFieldText, fourthFieldText, fifthFieldText, sixthFieldText, seventhFieldText, eighthFieldText, ninethFieldText, showAllInfo, onClick, onAccept, onRefuse, onChat }) => {
  const { lawyer } = useAppSelector(state => state.globalState)

  return (
    <div className={className} onClick={onClick}>
      {showAllInfo
        ? <>
          <div className="complete-card-container">
            <div className="complete-card">
              {firstFieldText && <div className="complete-card-item"><span className="complete-span">{firstFieldText}</span>{firstField}</div>}
              {secondFieldText && <div className="complete-card-item"><span className="complete-span">{secondFieldText}</span>{secondField}</div>}
              {thirdFieldText && <div className="complete-card-item"><span className="complete-span">{thirdFieldText}</span>{thirdField}</div>}
              {fourthFieldText && <div className="complete-card-item"><span className="complete-span">{fourthFieldText}</span>{fourthField}</div>}
              {fifthFieldText && <div className="complete-card-item"><span className="complete-span">{fifthFieldText}</span>{fifthField}</div>}
              {sixthFieldText && <div className="complete-card-item"><span className="complete-span">{sixthFieldText}</span>{sixthField}</div>}
              {seventhFieldText && <div className="complete-card-item"><span className="complete-span">{seventhFieldText}</span>{seventhField}</div>}
              {eighthFieldText && <div className="complete-card-item"><span className="complete-span">{eighthFieldText}</span>{eighthField}</div>}
            </div>
            <div className="requests-btns">
              {CurrentCases && <StyledButton text="CHAT" onClick={(e) => { e.stopPropagation(); onChat?.() }} />}
              {(requests && lawyer) && <><StyledButton className="requests-btn" text="ACCEPT" onClick={(e) => { e.stopPropagation(); onAccept?.() }} />
                <StyledButton className="requests-btn" white text="DECLINE" onClick={(e) => { e.stopPropagation(); onRefuse?.() }} /></>}
            </div>
          </div>
          {ninethField && <div className="complete-card-item"><span className="complete-span">{ninethFieldText}</span>{ninethField}</div>}
        </>

        : <><div className="cases-card-item">{firstField}</div>
          <div className="cases-card-item">{secondField}</div>
          <div className="cases-card-item">{thirdField}</div>
          <div className="cases-card-item">{fourthField}</div>
          <div className="cases-card-item">{fifthField}</div>
          {extraField && <div className="cases-card-item">{extraField}</div>}</>
      }
    </div>
  )
}

export default CasesCard

interface Props {
  className?: string;
  firstField?: string | number;
  firstFieldText?: string | number;
  secondField?: string | number;
  secondFieldText?: string | number;
  thirdField?: string | number;
  thirdFieldText?: string | number;
  fourthField?: string | number;
  fourthFieldText?: string | number;
  fifthField?: string | number;
  fifthFieldText?: string | number;
  sixthField?: string | number;
  sixthFieldText?: string | number;
  seventhField?: string | number;
  seventhFieldText?: string | number;
  eighthField?: string | number;
  eighthFieldText?: string | number;
  ninethField?: string | number;
  ninethFieldText?: string | number;
  extraField?: string | number;
  showAllInfo?: boolean;
  CurrentCases?: boolean;
  requests?: boolean;
  onClick?: () => void;
  onChat?: () => void;
  onAccept?: () => void;
  onRefuse?: () => void;
}