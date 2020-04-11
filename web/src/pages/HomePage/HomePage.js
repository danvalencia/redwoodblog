const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>Find me in ./web/src/pages/HomePage/HomePage.js</p>
      <div>
      Hello, {process.env.HELLO_ENV}!
      </div>
    </div>
  )
}

export default HomePage
