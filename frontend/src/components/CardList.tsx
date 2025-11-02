import { type CardFormValues } from "../types/typs";
import Card from "./Card";

type CardListProps = {
  cards: CardFormValues[];
};

const CardList = ({ cards }: CardListProps) => {

  return (
    <>
      
      {
        cards.length > 0 
        ? 
          (
            cards.map((card)=> (
              <Card key={card.id} CardFormValues={card} size="small"/>
            ))
          )
        :
        (
          <div className="border-3 border-dotted border-gray-400/50 px-8 py-5 rounded-lg">
            <p className="text-amber-50/50 font-semibold text-xl">Sin targetas agregadas</p>
          </div>
        )
      }    
    </>
  )
}

export default CardList
