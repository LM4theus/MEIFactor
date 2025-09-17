interface ScreenProps {
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

function Screen({
  children,
  className,
  width = 375,
  height = 667,
}: ScreenProps) {
  return (
    <main
      className={`${
        className ?? ""
      } bg-[#313131] text-[#F7F7F7] flex items-center justify-center w-full min-h-screen`}
    >
      <div
        className="bg-[#161717] shadow-xl rounded-xl overflow-hidden flex flex-col w-full h-full max-w-md max-h-[90vh]"
        style={{
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
        }}
      >
        <div className="mt-10 flex w-screen h-1 bg-[#495354]">
          {/*Linha cinza - topo da tela*/}
        </div>
        {children}
      </div>
    </main>
  );
}

export default Screen;
