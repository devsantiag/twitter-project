import React from "react";

// manual imports

const ButtonToProfile = () => {
  function handleClick() {
    window.location.href = '../ProfileUser.js'
  }

  return (
    <div>
    <button onClick={handleClick}>Perfil do usuário</button>
  </div>
)
}

export default ButtonToProfile;
