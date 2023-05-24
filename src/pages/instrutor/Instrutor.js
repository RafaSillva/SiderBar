import './instrutor.css';
import InputMask from 'react-input-mask';

function Instrutor(){

    return(
        <body class="tela">
        <div class="container">
        <div class="form-image">

        </div>
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Cadastrar Intrutor</h1>
                    </div>
                    <div class="login-button">
                        <button><a href="/login">Entrar</a></button>
                    </div>
                </div>

                <div class="input-group">
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
                        <input id="dataNascimento" type="date" name="dataNascimento" required/>
                    </div>

                    <div class="input-box">
                        <label for="altura">Salario</label>
                        <input id="salario" type="text" name="salario" placeholder="Ex: R$2000" required/>
                    </div>

                    <div class="input-box">
                        <label for="data">Data de Admissão</label>
                        <input id="dataAdmissao" type="date" name="data" required/>
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
                    <h6 className='gender-title' style={{padding: '10px'}}>Selecione a Formação Academia</h6>
                    <div class="gender-input" >
                    <select name="formacao" id="formacao" style={{width: '100%'}}>
                    <option value="1">Ensino médio</option>
                     <option value="2">Ensino Técnico</option>
                     <option value="3">Ensino Superior</option>  
                    </select>
                    </div>
                    </div>
              
                        
                    <div class="input-box" style={{marginTop: '13px'}}>
                    <h6 class='gender-title' id='certificado'>Possui Certificado?</h6>
                    <div class="gender-input">
                    <label htmlFor="" style={{padding: '5px'}}>Sim</label>
                    <input type="checkbox" class="check" value={'Sim'} />

                    <label htmlFor="">Não</label>
                    <input type="checkbox" class="check" value={'Não'}/>
                    </div>
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

export default Instrutor;