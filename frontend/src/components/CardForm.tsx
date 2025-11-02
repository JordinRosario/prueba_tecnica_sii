import { useForm } from "react-hook-form";
import { type CardFormValues } from "../types/typs";
import Card from "./Card";
import AlertSuccess from "./AlertSuccess";
import { useState } from "react";
import { api } from "../api/api";

type CardFormProps = {
  onCardAdded: () => void;
};

const CardForm = ({ onCardAdded }: CardFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CardFormValues>();

  const [showMessage, setShowMessage] = useState<boolean>(false);

  const onSubmit= async (data:CardFormValues) => {
    try{
      const response = await api.post('/api/card/', data)
      const status201:boolean = response.status == 201 ? true : false
      setShowMessage(status201);
      onCardAdded()
      
      setTimeout(() => {
        setShowMessage(false);
      }, 6000);

      reset({
        number_card: "",
        cardholder_name: "",
        expiration_date: "",
        cvv: "",
      });
    }catch (err) {
      console.log(err);
    }
  };
  const CardFormValues = watch();

  const cancelForm = () => {
    reset({
      number_card: "",
      cardholder_name: "",
      expiration_date: "",
      cvv: "",
    });
  }

  return (
    <>
      { showMessage && <AlertSuccess key={Date.now()} message="La tarjeta fue agregada correctamente."/> }
      <div className="absolute me-16">
        <Card size='large' CardFormValues={CardFormValues}/>
      </div>
      <div className="mt-75 min-w-[500px]">
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-[#00083c] p-6 rounded-2xl shadow-md"
        >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-400">
                Número de Tarjeta
            </label>
            <input
              maxLength={16}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              {...register("number_card", {
                required: "El número de tarjeta es obligatorio",
                pattern: {
                  value: /^\d{16}$/,
                  message: "Debe contener 16 dígitos",
                },
              })}
              placeholder="4242 4242 4242 4242"
              className={`w-full outline-none text-white bg-[#000c5a] rounded-lg p-2 ${
                errors.number_card
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />

            {errors.number_card && (
                <p className="text-red-500 text-sm mt-1">
                {errors.number_card.message}
                </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-400">
              Nombre Titular
            </label>
            <input
              maxLength={20}
              type="text"
              {...register("cardholder_name", {
                required: "El nombre del titular es obligatorio",
                pattern:{
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}$/,
                  message:"Solo puede contener letras",
                }
              })}
              placeholder="Nombre titular"
              className={`w-full outline-none text-white bg-[#000c5a] rounded-lg p-2 ${
              errors.cardholder_name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {errors.cardholder_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cardholder_name.message}
              </p>
            )}
          </div>

          <div>
            {/* <label className="block mb-1 font-medium text-gray-400">
              Fecha Vencimiento
            </label>
            <input
              type="text"
              {...register("expiration_date", {
              required: "La fecha es obligatoria",
              pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Formato MM/AA",
              },
              })}
              placeholder="MM/AA"
              className={`w-full outline-none text-white bg-[#000c5a] rounded-lg p-2 ${
              errors.expiration_date
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
            /> */}
              <label className="block mb-1 font-medium text-gray-400">
                Fecha Vencimiento
              </label>
              <input
                type="text"
                maxLength={5}
                placeholder="MM/AA"
                {...register("expiration_date", {
                  required: "La fecha es obligatoria",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                    message: "Formato válido: MM/AA",
                  },
                  validate: (value) => {
                    const [month, year] = value.split("/").map(Number);
                    const currentYear = new Date().getFullYear() % 100; 
                    const maxYear = currentYear + 5;

                    if (isNaN(month) || isNaN(year)) return "Formato inválido";
                    if (month < 1 || month > 12) return "El mes debe ser entre 01 y 12";
                    if (year < 22 || year > maxYear)
                      return `El año debe estar entre 22 y ${maxYear}`;
                    return true;
                  },
                })}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length >= 3) {
                    value = value.slice(0, 2) + "/" + value.slice(2, 4);
                  }
                  e.target.value = value.slice(0, 5);
                }}
                className={`w-full outline-none text-white bg-[#000c5a] rounded-lg p-2 ${
                  errors.expiration_date
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-indigo-400"
                }`}
              />
            {errors.expiration_date && (
              <p className="text-red-500 text-sm mt-1">
              {errors.expiration_date.message}
              </p>
            )}
          </div>


          <div>
            <label className="block mb-1 font-medium text-gray-400">CVV</label>
            <input
              type="text"
                maxLength={3}
                {...register("cvv", {
                required: "El CVV es obligatorio",
                pattern: {
                    value: /^\d{3,4}$/,
                    message: "Debe contener 3 dígitos",
                },
                })}
                placeholder="123"
                className={`w-full outline-none text-white bg-[#000c5a] rounded-lg p-2 ${
                errors.cvv
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-indigo-400"
              }`}
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
            )}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-5 items-end justify-end">
          <button
            type="button"
            onClick={cancelForm}
            className="bg-red-500/90 text-white font-semibold px-5 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition-all"
            >
            Cancelar
          </button>
            <button
              type="submit"
              className="bg-gray-100 text-gray-800 font-semibold px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition-all"
            >
            Agregar Tarjeta
            </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default CardForm;
