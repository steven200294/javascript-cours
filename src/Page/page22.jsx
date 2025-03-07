import { useState } from 'react';
import Header from '../component/Header';
import js4 from '../Img/js4.png';
import js5 from '../Img/js5.png';
import js6 from '../Img/js6.png';


const Page22 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
//fonction pour passer a la prochaine page
  const nextText = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
  };
//fonction pour revenir a la page precedente
  const prevText = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };
//fonction pour choisir la reponse
  const choix1 = choix => {
    if (choix === 'B') {
      alert('Bonne réponse !');
      nextText();
    } else {
      alert('Mauvaise réponse !');
      prevText();
    }
  };
//fonction pour choisir la reponse
  const choix2 = choix2 => {
    if (choix2 === 'B') {
      alert('Bonne réponse !');
      nextText();
    } else {
      alert('Mauvaise réponse !');
      prevText();
    }
  };

  const buttonStyle = 'w-[100px] h-[60px] text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center';
  const navButtonStyle = 'w-[70px] h-[70px] max-xs:w-[50px] max-xs:h-[50px] flex justify-center items-center bg-red-500 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full';

  const texts = [
    <div className="w-full h-full flex flex-col relative top-[-10%] space-y-10 ">
      <h1 className="text-[4rem] flex items-center max-sm:text-[2rem] max-xs:text-[1.5rem] ">
        Numbers
        <box-icon name="math" type="solid" color="#ffffff" size="1.8rem" />
      </h1>
      <p>
        En JavaScript, les <span className="text-blue-400">nombres</span> peuvent être : 
        <br/>• Entiers : 42, -17, 1000
        <br/>• Décimaux : 3.14, -0.001, 2.5
        <br/>• Scientifiques : 123e5
      </p>
      <img src={js4} className="w-[60%] rounded-2xl max-sm:w-[100%]" />
    </div>,

    <div className="w-full h-full flex flex-col  relative top-[-10%] space-y-10 ">
      <h1 className="text-[4rem] flex items-center max-sm:text-[2rem] max-xs:text-[1.5rem] ">
        Strings
        <box-icon name="text" type="solid" color="#ffffff" size="1.8rem" />
      </h1>
      <p>
        Les <span className="text-blue-400">chaînes de caractères</span> sont du texte entouré de guillemets :
        <br/>• Simples : 'Bonjour'
        <br/>• Doubles : "JavaScript"
        <br/>• Backticks : `Hello `
      </p>
      <img src={js5} className="w-[40%] rounded-2xl max-sm:w-[100%]" />
    </div>,

    <div className="w-full h-full flex flex-col  relative top-[-10%] space-y-10 ">
      <h1 className="text-[4rem] flex items-center max-sm:text-[2rem] max-xs:text-[1.5rem] ">
        Booleans
        <box-icon name="check-circle" type="solid" color="#ffffff" size="1.8rem" />
      </h1>
      <p>
        Les <span className="text-blue-400">booléens</span> sont utilisés pour représenter des valeurs logiques :
        <br/>• <span className="text-blue-400">true</span> représente une condition vraie (comme "oui" ou "correct")
        <br/>• <span className="text-blue-400">false</span> représente une condition fausse (comme "non" ou "incorrect")
        <br/>Par exemple : "Est-ce que 5 est plus grand que 3 ?" donnera <span className="text-blue-400">true</span>
      </p>
      <img src={js6} className="w-[40%] rounded-2xl max-sm:w-[100%]" />
    </div>,

    <div className="w-full h-full flex flex-col space-y-[5%] max-sm:space-y-[10%] relative top-[-15%]">
      <h1 className="text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1rem]">
        Quel est le type de la valeur "42" ?
      </h1>
      <p className="max-xs:text-[0.8rem]">A. number</p>
      <p className="max-xs:text-[0.8rem]">B. string</p>
      <p className="max-xs:text-[0.8rem]">C. boolean</p>
      <div className="w-full h-20 flex justify-center space-x-20 items-center">
        <button onClick={() => choix1('A')} className={buttonStyle}>A</button>
        <button onClick={() => choix1('B')} className={buttonStyle}>B</button>
        <button onClick={() => choix1('C')} className={buttonStyle}>C</button>
      </div>
    </div>,

    <div className="w-full h-full flex flex-col space-y-[5%] max-sm:space-y-[10%] relative top-[-15%]">
      <h1 className="text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1rem]">
        Quelle valeur est un booléen ?
      </h1>
      <p className="max-xs:text-[0.8rem]">A. "vrai"</p>
      <p className="max-xs:text-[0.8rem]">B. true</p>
      <p className="max-xs:text-[0.8rem]">C. 1</p>
      <div className="w-full h-20 flex justify-center space-x-20 items-center">
        <button onClick={() => choix2('A')} className={buttonStyle}>A</button>
        <button onClick={() => choix2('B')} className={buttonStyle}>B</button>
        <button onClick={() => choix2('C')} className={buttonStyle}>C</button>
      </div>
    </div>
  ];

  return (
    <>
      <Header></Header>
      <main className="w-full h-[100vh] bg-gray-800 flex flex-col justify-center items-center space-y-5 max-sm:p-0">
        <div className="w-[60%] h-[60%] flex flex-col justify-center items-center rounded-2xl bg-black text-white max-sm:w-[95%] max-sm:h-[60%]">
          <div className="w-[90%] h-[20%] reltive top-[60%]">
            <box-icon name="quote-left" type="solid" color="#f103d2" size="3rem"></box-icon>
          </div>

          <div className="w-[80%] h-[80%] flex justify-center">{texts[currentIndex]}</div>
        </div>
        <div className="w-[60%] h-[15%] bg-black rounded-2xl flex justify-center text-white space-x-[60%] p-8 max-sm:w-[95%] max-sm:h-[15%]">
          <button onClick={prevText} className={navButtonStyle}>
            <box-icon
              name="chevron-left-circle"
              type="solid"
              color="#ffffff"
              size="3rem"
            ></box-icon>
          </button>
          <button onClick={nextText} className={navButtonStyle}>
            <box-icon
              name="chevron-right-circle"
              type="solid"
              color="#ffffff"
              size="3rem"
            ></box-icon>
          </button>
        </div>
      </main>
    </>
  );
};

export default Page22; 