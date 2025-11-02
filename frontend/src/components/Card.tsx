

import { type CardFormValues } from '../types/typs';

type CardProps = {
  size?: "large" | "small";
  CardFormValues: CardFormValues;
};

const Card: React.FC<CardProps> = ({ size = "small", CardFormValues }) => {
  const number_card = CardFormValues.number_card;

  const formatnumber_card = (num: string) => {
    return num.replace(/\s+/g, "").replace(/([\d*]{4})(?=[\d*])/g, "$1 ");
  };
  const formattedNumber = CardFormValues.number_card && CardFormValues.number_card.trim() !== "" ? formatnumber_card(number_card) : "4242 4242 4242 4242";

  return (
      <div className="credit-card relative select-none pointer-e">

        {
          size === 'large'
          ?
              <div className={`verso -z-10 absolute overflow-hidden transform translate-y-12 left-16 w-[22rem] h-56 rounded-2xl bg-[#00062b] shadow-2xl`}>
                  <div className="w-full h-12 bg-gray-800 absolute top-10">&nbsp;</div>
              </div>
          :''
        }

        <div className={`recto w-[360px] overflow-hidden h-56 rounded-2xl px-8 py-6 bg-[#000939] text-white shadow-xl flex flex-col justify-end gap-6`}>
          
          <div className="logo absolute top-7 left-64 flex justify-end items-end">
            <svg
              className="h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 324.68"
              role="img"
              aria-label="Mastercard logo"
            >
              <rect width="100%" height="100%" fill="none" />
              <g transform="translate(120,162.34)">
                <circle cx="0" cy="0" r="96" fill="#EB001B" />
                <circle cx="132" cy="0" r="96" fill="#FF5F00" opacity="1" />
              </g>
            </svg>
          </div>

          {/* Chip */}
          <div className="pin w-11 h-7 rounded bg-yellow-100">&nbsp;</div>

          {/* Número */}
          <div className="number whitespace-nowrap text-2xl font-semibold tracking-widest 
            text-transparent bg-clip-text 
            bg-linear-to-r from-gray-300 via-gray-100 to-gray-400 
            drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] 
            [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
            {formattedNumber}
          </div>

          {/* Credenciales */}
          <div className="credentials flex gap-8">
            <div className="owner flex flex-col w-max">
              <span className="number whitespace-nowrap text-base font-semibold tracking-widest 
                text-transparent bg-clip-text mt-3
                bg-linear-to-r from-gray-300 via-gray-100 to-gray-400 
                drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] 
                [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
                >
                {CardFormValues.cardholder_name === '' ? 'Jordin Rosario' : CardFormValues.cardholder_name }
            </span>
            </div>
            <div className="expires flex-col w-max absolute top-36 left-56 flex justify-end items-end">
              <span className="number whitespace-nowrap text-xs font-semibold tracking-widest 
                text-transparent bg-clip-text 
                bg-linear-to-r from-gray-300 via-gray-100 to-gray-400 
                drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] 
                [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
            >
                Expires
            </span>
              <span className="number whitespace-nowrap text-xs font-semibold tracking-widest 
                text-transparent bg-clip-text 
                bg-linear-to-r from-gray-300 via-gray-100 to-gray-400 
                drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] 
                [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                
                {CardFormValues.expiration_date == '' ? '11/25' : CardFormValues.expiration_date}
            </span>
            </div>
            <div className="cvc flex-col w-max absolute top-36 left-72 flex justify-end items-end">
              <span className="number whitespace-nowrap text-xs font-semibold tracking-widest 
                text-transparent bg-clip-text 
                bg-linear-to-r from-gray-300 via-gray-100 to-gray-400 
                drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] 
                [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
            >
                cvv
            </span>
              <span className="number whitespace-nowrap text-xs font-semibold tracking-widest 
                text-transparent bg-clip-text 
                bg-linear-to-r from-gray-300 via-gray-100 to-gray-400 
                drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] 
                [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                
                {CardFormValues.cvv == ''? '512' : CardFormValues.cvv}
            </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card
