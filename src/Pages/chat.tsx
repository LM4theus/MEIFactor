import Screen from "../components/layout/screen";
// Componente Chat para conversar com a assistente
export function Chat() {
  return (
    <Screen
      leftButton={
        <button className="ml-2 mt-1 rounded">
          <img src="/arrowIco.png" alt="" />
        </button>
      }
    >
      <div className="flex flex-col h-full justify-between">
        {/* Texto centralizado */}
        <div className="flex items-center justify-center font-semibold text-xl mt-12">
          Em que posso ajudar?
        </div>

        {/* Barra inferior */}
        <div className="flex items-center justify-center mb-8">
          <button className="flex w-14 h-14 mr-2 rounded-full cursor-pointer bg-[#21C25F] items-center justify-center overflow-hidden">
            <img
              src="/indexIco.png"
              alt="ícone"
              className="w-8 h-8 object-contain"
            />
          </button>
          <input
            type="text"
            className="h-12 w-2/3 rounded-3xl bg-[#495354] text-center font-semibold"
            placeholder="Converse com a assistente..."
          />
        </div>
      </div>
    </Screen>
  );
}
