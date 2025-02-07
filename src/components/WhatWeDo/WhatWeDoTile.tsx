interface WhatWeDoTileProps {
  number: string;

  title: string;

  body: string;
}

const WhatWeDoTile: React.FC<WhatWeDoTileProps> = ({ number, title, body }) => {
  return (
    <div>
      <div className="font-bold text-3xl text-slate-300 pb-12">{number}</div>
      <div className="font-extrabold text-xl pb-4">{title}</div>
      <div className="">{body}</div>
    </div>
  );
};

export default WhatWeDoTile;
