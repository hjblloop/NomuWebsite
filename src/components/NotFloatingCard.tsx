import React from 'react';

const cards = [
    {title: "Food Card", content: "Food Menu", y:0, imageSource:"/sushi.png", imageAlt:"sushi", link:'/menu.pdf'},
    {title: "Drinks Card", content: "Drinks Menu", y:0, imageSource:"/drinks.png", imageAlt:"drinks", link:'/drinkMenu.pdf'},
    {title: "Kushiyaki Card", content: "Kushiyaki Menu", y:0, imageSource:"kushiyaki.png", imageAlt:"kushiyaki", link:''},
    {title: "Happy Hour Card", content: "Happy Hour coming soon", y:0, imageSource:"happyHour.png", imageAlt:"happy hour", link:''},
];

const FloatingCards: React.FC = () => {
    return (
        <div className="w-full h-auto justify-center p-2 mt-10">
            <div className="flex flex-wrap justify-center gap-6">
                {cards.map((card, idx) => (
                    <a
                        key={idx}
                        className={`relative bg-white w-full max-w-xs aspect-square rounded-lg shadow-md items-center justify-center flex`}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-xl flex flex-col items-center justify-center text-nomu-red font-nomu">
                            <div>{card.content}</div>
                            <img src={card.imageSource} alt={card.imageAlt} className="w-full max-w-xs items-center aspect-auto object-contain" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FloatingCards;