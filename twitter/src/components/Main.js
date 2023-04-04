/* the principal main of contents */

import React, { useState } from "react";
import '../design/main_style.css'

export default function Main() {

  const [inputContent, setInputContent] = useState('')
  const [storageContent, setStorageContent] = useState([])
  const [warning, setWarning] = useState('')

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

  const profileInfo = {
    nameUser: 'Santiago | DEV',
    nickName: '@devsantiag',
    userImage: 'https://pbs.twimg.com/profile_images/1643025757340303361/xs_lhcGB_400x400.jpg',
    checked : ''
  }


  function hundleSendContent(event) {
    if (inputContent.length < 251 && inputContent.length > 10) {
      if (event.key === 'Enter') {
        event.preventDefault()
        setStorageContent([
          ...storageContent, inputContent,
        ])
        setInputContent('')
      }
      setWarning('')
    } else if (!inputContent.length < 251) {
      setWarning(<p className="colorWarningLimiteText">The number of characters is greater than 250. Please try again!</p>)
    }
  }
  return (
    <div className="styleDivContainer">
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
        <div className="CharacterCounter">
          <p>{remainingChars}</p>
        </div>
      </form>

      <main className="ContentBoxMain" >
        {storageContent.map((postStorage, indexId) => (
          <ul key={indexId}>
            <li className="liContentStyle">
              <img src={profileInfo.userImage} className="imageUser" alt="userImage" />
              <p className="nameUser"> {profileInfo.nameUser} {profileInfo.nickName} </p>
              <p className="textContentPosted" >
              {postStorage}

              </p>
            </li>
            <button type="button" onClick={() => hundleClearItem(indexId)} >Clear</button>
          </ul>
        ))}
        <div>
            {warning}
        </div>
      </main>
    </div>
  )
}
