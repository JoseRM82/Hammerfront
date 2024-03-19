import { ChangeEventHandler, FunctionComponent, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../../../state";
import deleteNeededFile from "../../../../../services/case/delete-needed-file";
import sendFile from "../../../../../services/case/create-file-url";
import caseState from "../../../../../state/case";
import updateDbFiles from "../../../../../services/case/update-db-files";

const NewNeededFile: FunctionComponent<Props> = ({className, fileName, type, caseId}) => {
  const {lawyer, client} = useAppSelector(state => state.globalState)
  const [form, setForm] = useState<Record<string, any>>({})
  const [send, setSend] = useState(false)
  const dispatch = useAppDispatch()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({
      ...form,
      file_input: e.target.files![0]
    })
    setSend(true)
  }

  const onSend = () => {
    if(form) {
      sendFile({file: form.file_input})
        .then(res => {
          if(!res.success) {
            return 
          }

          const file_url = res.data.file_url
          const ext = res.data.ext

          updateDbFiles(ext, caseId!, fileName!, file_url)
            .then(res => {
              if(!res.success) {
                return
              }

              dispatch(caseState.actions.setFileSent(true))
              dispatch(caseState.actions.setFileName(fileName!))
              setSend(false)
            })
        })
    }
  }

  const onDelete = (fileName: string, caseId: string) => {
    deleteNeededFile(fileName, caseId)
      .then(res => {
        if(!res.success) return

        dispatch(caseState.actions.setFileDeleted(true))
        dispatch(caseState.actions.setFileName(fileName!))
      })
  }

  return (
    <div className={className}>
      <div className={className + " needed-file"}>{fileName}</div>
      {(lawyer && (type === 'request')) && <button className="file-delete-button" onClick={() => onDelete(fileName!, caseId!)}>x</button>}
      {(client && (type === 'request')) && 
      <label className="file-label">
        {!send && <input className="file-input" type="file" onChange={handleChange} accept=".pdf, image/*" ></input>}
        {!send && <div className='send-file'>select</div>}
        {send && <div className='send-file' onClick={(e) => {e.preventDefault(); onSend()}} >send</div>}
      </label>}
    </div>
  )
}

export default NewNeededFile

interface Props {
  className?: string;
  fileName?: string;
  type?: string;
  caseId?: string;
}
