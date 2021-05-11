function App(){
  return(
    <React.Fragment>
      <Header />
      <h1>Hello World!</h1>
      <Footer />
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.querySelector('#app'));