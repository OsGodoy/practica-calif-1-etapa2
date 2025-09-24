export default function Cards({ miembros }) {
  return (
    <ul className="w-80 sm:w-120 place-items-center grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-x-8 p-6 [&>*:nth-child(2n+2)]:top-10 sm:[&>*:nth-child(2n+2)]:top-0 sm:[&>*:nth-child(3n+2)]:top-10">
      {miembros.map((miembro) => (
        <li
          key={miembro.id}
          className="h-45 md:h-50 w-30 md:w-35 relative flex items-center justify-between"
        >
          <div className="h-full w-[90%] flex flex-col items-center justify-center self-start">
            <img
              className="h-[90%] w-full object-cover rounded-tl-xl"
              src={miembro.imageUrl}
              alt=""
            />
            <h2 className="h-[10%] w-full text-xs font-bold flex items-center justify-start">
              {miembro.name}
            </h2>
          </div>
          <div className="h-full w-[10%] flex items-center justify-center">
            <p className="h-full w-full text-[10px] md:text-[8px] font-serif font-semibold flex items-center justify-start [writing-mode:vertical-rl]">
              {miembro.rol}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
