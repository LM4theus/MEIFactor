import Screen from "../components/layout/screen";

export function Menu() {
  return (
    <Screen
      leftButton={
        <button className="ml-2 rounded">
          <img src="/userIco.png" alt="" />
        </button>
      }
      rightButton={
        <button className="mr-2 rounded">
          <img src="/exitIco.png" alt="" />
        </button>
      }
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <button className="flex w-48 mt-10 h-24 rounded-3xl cursor-pointer bg-[#1E1E1E] text-[#21C25F] items-center justify-start px-6 font-semibold">
            <img src="/guideIco.png" alt="" className="w-11 h-11 mr-4" />
            Guia
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button className="flex w-48 mt-10 h-24 rounded-3xl cursor-pointer bg-[#1E1E1E] text-[#21C25F] items-center justify-start px-6 font-semibold">
            <img src="/chatIco.png" alt="" className="w-10 h-10 mr-4" />
            Chat
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex w-48 mt-10 h-24 rounded-3xl cursor-pointer bg-[#1E1E1E] text-[#21C25F] items-center justify-start px-6 font-semibold">
            <img src="/linksIco.png" alt="" className="w-11 h-11 mr-4" />
            Links
          </button>
        </div>

        <div className="flex mt-20 items-center text-center justify-center whitespace-nowrap">
          <p>
            Se é a sua primeira vez no app, clique em <strong>Guia</strong>.
          </p>
        </div>
      </div>
    </Screen>
  );
}
