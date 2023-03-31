/* the principal main of contents */

import React, { useState } from "react";
import '../design/main_style.css'

export default function Main() {

  const [inputContent, setInputContent] = useState('')
  const [storageContent, setStorageContent] = useState([])
  const [warning, setWarning] = useState('')

  function handleSubmitForm(event) {
    event.preventDefault()
    setTimeout(() => {
      if (inputContent.length > 224) {
        setWarning(<p>The number of characters is greater than 150. Please try again!</p>)
      } else if (inputContent.length === 0 || inputContent.length < 5) {
        setWarning(<p>No value was entered in the field! Please try again.</p>)
        setStorageContent([
          ...storageContent, inputContent,
        ])
      }
    }, 250);
  }

  function handleClearFormClick() {
    setStorageContent([])
    setWarning('')
  }

  function hundleClearItem(index) {
    const newStorageContent = [...storageContent]
    newStorageContent.splice(index, 1)
    setStorageContent(newStorageContent)
  }

  const remainingChars = 250 - inputContent.length

  function hundleSendContent(event) {
    if (inputContent.length < 250 && inputContent.length > 5) {
      if (event.key === 'Enter') {
        event.preventDefault()
        setStorageContent([
          ...storageContent, inputContent,
        ])
        setInputContent('')
      } else if (inputContent.length > 250 && inputContent.length < 5) {
        setWarning(<p>The amount of characters is greater than 250 or less than 5. Please try again!</p>)
      }
    }
  }

  return (
    <div className="styleDivContainer">
      <form onSubmit={handleSubmitForm}>
        <textarea className="inputContentPrincipal"
          type="text"
          name="inputText"
          id="txtApplication"
          value={inputContent}
          onChange={(event) => setInputContent(event.target.value)}
          placeholder="What's happening?"
          onKeyDown={hundleSendContent}
        />
        <button type="button" onClick={handleClearFormClick}>Clear all</button>
        <p>{remainingChars}</p>
      </form>

      <main className="ContentBoxMain" >

        {storageContent.map((postStorage, indexId) => (
          <ul key={indexId}>
            <li>
              {postStorage}
              <button type="button" onClick={() => hundleClearItem(indexId)} >Clear</button>
            </li>
          </ul>
        ))}
        <div>
          {warning}
        </div>
      </main>
    </div>
  )
}
