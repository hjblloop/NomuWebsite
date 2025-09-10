import React from 'react';

const cards = [
    {title: "Food Card", content: "Food Menu", y:0, imageSource:"/sushi.png", imageAlt:"sushi", link:'/menu.pdf'},
    {title: "Drinks Card", content: "Drinks Menu", y:1, imageSource:"/drinks.png", imageAlt:"drinks", link:'/drinkMenu.pdf'},
    {title: "Kushiyaki Card", content: "Kushiyaki Menu", y:-1, imageSource:"kushiyaki.png", imageAlt:"kushiyaki", link:''},
    {title: "Happy Hour Card", content: "Happy Hour coming soon", y:2, imageSource:"happyHour.png", imageAlt:"happy hour", link:''},
];

const FloatingCards: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center bg-gray-100 p-6">
            <div className="flex space-x-6">
                {cards.map((card, idx) => (
                    <a
                        key={idx}
                        style={{ 
                            marginTop: `${card.y}rem`,
                            animationDelay: `${idx * 0.3}s`,
                            animationDuration: '3s'}}
                        className={`relative float-animation bg-white h-92 w-64 rounded-lg shadow-md items-center flex`}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-xl flex flex-col items-center justify-center text-nomu-red font-nomu">
                            <div>{card.content}</div>
                            <img src={card.imageSource} alt={card.imageAlt} className="w-40 h-40 object-contain" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FloatingCards;