"use client"

interface TitleWithDotProps {
  text: string;
}

export const TitleWithDot = ({ text }: TitleWithDotProps) => {
  return (
    <div className="w-full lg:w-1/3 title pt-8">
      {/* Se añade 'relative' para posicionar el punto y 'pl-10' para darle espacio */}
      <span className="relative inline-block rounded-full border border-gray-400 py-0 pl-8 pr-6 GolosText uppercase font-bold">
        {/* Este span crea el punto decorativo con clases de Tailwind */}
        <span className="absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-prim"></span>
        {text}
      </span>
    </div>
  );
};