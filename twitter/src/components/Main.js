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
      if (inputContent.length > 150) {
        setWarning(<p>The number of characters is greater than 150. Please try again!</p>)
      } else {
        setStorageContent([
          ...storageContent, inputContent,
        ])
      }
    }, 150);
    setInputContent('')
  }

  function handleClearFormClick () {
    setStorageContent([])
  }

  function hundleClearItem(index) {
    const newStorageContent = [...storageContent]
    newStorageContent.splice(index, 1)
    setStorageContent(newStorageContent)
  }

  return (
    <div className="styleDivContainer">
      <form onSubmit={handleSubmitForm}>

        <input className="inputContentPrincipal"
          type="text"
          name="inputText"
          id="txtApplication"
          value={inputContent}
          onChange={(event) => setInputContent(event.target.value)}
          placeholder="What's happening?"
        />
        <button type="submit">Post</button>
        
      </form>

      <main className="ContentBoxMain" >
        
        {storageContent.map((postStorage, indexId) => (
          <ul key={indexId}>
            <li>
              {postStorage}
              <button type="button" onClick={()=> hundleClearItem(indexId)} >Clear</button>
              </li>
          </ul>
        ))}
        {warning}
        <button type="button" onClick={handleClearFormClick} >Clear all</button>

      </main>

    </div>
  )
}
