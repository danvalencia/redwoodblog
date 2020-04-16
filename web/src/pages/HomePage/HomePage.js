const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>Find me in ./web/src/pages/HomePage/HomePage.js</p>
      <div>
        <div>Hello, {process.env.HELLO_ENV}!</div>
        <div>Hello Again, {process.env.REDWOOD_ENV_TEST_VAR}</div>
      </div>
    </div>
  )
}

export default HomePage
