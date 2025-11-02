import CardForm from "./CardForm";
import CardList from './CardList';
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { type CardFormValues } from "../types/typs";



const PaidMethod = () => {
    const [cards, setCards] = useState<CardFormValues[]>([]);

    const getCards = async () => {
      try{
        const req = await api.get('/api/card/');
        const response: CardFormValues[] = req['data'];
        setCards(response);
      }catch (err) {
        console.log(err);
      }
    }
    useEffect(() => { 
      getCards();
  }, [])


  return (
    <>
    <div className='container mx-auto '>
      <div className='flex justify-center mt-8'>
        <CardForm onCardAdded={getCards}/>
      </div>
    </div>
      <p className="text-2xl text-gray-400 text-center mt-5 font-semibold">Mis targetas</p>
      <div className="mt-5 flex flex-row flex-wrap justify-center mx-96 gap-5 pb-10">
        <CardList cards={cards}/>
      </div>
    </>
  )
};

export default PaidMethod;