/* unique machine to run contents of page */

// Principal repository https://github.com/devsantiag/twitter-project

import Logo from './Main/Page/MainPage/Components/Logo'
import Main from './Main/Page/MainPage/Main'
import DirectProfile from './Main/Page/MainPage/DirectProfile'

function App() {
  return (
    <div>
      <Logo />
      <Main />
      <footer>
        <DirectProfile />
      </footer>
    </div>
  )
}

export default App