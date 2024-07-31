import './App.css';
import Allpictures from './picturebox/Allpictures.jsx';
import Profile from './picturebox/Profile.jsx';
import Header1 from './picturebox/Header1.jsx';
import Use from './picturebox/Use.jsx';
function App() {
  return (
    <div className="App">

      <Header1/>
      <Use name="Pardhu" type="Guest" />
      <Allpictures/>
      <Profile/>
    </div>
  )
}

export default App;
