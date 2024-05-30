

function App() {
  <cardWrapper innerComponent={textComponent}/>
}

function cardWrapper({}){
// create div which has border
// and inside the div render thr\e prop

return <div style={{border : "2px solid black"}}>
  {innerComponent}
</div>
}

function textComponent

export default App
