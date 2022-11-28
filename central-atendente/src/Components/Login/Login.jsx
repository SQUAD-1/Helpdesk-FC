import './Login.css';
import MaskGroup from '../../assets/imagens/MaskGroup.png'
import FerreiraCosta from '../../assets/imagens/FerreiraCosta.png'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <>
            <div className="sidebar-top">
                <div className="ferreiracosta">
                    <img src={FerreiraCosta} alt="" />
                </div>
                <div className="containerimagem">
                    <img src={MaskGroup} alt="" />
                    <span>Página Segura</span>
                </div>
            </div>

            <div className="telalogin">
                <h1>Seja bem vindo(a)!</h1>
                <div className="containterlogin">

                    <div className="cadastro">
                        <div className="login">
                            <span>Email</span>
                            <span className="asterisco">*</span>
                        </div>
                        <input type="email" required placeholder="Digite seu email" />
                    </div>

                    <div className="cadastro">
                        <div className="login">
                            <span>Senha</span>
                            <span className="asterisco">*</span>
                        </div>

                        <div className="box">
                            <input type="password" required placeholder="Digite sua senha" className="pass" />
                            <i className="bi bi-eye-slash-fill icon"></i>
                        </div>

                        <span className="forgot">Esqueci a senha</span>

                        <Link to="/TelaInicial"> <button>Entrar</button> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}