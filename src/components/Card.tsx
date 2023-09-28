type Props = {
    phase: string;
    author?: string;
}

export const Card = ({phase, author}: Props) => {
    return(
        <div className=" w-96 border-2 border-red-600 p-3 text-center">
           <h3 className="text-3xl font-bold italic">{phase}</h3>
           <p className="text-right text-sm">{author ?? 'Autor Desconhecido'}</p>
        </div>
    )
}

/** 
 * Condicional Ternária exemplo 1.
 * {author ? author: 'Autor Desconhecido'} 
 * 
 *  Condicional Ternária exemplo 2.
 * {author ?? 'Autor Desconhecido'}
 * */