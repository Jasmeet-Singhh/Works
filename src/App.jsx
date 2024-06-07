import Page1 from './Pages/Page1/Page1'
import Page2 from './Pages/Page2/Page2'
import Page3 from './Pages/Page3/Page3'
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'


function App() {


  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  })
  return (
    <div className="main" >
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  )
}

export default App
