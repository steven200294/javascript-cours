import { Link } from 'react-router-dom';
import Button from './component/Button';
import Header from './component/Header';
import page2 from './Page/page22';
import 'boxicons';


function App() {

  const production = (e) => {
    e.preventDefault(); // Empêche la navigation
    alert("le cours est en cours de construction");
  }

  return (
    <>
      <Header />

      <main className="w-full min-h-screen p-40 bg-gray-800 flex flex-col justify-center items-center space-y-10 relative max-sm:pt-20 max-sm:pb-10 max-sm:px-4">
        {/* Section principale */}
        <section className="w-[60%] h-[40%] flex rounded-2xl bg-black max-sm:flex-col max-sm:w-[90%]">
          {/* Contenu de gauche */}
          <div className="w-[100%] h-full flex flex-col justify-center text-white space-y-10 p-8">
            <h1 className="text-[2rem] flex items-center gap-2">
              Variables
              <box-icon
                name="nodejs"
                type="logo"
                animation="tada"
                flip="horizontal"
                color="#ffffff"
                size="1.8rem"
              />
            </h1>

            <p>
              En JavaScript, les variables sont déclarées avec{' '}
              <span className="text-blue-400">`var`</span>,{' '}
              <span className="text-blue-400">`let`</span> ou{' '}
              <span className="text-blue-400">`const`</span> pour stocker des valeurs. `let` et
              `const` sont préférés pour éviter les erreurs de portée.
            </p>

            <Link to="/page1">
              <Button>Commencer</Button>
            </Link>
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-[60%] h-[40%] flex rounded-2xl bg-black max-sm:flex-col max-sm:w-[90%]">
          <div className="w-full h-full flex flex-col justify-center text-white space-y-10 p-8">
            <h1 className="text-[2rem] flex items-center gap-2">
            Types de données
            <box-icon
                name="nodejs"
                type="logo"
                animation="tada"
                flip="horizontal"
                color="#ffffff"
                size="1.8rem"
              />
              <box-icon name="function" type="solid" color="#ffffff" size="1.8rem" />
            </h1>
            <p>
            En JavaScript, les types de données se divisent en primitifs 
            (string, number, boolean ect)  avec un typage dynamique 
            permettant aux variables de changer de type à l'exécution.
          </p>
            <Link to="/page2">
              <Button>Découvrir</Button>
            </Link>
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-[60%] h-[40%] flex rounded-2xl bg-black max-sm:flex-col max-sm:w-[90%]">
          <div className="w-full h-full flex flex-col justify-center text-white space-y-10 p-8">
            <h1 className="text-[2rem] flex items-center gap-2">
            les Conditions
              <box-icon
                name="nodejs"
                type="logo"
                animation="tada"
                flip="horizontal"
                color="#ffffff"
                size="1.8rem"
              />
              <box-icon name="cube" type="solid" color="#ffffff" size="1.8rem" />
            </h1>
            <p>
            Les conditions, telles que if, else, et switch, permettent d'exécuter différentes parties du code en fonction de certaines conditions.
            </p>
          
            <a href="#" onClick={production}>
              <Button>Explorer</Button>
            </a>
          </div>
        </section>
 {/* Section 3 */}
 <section className="w-[60%] h-[40%] flex rounded-2xl bg-black max-sm:flex-col max-sm:w-[90%]">
          <div className="w-full h-full flex flex-col justify-center text-white space-y-10 p-8">
            <h1 className="text-[2rem] flex items-center gap-2">
             Les Boucles 
              <box-icon
                name="nodejs"
                type="logo"
                animation="tada"
                flip="horizontal"
                color="#ffffff"
                size="1.8rem"
              />
              <box-icon name="cube" type="solid" color="#ffffff" size="1.8rem" />
            </h1>
            <p>
            Les boucles permettent de répéter une série d'instructions plusieurs fois. Les types courants incluent for, while et forEach.
            </p>
           
            <a href="#" onClick={production}>
              <Button>Explorer</Button>
            </a>
            
          </div>
        </section>

 {/* Section 3 */}
 <section className="w-[60%] h-[40%] flex rounded-2xl bg-black max-sm:flex-col max-sm:w-[90%]">
          <div className="w-full h-full flex flex-col justify-center text-white space-y-10 p-8">
            <h1 className="text-[2rem] flex items-center gap-2">
            Les  Fonctions
              <box-icon name="cube" type="solid" color="#ffffff" size="1.8rem" />
            </h1>
            <p>
            Les fonctions sont des blocs de code réutilisables qui effectuent des tâches spécifiques. Elles peuvent accepter des paramètres et renvoyer des valeurs.
            </p>
            <a href="#" onClick={production}>
              <Button>Explorer</Button>
            </a>
          </div>
        </section>



      </main>
    </>
  );
}

export default App;
