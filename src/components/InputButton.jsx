export function InputButton({valor, SetNota}) {
    function handleTrocarNota(nota) {
        SetNota(nota)
   
        console.log (nota)
   }
    return(
        <input type="button" value={valor} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white sm:w-13 sm-h-13 cursos pointer" onClick={()=>handleTrocarNota (valor)}/>
    )
}