import { Cliente } from "./Templates/Atendente/Cliente/Cliente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TelaInicialAtendente } from "./Templates/Atendente/TelaInicialAtendente/TelaInicialAtendente";
import { Login } from "./Components/Login/Login";
import { ChamadosAtendente } from "./Templates/Atendente/ChamadosAtendente/ChamadosAtendente";
import { ConsultaAtendente } from "./Templates/Atendente/ConsultaAtendente/ConsultaAtendente";
import { AbrirAtendimento } from "./Templates/Atendente/AbrirAtendimento/AbrirAtendimento";
import { TelaChamado } from "./Templates/Atendente/TelaChamado/TelaChamado";
import { TelaAtendimento } from "./Templates/Atendente/TelaAtendimento/TelaAtendimento"
import { AbrirChamado } from "./Templates/Atendente/AbrirChamado/AbrirChamado";
import { ChamadosSupervisor } from "./Templates/Supervisor/ChamadosSupervisor/ChamadosSupervisor";
import { Setores } from "./Templates/Supervisor/Setores/Setores";
import { ListaAtendentes } from "./Templates/Supervisor/ListaAtendentes/ListaAtendentes"
import { SupervisorPrincipal } from "./Templates/Supervisor/TelaPrincipal/SupervisorPrincipal";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/TelaInicial" element={<TelaInicialAtendente />} />
          <Route path="/Cliente" element={<Cliente />} />
          <Route path="/Consulta" element={<ConsultaAtendente />} />
          <Route path="/Chamados" element={<ChamadosAtendente />} />
          <Route path="/AbrirAtendimento" element={<AbrirAtendimento />} />
          <Route path="/AbrirChamado" element={<AbrirChamado /> } />
          <Route path="/ChamadosAtendente" element={<ChamadosAtendente />} />
          <Route path="/Atendimento" element={<TelaAtendimento /> } />
          <Route path="/Chamado" element={<TelaChamado /> } />
          <Route path="/ChamadosSupervisor" element={<ChamadosSupervisor />} />
          <Route path="/Atendentes" element={<ListaAtendentes /> } />
          <Route path="/Setores" element={<Setores />} />
          <Route path="/SupervisorInicial" element={<SupervisorPrincipal /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}