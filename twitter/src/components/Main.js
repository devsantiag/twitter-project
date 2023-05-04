/* the principal main of contents */

import React, { useState } from "react";
import '../design/main_style.css'
import CheckedProfile from "./CheckedProfile";

export default function Main() {
  const [inputContent, setInputContent] = useState('')
  const [storageContent, setStorageContent] = useState([])
  const [warning, setWarning] = useState('')

  function handleClearFormClick() {
    setStorageContent([])
    setWarning('')
  }

  function hundleClearItemIndividual(index) {
    const newStorageContent = [...storageContent]
    newStorageContent.splice(index, 1)
    setStorageContent(newStorageContent)
  }

  const remainingChars = 140 - inputContent.length

  const profileInfo = {
    nameUser: 'Santiago | DEV',
    nickName: '@devsantiag',
    userImage: 'https://pbs.twimg.com/profile_images/1644894643660759040/J4whV6qJ_400x400.jpg'
  }
  function hundleSendContent(event) {
    if (inputContent.length <= 140) {
      if (event.key === 'Enter') {
        event.preventDefault()
        setStorageContent([
          ...storageContent, inputContent
        ])
        setInputContent('')
      }
      setWarning('')
    } else if (inputContent.length >= 0) { //corrigir 
      inputContent.substring(0, 140)
      setWarning(<p className="colorWarningLimiteText">The number of characters is greater than 140. Please try again!</p>)
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
        {warning}
        {storageContent.map((postStorage, indexId) => (
          <ul key={indexId}>
            <li className="liContentStyle">
              <img src={profileInfo.userImage} className="imageUser" alt="userImage" />
              <p className="nameUser"> {profileInfo.nameUser} </p>
              <p className="userNickName">{profileInfo.nickName}</p>
              <p className="textContentPosted" >
                {postStorage}
                <CheckedProfile/>
                <button
                  className="individualDeleteContent"
                  type="button"
                  value={indexId}                  
                  onClick={(event) => hundleClearItemIndividual(event.target.value)}
                  >Delete</button>
              </p>
            </li>
          </ul>
        ))}
        <div>
        </div>
      </main>
    </div>
  )
}
