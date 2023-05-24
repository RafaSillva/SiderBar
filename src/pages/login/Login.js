import '../../login.css';
import image1 from '../../images/dumbbell-exercise-animate-removebg-preview.png';

function Login(){
    return(
        <div class="main-login">
        <div class="left-login">
            <h1>Faça login e comece o seu treino</h1>
            <img src={image1} alt="Animação de uma mulher fazendo exercícios" class="left-login-image"/>
        </div>
        <div class="right-login">
            <div class="card-login">
                <h1>Login</h1>
                <form>
                    <div class="textfield">
                        <label for="email">E-mail</label>
                            <input type="email" name="email" id="iemail" placeholder="Digite o seu E-mail"/>
                    </div>
                    <div class="textfield">
                        <label for="senha">Senha</label>
                            <input type="password" name="senha" id="isenha" placeholder="Digite sua senha"/>
                    </div>
                    <button class="btn-login">Entrar</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Login;