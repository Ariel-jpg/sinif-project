import Dodecahedron from "../Animations/Dodecahedron";
import { LoadMessages, SinifClassMessageComponent } from "./HomeComponents";

const QuestionRenderComponent = ({ messages,
    totalLength,
    questionId,
    handleChangeQuestion,
    handleLoadMessages,
    classCode,
    renderAnimation
}) => classCode && messages ?
        messages[0] ? messages.map((message, i) => {
            if (i === messages.length - 1 && messages.length < totalLength) return <>
                <SinifClassMessageComponent
                    style={message._id === questionId ? {
                        backgroundColor: "var(--tertiary-color)",
                        boxShadow: "0 0 15px 1px var(--secondary-color)"
                    } : {}}
                    onClick={() => handleChangeQuestion(message._id)} message={message} />
                <LoadMessages
                    onClick={handleLoadMessages}
                    label="Cargar más preguntas"
                />
            </>

            return <SinifClassMessageComponent
                style={message._id === questionId ? {
                    backgroundColor: "var(--tertiary-color)",
                    boxShadow: "0 0 15px 1px var(--secondary-color)"
                } : {}}
                message={message} onClick={() => handleChangeQuestion(message._id)} />
        })
            : <aside>

                {renderAnimation ? <>
                    <span>
                        Vaya, parece que nadie preguntó aún. <br />
                        Te dejamos esta animación hasta que alguien tenga alguna duda.
                    </span>
                    <Dodecahedron />
                </> : <aside>
                        <span>
                            Vaya, parece que nadie preguntó aún. <br />
                            No lo olvides: <br />
                            ¡Está en vos darle sentido a la app!
                        </span>
                    </aside>
                }
            </aside>
        : <aside> <span> Únete a una clase para continuar </span> </aside>

export default QuestionRenderComponent;