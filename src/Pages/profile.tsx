import Screen from "../components/layout/screen";
// Componente Chat para conversar com a assistente
export function Profile() {
  return (
    <Screen
      leftButton={
        <button className="ml-2 mt-1 rounded">
          <img src="/arrowIco.png" alt="" />
        </button>
      }
    >
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex w-24 h-24">
          <img src="/profileIco.png" alt="" />
        </div>
        <div className="font-bold mt-10 text-2xl">Nome completo</div>
        <div className="mt-2 text-lg">00.000.000/0000-00</div>
        <div className="mt-2">Categoria do MEI</div>
        <button className="mt-8 rounded flex font-bold text-[#DC3545] text-xl">
          Sair
          <img src="/exitIco.png" alt="" className="ml-2" />
        </button>
      </div>
    </Screen>
  );
}
