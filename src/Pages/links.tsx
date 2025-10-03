import Screen from "../components/layout/screen";
// Componente Chat para conversar com a assistente
export function Links() {
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
        <div className="flex items-center justify-center font-semibold text-xl mt-2">
          Links
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www8.receita.fazenda.gov.br/simplesnacional/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-60 h-20 rounded-3xl cursor-pointer bg-white text-[#21C25F] items-center justify-center px-6 font-semibold"
          >
            <img src="/simplesnacional.png" alt="" className="h-1/2" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.gov.br/pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-60 h-20 rounded-3xl cursor-pointer bg-white text-[#21C25F] items-center justify-center px-6 font-semibold"
          >
            <img src="/govbr.png" alt="" className="h-1/2" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://servicos.receitafederal.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-60 h-20 rounded-3xl cursor-pointer justify-center bg-white text-[#21C25F] items-center px-6 font-semibold"
          >
            <img src="/receita.png" alt="" className="h-1/2" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://meu.inss.gov.br/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-60 h-20 rounded-3xl cursor-pointer justify-center bg-white text-[#21C25F] items-center px-6 font-semibold"
          >
            <img src="/inss.png" alt="" className="h-1/2" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://sebrae.com.br/sites/PortalSebrae/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-60 mb-10 h-20 rounded-3xl cursor-pointer justify-center bg-white text-[#21C25F] items-center px-6 font-semibold"
          >
            <img src="/sebrae.png" alt="" className="h-1/2" />
          </a>
        </div>
      </div>
    </Screen>
  );
}
