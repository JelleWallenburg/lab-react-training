// import './App.css';
// import LikeButton from './components/LikeButton'; //iteration 8
// import ClickablePicture from './components/ClickablePicture'; //iteration 9
// import Dice from './components/Dice'; //iteration 10
// import Carousel from './components/Carousel'; //iteration 11
// import NumbersTable from './components/NumbersTable'; //iteration 12
// import FaceBook from './components/FaceBook'; //iteration 13 and 14
// import SignupPage from './components/SignupPage'; //iteration 15
import RGBColorPicker from "./components/RGBColorPicker";


function App(){
  return (
    <div className="App">
      {/* <LikeButton/>
      <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png'/>
      <Dice/>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <NumbersTable limit={15}/>
      <FaceBook/> 
      <SignupPage/>*/}
      <RGBColorPicker/>
    </div>
  );
}

export default App;
