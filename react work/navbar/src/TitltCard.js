import React from "react";
import Tilt from "react-parallax-tilt";

const cards = [
  {
    id: 1,
    title: "This is a card.",
    desc: "It has an easy to override visual style, and is appropriately subdued.",
    img: "https://images.unsplash.com/photo-1516608076430-a6fdd1a5a577?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
  {
    id: 2,
    title: "This is a card.",
    desc: "It has an easy to override visual style, and is appropriately subdued.",
    img: "https://images.unsplash.com/photo-1500907789384-0c3b4c3bdce4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
  {
    id: 3,
    title: "This is a card.",
    desc: "It has an easy to override visual style, and is appropriately subdued.",
    img: "https://images.unsplash.com/photo-1474219314893-3a020abe0e1f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
];

export default function CardList() {
  return (
    <div className="min-h-screen bg-[#1b85b8] flex flex-wrap justify-center items-center gap-6 p-6">
      {cards.map((card) => (
        <Tilt
          key={card.id}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={true}
          glareMaxOpacity={0.45}
          perspective={800}
          scale={1.05}
          className="bg-[#5a5255] text-white rounded-xl border border-black shadow-lg w-72 min-h-[450px] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gray-800 px-4 py-2 text-lg font-semibold">
            This is a header
          </div>

          {/* Image */}
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-48 object-cover"
          />

          {/* Body */}
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">{card.title}</h4>
            <p className="text-gray-200 text-sm">{card.desc}</p>
          </div>
        </Tilt>
      ))}
    </div>
  );
}
