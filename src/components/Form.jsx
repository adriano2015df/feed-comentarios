import Button from './Button'
import './form.css'

function Form () {

    return (
        <div className="form">
            <h1 className="title">Sessão de comentários ADR</h1>
            <label htmlFor="email">Email</label>
            <input type="text" id="email"  required/>
            <label htmlFor="coment" id="coment">Comentário</label>
            <textarea id="coment" cols="30" rows="6" required/>
            <h3>Seja o primeiro a comentar!</h3>
            <Button/>
        </div>
    )

}

export default Form