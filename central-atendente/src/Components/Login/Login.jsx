import './Login.css';
import MaskGroup from '../../assets/imagens/MaskGroup.png'
import FerreiraCosta from '../../assets/imagens/FerreiraCosta.png'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <>
            <div class="sidebar-top">
                <div class="ferreiracosta">
                    <img src={FerreiraCosta} alt=""/>
                </div>
                <div class="containerimagem">
                    <img src={MaskGroup} alt=""/>
                        <span>Página Segura</span>
                </div>
            </div>

            <div class="telalogin">
                <h1>Seja bem vindo(a)!</h1>
                <div class="containterlogin">

                    <div class="cadastro">
                        <div class="login">
                            <span>Email</span>
                            <span class="astesrisco">*</span>
                        </div>
                        <input type="email" required placeholder="Digite seu email" />
                    </div>

                    <div class="cadastro">
                        <div class="login">
                            <span>Senha</span>
                            <span class="astesrisco">*</span>
                        </div>

                        <div class="box">
                            <input type="password" required placeholder="Digite sua senha" class="pass" />
                                <i class="bi bi-eye-slash-fill icon"></i>
                        </div>

                        <span class="forgot">Esqueci a senha</span>
                        
                        <Link to="/TelaInicialAtendente"> <button>Entrar</button> </Link>
                    </div>
                </div>
            </div>
            <script src="../../login-scripts"></script>
        </>
    )
}