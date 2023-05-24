import './treino.css';
import image1 from '../../images/undraw_Personal_trainer_re_cnua-removebg-preview.png';

function Treino(){

    return(
        <body class="tela">
        <div class="container">
        <div class="form-image">
            <img src={image1}/>
        </div>
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Cadastrar Treino</h1>
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-box">
                        <label for="NomeTreino">Nome do Treino</label>
                        <input id="Nome" type="text" name="Nome" placeholder="Digite o nome do Treino" required/>
                    </div>

                    <div class="input-box">
                        <label for="frequencia">Frequência</label>
                        <input id="frequencia" type="text" name="frequencia" placeholder="Digite a frenquência do treino" required/>
                    </div>

                    <div class="input-box">
                        <label for="data">Data de Inicio</label>
                        <input id="dataInicio" type="date" name="dataInicio" required/>
                    </div>

                    <div class="input-box">
                        <label for="carga">Carga</label>
                        <input id="carga" type="text" name="carga" placeholder="Ex: 20kg" required/>
                    </div>

                    <div class="input-box">
                        <label for="repeticoes">Repetições</label>
                        <input id="repeticoes" type="text" name="repeticoes" placeholder='Ex: 4x15' required/>
                    </div>
        
                </div>

                <div class="continue-button">
                    <button><a href="#">cadastrar</a> </button>
                </div>
            </form>
        </div>
    </div>
    </body>
    );
}

export default Treino;