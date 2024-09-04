import { Delete } from "lucide-react";
import { useState } from "react";
const App = () => {
  const [currentNumber, setCurrentNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [operation, setOperation] = useState<string>("");

  const handleSoma = () => {
    if (secondNumber === "") {
      setSecondNumber(currentNumber);
      console.log(secondNumber);
      setCurrentNumber(secondNumber);
      setOperation("+");
    } else {
      const res = Number(secondNumber) + Number(currentNumber);
      console.log(res);
      setCurrentNumber(String(res));
      handleClearNumbers();
    }
  };
  const handleMenos = () => {
    if (secondNumber === "") {
      setSecondNumber(currentNumber);
      console.log(secondNumber);
      setCurrentNumber(secondNumber);
      setOperation("-");
    } else {
      const res = Number(secondNumber) - Number(currentNumber);
      console.log(res);
      setCurrentNumber(String(res));
      handleClearNumbers();
    }
  };
  const handleMulti = () => {
    if (secondNumber === "") {
      setSecondNumber(currentNumber);
      console.log(secondNumber);
      setCurrentNumber(secondNumber);
      setOperation("*");
    } else {
      const res = Number(secondNumber) * Number(currentNumber);
      console.log(res);
      setCurrentNumber(String(res));
      handleClearNumbers();
    }
  };
  const handleDiv = () => {
    if (secondNumber === "") {
      setSecondNumber(currentNumber);
      console.log(secondNumber);
      setCurrentNumber(secondNumber);
      setOperation("/");
    } else {
      const res = Number(secondNumber) / Number(currentNumber);
      console.log(res);
      setCurrentNumber(String(res));
      handleClearNumbers();
    }
  };
  const handlePorc = () => {
    if (secondNumber === "") {
      setSecondNumber(currentNumber);
      console.log(secondNumber);
      setCurrentNumber(secondNumber);
      setOperation("/");
    } else {
      const res = Number(secondNumber) & Number(currentNumber);
      console.log(res);
      setCurrentNumber(String(res));
      setSecondNumber("");
    }
  };
  const handleClearNumber = () => {
    setCurrentNumber("");
    setSecondNumber("");
  };
  const handleClearNumbers = () => {
    setOperation("");
    setSecondNumber("");
  };
  const handleAddNumber = (el: string) => {
    setCurrentNumber((prev) => `${prev}${el}`);
  };
  const handleDeleteOneNumber = () => {
    setCurrentNumber((prev) => prev.slice(0, -1));
  };

  const handleEquals = () => {
    if (secondNumber !== "" && operation !== "" && currentNumber !== "") {
      switch (operation) {
        case "+":
          handleSoma();
          break;
        case "-":
          handleMenos();
          break;
        case "*":
          handleMulti();
          break;
        case "/":
          handleDiv();
          break;
        case "%":
          handleDiv();
          break;
      }
    }
  };

  return (
    <div className=" w-screen h-screen bg-slate-900 flex justify-center items-center">
      {/* Carcaça do Celular */}
      <div className=" w-3/4 h-3/4 rounded-xl bg-zinc-800 border-8 border-zinc-900">
        {/* Aplicativo da calculadora */}
        <div className="w-full h-full flex flex-col">
          {/* Visor */}
          <div className="w-full h-1/4 flex flex-col justify-end items-end p-2 text-neutral-200 text-5xl font-semibold bg-zinc-700 rounded-lg line-clamp-1">
            <div>
              {secondNumber !== "" ? (
                <span className="mb-2 mr-1 font-normal text-[24px]">
                  {secondNumber}
                </span>
              ) : null}
              {operation !== "" ? (
                <span className="mb-2 font-normal text-[24px]">
                  {operation}
                </span>
              ) : null}
            </div>
            <p>{currentNumber}</p>
          </div>

          {/* Números */}
          <div className="h-full w-full flex justify-center items-center">
            <div className=" h-full w-full grid grid-rows-5 grid-flow-col gap-2 p-2">
              {/* tem como padronizar isso usando style-component e poderia fazer um looping p/ ir gerando de forma automatica os numeros, se fosse assim precisaria de um array contendo cada operação ['x', '-', '+', '/', '=', 'AC'] */}
              <div className="row-span-1 grid grid-cols-4 gap-2">
                <button
                  onClick={() => handleClearNumber()}
                  className="bg-neutral-400 rounded-lg col-span-2 text-2xl uppercase font-semibold"
                >
                  AC
                </button>

                <button
                  onClick={() => handlePorc()}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  %
                </button>
                <button
                  onClick={() => handleDiv()}
                  className="bg-slate-700  rounded-full text-2xl uppercase font-semibold"
                >
                  /
                </button>
              </div>
              <div className="row-span-1 grid grid-cols-4 gap-4">
                <button
                  onClick={() => handleAddNumber("7")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  7
                </button>
                <button
                  onClick={() => handleAddNumber("8")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  8
                </button>
                <button
                  onClick={() => handleAddNumber("9")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  9
                </button>
                <button
                  onClick={() => handleMulti()}
                  className="bg-slate-700 rounded-full text-2xl uppercase font-semibold"
                >
                  x
                </button>
              </div>
              <div className="row-span-1 grid grid-cols-4 gap-4">
                <button
                  onClick={() => handleAddNumber("4")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  4
                </button>
                <button
                  onClick={() => handleAddNumber("5")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  5
                </button>
                <button
                  onClick={() => handleAddNumber("6")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  6
                </button>
                <button
                  onClick={() => handleMenos()}
                  className="bg-slate-700 rounded-full text-2xl uppercase font-semibold"
                >
                  -
                </button>
              </div>
              <div className="row-span-1 grid grid-cols-4 gap-4">
                <button
                  onClick={() => handleAddNumber("1")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  1
                </button>
                <button
                  onClick={() => handleAddNumber("2")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  2
                </button>
                <button
                  onClick={() => handleAddNumber("3")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  3
                </button>
                <button
                  onClick={handleSoma}
                  className="bg-slate-700 rounded-full text-2xl uppercase font-semibold"
                >
                  +
                </button>
              </div>
              <div className="row-span-1 grid grid-cols-4 gap-4">
                <button
                  onClick={() => handleAddNumber("0")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  0
                </button>
                <button
                  onClick={() => handleAddNumber(".")}
                  className="bg-neutral-500 rounded-full text-2xl uppercase font-semibold"
                >
                  .
                </button>
                <button
                  onClick={() => handleDeleteOneNumber()}
                  className="bg-neutral-500 rounded-full text-2xl uppercase"
                >
                  <Delete className="ml-[30%] w-8 h-8" />
                </button>
                <button
                  onClick={handleEquals}
                  className="bg-slate-700 rounded-full text-2xl uppercase font-semibold text-white"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
