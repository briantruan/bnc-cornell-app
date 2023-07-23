import Image from "next/image";

export default function Logo(props) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center">
      <Image
        src="/logo.jpg"
        alt="Cornell Basics Need logo"
        width={50}
        height={50}
        className="max-w-sm rounded-full object-cover shadow-2xl"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
