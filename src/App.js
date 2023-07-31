import './App.css';
import LikeButton from './components/LikeButton'; //iteration 8
import ClickablePicture from './components/ClickablePicture'; //iteration 9
import Dice from './components/Dice'; //iteration 10
import Carousel from './components/Carousel'; //iteration 11

function App(){
  return (
    <div className="App">
      <LikeButton/>
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
    </div>
  );
}

export default App;
