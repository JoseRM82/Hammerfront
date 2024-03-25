import { FunctionComponent, useEffect, useState } from "react";
import { Popover, Spin } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { LoadingOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../../../../state";
import StyledButton from "../../../../styled-button";
import NewNeededFile from "../new-needed-file";
import StyledLabelText from "../../../../styled-label-text";
import caseState from "../../../../../state/case";
import registerFile from "../../../../../services/case/send-file-request";
import getRequestedFiles from "../../../../../services/case/get-requested-files";
import { isAnElementInArray } from "../../../../../shared/functions/array-functions";

const CasesCard: FunctionComponent<Props> = ({ className, caseId, requests, card_id, CurrentCases, firstField, secondField, thirdField, fourthField, fifthField, sixthField, seventhField, eighthField, ninethField, extraField, firstFieldText, secondFieldText, thirdFieldText, fourthFieldText, fifthFieldText, sixthFieldText, seventhFieldText, eighthFieldText, ninethFieldText, showAllInfo, onClick, onAccept, onRefuse, onChat }) => {
  const { lawyer } = useAppSelector(state => state.globalState);
  const { file_name, file_sent, file_deleted, file_url } = useAppSelector(state => state.caseState)
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState<boolean>(false)
  const [input, setInput] = useState(false);
  const [requestsList, setRequestsList] = useState<string[]>([])
  const [filesList, setFilesList] = useState<FileUrl[]>([])

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const sendFileRequest = (name: string, case_id: string) => {
    if(!name) {
      return
    } else {
      if (isAnElementInArray(requestsList, name)) {
        return
      }
      
      setRequestsList([...requestsList, name])

      registerFile(name, case_id)
        .then(res => {
          if(!res.success) {
            setRequestsList(requestsList.splice(requestsList.indexOf(name), 1))
            
          }
        }
      )
    }
  }

  const requestFiles = () => {
    getRequestedFiles(caseId!)
      .then(res => {
        if(!res.success) {
          return
        }
        const requestedFiles = res.data!.requested_files
        const uploadedFiles = res.data!.uploaded_files

        if(!requestedFiles[0] && !uploadedFiles[0].name) {
          return
        }

        if(!uploadedFiles[0].name && requestedFiles[0]) {
          setRequestsList(requestedFiles)
          return
        }

        if(!requestedFiles[0] && uploadedFiles[0].name) {
          setFilesList(uploadedFiles)
          return
        }
        setRequestsList(requestedFiles)
        setFilesList(uploadedFiles)
      })
  }

  useEffect(() => {
    if(!file_sent) {
      return
    }

    requestsList.splice(requestsList.indexOf(file_name), 1)
    setRequestsList(requestsList)
    setFilesList([...filesList, file_url])
    dispatch(caseState.actions.setFileSent(false))
    dispatch(caseState.actions.setFileName(''))
  }, [file_sent])

  useEffect(() => {
    if(!file_deleted) return

    requestsList.splice(requestsList.indexOf(file_name), 1)
    setRequestsList(requestsList)
    dispatch(caseState.actions.setFileSent(false))
    dispatch(caseState.actions.setFileName(''))
  }, [file_deleted])
  
  const content = (
    <div className={className + ' card-popover'} onClick={e => {hide; e.stopPropagation()}}>
      {(requestsList.length > 0) &&
          requestsList.map(x => 
            (<NewNeededFile className="requests" key={uuidv4()} type="request" caseId={caseId} fileName={x} />)
        )
      }
      {(filesList.length > 0) &&
          filesList.map(x => 
            (<NewNeededFile className="files" key={uuidv4()} type="url" caseId={caseId} fileName={x.name} fileUrl={x.url} />)
          )
      }
      {(input && lawyer) && 
      <form className="card-form" onSubmit={e => e.preventDefault()}>
        <StyledLabelText value={file_name} onChange={e => dispatch(caseState.actions.setFileName(e.target.value))} name="file" text='' autof type='text' />
        <StyledButton luxury text="send" onClick={() => sendFileRequest(file_name, caseId!)} />
      </form>}
      {lawyer && <div className="card-popover-element" onClick={input ? () => setInput(false) : () => setInput(true)}>+Add a file request</div>}
    </div>
  );

  return (
    <div className={className + ' cases-card'} id={card_id} onClick={onClick}>
      {showAllInfo
        ? <>
          <div className="complete-card-container">
            <div className="complete-card">
              {firstFieldText && <div className="complete-card-item"><span className="complete-span">{firstFieldText}</span>{firstField}</div>}
              {secondFieldText && <div className="complete-card-item"><span className="complete-span">{secondFieldText}</span>{secondField}</div>}
              {thirdFieldText && <div className="complete-card-item"><span className="complete-span">{thirdFieldText}</span>{thirdField}</div>}
              {fourthFieldText && <div className="complete-card-item"><span className="complete-span">{fourthFieldText}</span>{fourthField}</div>}
              {fifthFieldText && <div className="complete-card-item"><span className="complete-span">{fifthFieldText}</span>{fifthField}</div>}
              <Popover color="#111518" arrow={false} content={content} trigger='click' open={open} onOpenChange={handleOpenChange}>
               {sixthFieldText && <div className="complete-card-item" onClick={e => {e.stopPropagation(); setInput(false); requestFiles()}}><span className="complete-span">{sixthFieldText}</span>{requestsList[0] ? requestsList.length : sixthField}</div>}
              </Popover>
              {seventhFieldText && <div className="complete-card-item"><span className="complete-span">{seventhFieldText}</span>{seventhField}</div>}
              {eighthFieldText && <div className="complete-card-item"><span className="complete-span">{eighthFieldText}</span>{eighthField}</div>}
            </div>
            <div className="requests-btns">
              {CurrentCases && <StyledButton text="CHAT" onClick={(e) => { e.stopPropagation(); onChat?.() }} />}
              {(requests && lawyer) && <>
              <Spin spinning={spinning} indicator={<LoadingOutlined style={{color: '#fff'}}/>}>
                <StyledButton luxury className="requests-btn" text="ACCEPT" onClick={(e) => { e.stopPropagation(); onAccept?.() }} />
              </Spin>
              <StyledButton luxury className="requests-btn" text="DECLINE" onClick={(e) => { e.stopPropagation(); onRefuse?.() }} />
              </>}
            </div>
          </div>
          {ninethField && <div className="complete-card-desc"><span className="complete-span">{ninethFieldText}</span>{ninethField}</div>}
        </>

        : <><div className="cases-card-item"><span className="card-span">{firstFieldText}</span> {firstField}</div>
          <div className="cases-card-item"><span className="card-span">{secondFieldText}</span> {secondField}</div>
          <div className="cases-card-item"><span className="card-span">{thirdFieldText}</span> {thirdField}</div>
          <div className="cases-card-item"><span className="card-span">{sixthFieldText}</span> {requestFiles.length}</div>
          <div className="cases-card-item"><span className="card-span">{fifthFieldText}</span> {fifthField}</div>
          {extraField && <div className="cases-card-item">{extraField}</div>}</>
      }
    </div>
  )
}

export default CasesCard

interface Props {
  className?: string;
  caseId?: string;
  card_id?: string;
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

interface FileUrl {
  name: string;
  url: string;
  key: string;
}
