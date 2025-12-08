"use client"

interface TitleWithDotProps {
  text: string;
  textColor?: string;
  addTitleClass?: boolean;
  isCentered?: boolean;
  size?: "sm" | "lg";
}

export const TitleWithDot = ({ text, textColor = "", addTitleClass = true, isCentered = false, size = "sm" }: TitleWithDotProps) => {
  // Construye las clases dinámicamente para el div principal
  const containerClasses = `w-full pt-8 ${addTitleClass ? 'title' : ''} ${isCentered ? 'flex justify-center' : ''} ${size === 'sm' ? 'lg:w-1/3' : ''}`;

  return (
    <div className={containerClasses.trim()}>
      <span className={`relative inline-block rounded-full border border-gray-400 py-0 pl-8 pr-6 GolosText uppercase font-bold ${textColor}`}>
        {/* Este span crea el punto decorativo con clases de Tailwind */}
        <span className="absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-prim"></span>
        {text}
      </span>
    </div>
  );
};