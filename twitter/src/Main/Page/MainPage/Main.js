/* the principal part of application (tw) */

import React, { useState } from "react";
import ProfileUser from "./Components/ProfileUser";
import '../MainPage/PageDesign/MainStyle.css'
import UserChecked from "./Components/UserChecked";

export default function Main() {
  const [inputContent, setInputContent] = useState('')
  const [storageContent, setStorageContent] = useState([])

  const [warning, setWarning] = useState('')

  function handleClearFormClick() {
    setStorageContent([])
    setWarning('')
  }

  function hundlePost(event) {
    if (inputContent.length > 10) {
      event.preventDefault()
      setStorageContent([...storageContent, inputContent])
      setInputContent('')
    } else {
      setWarning(<p className="colorWarningLimiteText">The number of characters is greater than 140. Please try again!</p>)
    }
  }

  function hundleClearItemIndividual(index) {
    const newStorageContent = [...storageContent]
    newStorageContent.splice(index, 1)
    setStorageContent(newStorageContent)
  }

  const remainingChars = 140 - inputContent.length

  function remainingCharsstyle() {
    if (remainingChars < 100) {
      return 'CharacterCounterPosition'
    } else {
      return ""
    }
  }

  function hundleSendContent(event) {
    if (inputContent.length <= 140 && inputContent.length > 10) {
      if (event.key === 'Enter') {
        event.preventDefault()
        setStorageContent([
          ...storageContent, inputContent
        ])
        setInputContent('')
      }
      setWarning('')
    } else {
      setWarning(<p className="colorWarningLimiteText">The number of characters is greater than 140. Please try again!</p>)
    }
  }

  return (
    <div className="styleDivContainer" >
      <form onSubmit={hundleSendContent}>
        <textarea className="inputContentPrincipal"
          type="text"
          name="inputText"
          id="txtApplication"
          value={inputContent}
          onChange={(event) => setInputContent(event.target.value)}
          placeholder="What's happening?"
          onKeyDown={hundleSendContent}
        />
        <button className="buttonClearAll" type="button" onClick={handleClearFormClick}>Clear all</button>
        <button className="postContentButton" type="button" onClick={hundlePost} >Post</button>
        <div className="CharacterCounter">
          <p className={remainingCharsstyle()}>{remainingChars}</p>
        </div>
      </form>
      <main className="mainFormat" >
        {warning}
        {storageContent.map((postStorage, indexId) => (
          <ul key={indexId}>
            <li className="liContentStyle">
              <ProfileUser />
              <p className="textContentPosted" >
                {postStorage}
              </p>
              <button
                className="individualDeleteContent"
                type="button"
                value={indexId}
                onClick={(event) => hundleClearItemIndividual(event.target.value)}
              >Delete</button>
            </li>
          </ul>
        ))}
      </main>
    </div>
  )
}