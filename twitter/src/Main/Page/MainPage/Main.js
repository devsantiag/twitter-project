/* the principal part of application (tw) */

import React, { useState } from "react";
import '../Design/MainStyle.css'
import UserChecked from "./UserChecked";


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

  function remainingCharsstyle() {
    if (remainingChars < 100) {
      return 'CharacterCounterPosition'
    } else {
      return ""
    }
  }
  const profileInfo = {
    nameUser: 'Santiago',
    nickName: '@devsantiag',
    userImage: 'https://pbs.twimg.com/profile_images/1644894643660759040/J4whV6qJ_400x400.jpg',
    certification: <UserChecked />,
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
        <div className="CharacterCounter">
          <p className={remainingCharsstyle()}>{remainingChars}</p>
        </div>
      </form>

      {/* principal form */}
      <main className="mainFormat" >
        {warning}
        {storageContent.map((postStorage, indexId) => (
          <ul key={indexId}>
            <li className="liContentStyle">
              <img src={profileInfo.userImage} className="imageUser" alt="userImage" />
              <p className="nameUser"> {profileInfo.nameUser} </p>
              <p className="userNickName">{profileInfo.nickName}</p>
              {profileInfo.certification}
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
