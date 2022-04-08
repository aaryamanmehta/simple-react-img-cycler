import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const monaLisa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg';
const lighthouse = 'https://media.cntraveler.com/photos/5cf0471cf9ef7ce0d1a6f015/master/w_4000,h_2779,c_limit/Cape-Hatteras-Lighthouse,-Buxton,-NC_GettyImages-AB02602.jpg';
const landscape = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Neckertal_20150527-6384.jpg/1200px-Neckertal_20150527-6384.jpg';
const knight = 'https://www.thoughtco.com/thmb/m2iKzgtEQqvicQOuqJruZKDsxyQ=/1500x844/smart/filters:no_upscale()/GettyImages-96170105-5c535b68c9e77c0001a4006c.jpg';
const banksy = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12654/production/_115984357_5ffb2549-86c0-4775-887b-32cc9710fb11.jpg';
const mwstw = 'https://townsquare.media/site/838/files/2020/09/david-bowie-metrobolist-cover-art.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89';

const imgSet = [monaLisa, lighthouse, landscape, knight, banksy, mwstw];

function Slider() {
  let [currentImage, setCurrentImage] = React.useState(0);
  return (
        <div  onClick={function () {
          if (currentImage === 5) {
            return setCurrentImage(0);
          }
          return setCurrentImage(currentImage + 1);
        }} >
          <img src = {imgSet[currentImage]}></img>
        </div>
  ) 
}

ReactDOM.render(
  <Slider />,
  document.getElementById('root'),
);