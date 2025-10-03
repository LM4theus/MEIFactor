import Screen from "../components/layout/screen";
// Tela de Login do WebApp

export function Signin() {
  return (
    <Screen>
      <div className="flex flex-col">
        <h1 className="text-2xl text-center font-semibold mt-11">MEI Factor</h1>
        <div className="flex items-center justify-center mt-20">
          <input
            type="text"
            className="bg-[#161717] text-center border-b-[2px] border-[#495354] w-9/12 no-spin focus:outline-none text-lg font-semibold"
            placeholder="Digite seu CNPJ"
            maxLength={14}
          />
        </div>
        <div className="flex items-center space-x-2 text-center text-xs mt-3 justify-center">
          <label className="relative">
            <input type="checkbox" className="peer sr-only" />
            <span
              className="w-4 h-4 block rounded border cursor-pointer border-red-500 bg-red-500
                 peer-checked:bg-green-500 peer-checked:border-green-500 transition-colors"
            ></span>
          </label>
          <span>
            Termos de Uso e Política de Privacidade{" "}
            <a
              href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/lgpd/termo-de-uso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              saiba mais
            </a>
            .
          </span>
        </div>
        <div className="flex items-center justify-center">
          <button className="w-24 mt-10 h-24 rounded-3xl cursor-pointer bg-[#21C25F] duration-500 hover:bg-[#137438] font-semibold">
            ENTRAR
          </button>
        </div>
        <div className="flex mt-20 items-center justify-center text-[#DC3545] font-semibold">
          <p>obs: apenas os números!</p>
        </div>
      </div>
    </Screen>
  );
}
