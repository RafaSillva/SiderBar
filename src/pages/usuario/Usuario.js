import './usuario.css'
import image from '../../images/dumbbell-exercise-animate-removebg-preview.png';
import InputMask from 'react-input-mask';
function Usuario(){

    return(
        <body class="tela">
        <div class="container">
        <div class="form-image">
            <img src={image}/>
        </div>
        <div class="form">
            <form action="#">
                <div class="form-header" >
                    <div class="title">
                        <h1>Cadastre-se</h1>
                    </div>
                    <div class="login-button">
                        <button><a href="/login">Entrar</a></button>
                    </div>
                </div>

                <div class="input-group" style={{marginTop: '-2rem'}}>
                    <div class="input-box">
                        <label for="firstname">Nome</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required/>
                    </div>

                    <div class="input-box">
                        <label for="lastname">Sobrenome</label>
                        <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required/>
                    </div>

                    <div class="input-box">
                        <label for="data">Data de nascimento</label>
                        <input id="data" type="date" name="data" required/>
                    </div>

                    <div class="input-box">
                        <label for="altura">Altura</label>
                        <input id="altura" type="text" name="email" placeholder="Digite sua altura em cm" required/>
                    </div>

                    <div class="input-box">
                        <label for="peso">Peso</label>
                        <input id="peso" type="text" name="email" placeholder="Digite seu peso em kg" required/>
                    </div>

                    <div class="input-box">
                        <label for="idade">Idade</label>
                        <input id="idade" type="text" name="idade" placeholder="Digite sua idade" required/>
                    </div>

                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div class="input-box">
                        <label for="number">Celular</label>
                        <InputMask mask='(99)99999-9999' placeholder='(99)99999-9999'/>
                       
                    </div>

                    <div class="input-box">
                        <label for="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                    </div>

                    <div class="input-box" id="pagamento">
                    <h6 class='gender-title' style={{padding: '5px'}}>Selecione a Forma de pagamento</h6>
                    <select name="pagamento" id="pagamento">
                    <option value="1">Boleto Bancário</option>
                     <option value="2">pix</option>
                     <option value="3">cartão</option>  
                    </select>
                    </div>
              
                        
                <div class="input-box">
                    <h6 className='gender-title' style={{padding: '5px'}}>Selecione o plano de treino</h6>
                    <select name="pagamento" id="pagamento">
                    <option value="1">Mensal</option>
                     <option value="2">Trimestral</option>
                     <option value="3">Anual</option>  
                    </select>
                </div>
               </div>

                <div class="gender-inputs">
                    <div class="gender-title">
                        <h6>Gênero</h6>
                    </div>

                    <div class="gender-group">
                        <div class="gender-input">
                            <input id="female" type="radio" name="gender"/>
                            <label for="female">Feminino</label>
                        </div>

                        <div class="gender-input">
                            <input id="male" type="radio" name="gender"/>
                            <label for="male">Masculino</label>
                        </div>

                        <div class="gender-input">
                            <input id="others" type="radio" name="gender"/>
                            <label for="others">Outros</label>
                        </div>

                        <div class="gender-input">
                            <input id="none" type="radio" name="gender"/>
                            <label for="none">Prefiro não dizer</label>
                        </div>
                    </div>
                </div>

                <div class="continue-button">
                    <button><a href="#">Continuar</a> </button>
                </div>
            </form>
        </div>
    </div>
    </body>
    );
}

export default Usuario;