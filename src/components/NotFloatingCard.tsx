import React from 'react';

const cards = [
    {title: "Food Card", content: "Food Menu", y:0, imageSource:"/foodfloat1.jpg", imageAlt:"food", link:'/Menu.pdf'},
    {title: "Drinks Card", content: "Drinks Menu", y:1, imageSource:"/drinksfloat2.jpg", imageAlt:"drinks", link:'/DrinkMenu.pdf'},
    {title: "Kushiyaki Card", content: "Kushiyaki Menu", y:-1, imageSource:"kushiyakifloat2.jpg", imageAlt:"kushiyaki", link:'/KushiyakiMenu.png'},
    {title: "Happy Hour Card", content: "Happy Hour \ncoming soon", y:2, imageSource:"dasai.jpg", imageAlt:"happy hour", link:'/HappyHourMenu.pdf'},
];

const FloatingCards: React.FC = () => {
    return (
        <div className="w-full h-auto justify-center p-2 mt-10">
            <div className="grid grid-cols-2 justify-center gap-6">
                {cards.map((card, idx) => (
                    <a
                        key={idx}
                        className={`relative bg-nomu-black w-full max-w-xs aspect-square rounded-lg shadow-md items-center justify-center flex`}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-xl flex flex-col items-center justify-center text-white font-kaisei font-bold">
                            <img src={card.imageSource} alt={card.imageAlt} className="opacity-50 absolute top-1/2 left-1/2 w-[auto] h-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-4 whitespace-pre-line text-red text-end">{card.content}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FloatingCards;