import { useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {

  const [isShow, setIsShow] = useState(false)


  setTimeout(() => {
    setIsShow(true)
  }, 5000)

  return (
    <div className="App">
      mamad babyyyyy
      {isShow && <Helmet>
        {console.log('mn')}
        <title>App Title</title>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://diamond-press.com/images/siteLogo/diamond-press.svg" />
        <meta property="og:description"
          content="Sean Connery found fame and fortune as the
         suave, sophisticated British agent, James Bond." />
         fff
      </Helmet>}
    </div>
  );
}
export default App