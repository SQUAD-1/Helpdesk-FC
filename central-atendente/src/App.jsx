//import './App.css';
import { Chamada } from "./Components/AtendenteChamada/Chamada";
import { AtendentePrincipal } from "./Tamplates/Atendente/Principal/AtendentePrincipal";
import { ClienteIndex } from "./Tamplates/Cliente/ClienteOpcoes/ClienteIndex";

function App() {
  return (
    <div className="App">

        <section>
          {/* <ClienteIndex /> */}

          {/* <Chamada /> */}

          <AtendentePrincipal />

        </section>
        
    </div>
  );
}

export default App;
