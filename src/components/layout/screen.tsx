interface ScreenProps {
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  leftButton?: React.ReactNode; // botão esquerdo opcional
  rightButton?: React.ReactNode; // botão direito opcional
}

function Screen({
  children,
  className,
  width = 375,
  height = 667,
  leftButton,
  rightButton,
}: ScreenProps) {
  return (
    <main
      className={`bg-[#313131] text-[#F7F7F7] flex items-center justify-center w-full min-h-screen ${
        className ?? ""
      }`}
    >
      <div
        className="relative bg-[#161717] shadow-xl rounded-xl overflow-hidden flex flex-col w-full h-full max-w-md max-h-[90vh]"
        style={{
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
        }}
      >
        {/* Botões fixos no topo, esquerdo e direito*/}
        {leftButton && (
          <div className="absolute top-2 left-2">{leftButton}</div>
        )}
        {rightButton && (
          <div className="absolute top-2 right-2">{rightButton}</div>
        )}

        <div className="mt-10 flex w-screen h-1 bg-[#495354]">
          {/*Linha cinza - topo da tela*/}
        </div>

        {children}
      </div>
    </main>
  );
}

export default Screen;
