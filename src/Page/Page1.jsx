import { useState } from 'react';
import Header from '../component/Header';
import js1 from '../Img/js1.png';
import js2 from '../Img/js2.png';
import js3 from '../Img/js3.png';
import so1 from '../Img/so1.jpg';

const Page1 = () => {
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
    if (choix2 === 'A') {
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
    <div className="w-full h-full  max-xs:text-[16px] flex   flex-col justify-center space-y-10 items-center  ">
      <p  className="max-xs:text-[0.8rem]">
        {' '}
        " En JavaScript, une variable est un conteneur pour stocker des données. Ces variables
        peuvent contenir différents types de valeurs, comme des nombres, des chaînes de caractères,
        des objets, des tableaux, etc. JavaScript permet de déclarer des variables de plusieurs
        manières, en fonction du contexte et de la portée de la variable."
      </p>
      <img src={so1} className="w-[50%]  max-sm:w-[100%] max-xs:w-[80%] rounded-2xl" />
      <div>
        <button className=""></button>
      </div>
    </div>,

    <div className="w-full h-full   flex   flex-col justify-center space-y-10 items-center  ">
      <h1 className="text-[2rem] max-sm:text-[1.5rem] ">1. Une Variable, c'est une Boîte 🎁</h1>
      <p className="max-xs:text-[0.8rem]">
        Une variable est comme une boîte où tu peux stocker des informations, comme un nombre ou un
        mot. Tu peux nommer ta boîte pour savoir ce qu'il y a à l'intérieur. Par exemple : Si tu
        veux mettre ton âge dans une boîte, tu peux appeler ta boîte "age". Si tu veux stocker un
        nombre de billes, tu peux appeler ta boîte "billes{' '}
      </p>
      <p className="text-[4rem] max-sm:text-[2rem]">
        <span className="text-blue-500"> let </span> billes ={' '}
        <span className="text-orange-500">5 </span>;{' '}
      </p>
      <div>
        <button className=""></button>
      </div>
    </div>,

    <div className="w-full h-full   flex   flex-col space-y-10  relative top-[-10%]  ">
      <h1 className="text-[2rem]"> Qu'est-ce que let ? </h1>
      <p className="max-xs:text-[0.8rem]">
        {' '}
        let permet de déclarer une variable dont la valeur peut être modifiée (réassignée) pendant
        l'exécution du programme. Contrairement à var, il a une portée de bloc (block scope), ce qui
        signifie qu'il est limité au bloc de code dans lequel il a été défini.
      </p>
      <div>
        <img src={js1} className="w-[60%] rounded-2xl max-sm:w-[100%]" />
      </div>
    </div>,

    <div className="w-full h-full   flex   flex-col space-y-10   relative top-[-10%] ">
      <h1 className="text-[2rem] max-sm:text-[1.5rem]"> Qu'est-ce que const ?</h1>
      <p className="max-xs:text-[0.8rem]">
        {' '}
        const est utilisé pour déclarer des variables qui ne changeront jamais (ou ne seront pas
        réassignées). Une fois qu'une variable est définie avec const, sa valeur est fixe pour toute
        la durée de son existence. Comme let, const a une portée de bloc.{' '}
      </p>

      <div>
        <img src={js2} className="w-[60%]   rounded-2xl max-sm:w-[100%]" />
      </div>
    </div>,

    <div className="w-full h-full   flex   flex-col  space-y-10  relative top-[-10%]  ">
      <h1 className="text-[2rem] max-sm:text-[1.5rem]"> Qu'est-ce que var ? </h1>
      <p className="max-xs:text-[0.8rem]">
        var est une façon plus ancienne de déclarer une variable en JavaScript. Avant l'arrivée de
        let et const (qui sont plus modernes), var était utilisé pour créer des variables. Bien
        qu'on recommande aujourd'hui d'utiliser let et const dans la plupart des situations, il est
        important de comprendre comment var fonctionne, surtout si tu travailles avec du code plus
        ancien.
      </p>

      <div>
        <img src={js3} className="w-[100%] rounded-2xl max-sm:w-[100%] max-sm:h-[150%] " />
      </div>
    </div>,

    <div className="w-full h-full   flex   flex-col  space-y-[5%]  max-sm:space-y-[10%]   relative top-[-15%]  ">
      <h1 className="text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1rem]">
        {' '}
        Que se passe-t-il si on essaie de modifier une variable déclarée avec const ?{' '}
      </h1>
      <p className="max-xs:text-[0.8rem]"> a. On peut modifier la valeur sans problème. </p>
      <p className="max-xs:text-[0.8rem]"> b. Une erreur sera levée si on essaie de modifier la valeur. </p>
      <p className="max-xs:text-[0.8rem]"> c. La variable est automatiquement convertie en let </p>
      <div className=" w-full h-20 flex  justify-center space-x-20 items-center ">
        
        <button onClick={() => choix1('A')} className={buttonStyle}>
          A
        </button>
        <button onClick={() => choix1('B')} className={buttonStyle}>
          B
        </button>
        <button onClick={() => choix1('C')} className={buttonStyle}>
          C
        </button>
      </div>
    </div>,
    <div className="w-full h-full   flex   flex-col  space-y-[5%]  max-sm:space-y-[10%]   relative top-[-15%]  ">
      <h1 className="text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1rem]"> Comment déclare-t-on une variable en JavaScript ? </h1>
      <p className="max-xs:text-[0.8rem]">A.  var nom = "John"; </p>
      <p className="max-xs:text-[0.8rem]">B. var: nom = "John";</p>
      <p className="max-xs:text-[0.8rem]">C. déclare nom = "John"; </p>
      <div className=" w-full h-20 flex  justify-center space-x-20 items-center ">
        <button onClick={() => choix2('A')} className={buttonStyle}>
          {' '}
          A{' '}
        </button>
        <button onClick={() => choix2('B')} className={buttonStyle}>
          {' '}
          B{' '}
        </button>
        <button onClick={() => choix2('C')} className={buttonStyle}>
          {' '}
          C{' '}
        </button>
      </div>
    </div>,
  ];

  return (
    <>
      <Header></Header>
      <main className="w-full h-[100vh] bg-gray-800 flex  flex-col  justify-center   items-center  space-y-5  max-sm:p-0">
        <div className="w-[60%]   h-[60%] flex  flex-col  justify-center   items-center  rounded-2xl  bg-black   text-white  max-sm:w-[95%] max-sm:h-[60%] ">
          <div className="w-[90%] h-[20%]  reltive top-[60%]">
            {' '}
            <box-icon name="quote-left" type="solid" color="#f103d2" size="3rem"></box-icon>{' '}
          </div>

          <div className="w-[80%] h-[80%]  flex  justify-center     ">{texts[currentIndex]}</div>
        </div>
        <div className="w-[60%] h-[15%]  bg-black rounded-2xl  flex   justify-center    text-white space-x-[60%] p-8  max-sm:w-[95%] max-sm:h-[15%]   ">
          <button onClick={prevText} className={navButtonStyle}>
            {' '}
            <box-icon
              name="chevron-left-circle"
              type="solid"
              color="#ffffff"
              size="3rem"
            ></box-icon>{' '}
          </button>
          <button onClick={nextText} className={navButtonStyle}>
            <box-icon
              name="chevron-right-circle"
              type="solid"
              color="#ffffff"
              size="3rem"
            ></box-icon>{' '}
          </button>
        </div>
      </main>
    </>
  );
};

export default Page1;
