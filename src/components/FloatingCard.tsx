import React from 'react';

const cards = [
    {title: "Food Card", content: "Food Menu", y:0, imageSource:"/foodfloat1.jpg", imageAlt:"food", link:'/menu.pdf'},
    {title: "Drinks Card", content: "Drinks Menu", y:1, imageSource:"/drinksfloat2.jpg", imageAlt:"drinks", link:'/drinkMenu.pdf'},
    {title: "Kushiyaki Card", content: "Kushiyaki Menu", y:-1, imageSource:"kushiyakifloat2.jpg", imageAlt:"kushiyaki", link:''},
    {title: "Happy Hour Card", content: "Happy Hour \ncoming soon", y:2, imageSource:"dasai.jpg", imageAlt:"happy hour", link:''},
];

const FloatingCards: React.FC = () => {
    return (
        <div className="min-h-screen w-full h-auto flex justify-center p-2 sm:p-6 overflow-y-auto mt-10">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))] gap-6 sm:gap-10 w-full max-w-7xl mx-auto">
                {cards.map((card, idx) => (
                    <a
                        key={idx}
                        style={{ 
                            marginTop: `${card.y}rem`,
                            animationDelay: `${idx * 0.3}s`,
                            animationDuration: '6s'}}
                        className={`relative float-animation bg-nomu-black w-full max-w-xs aspect-[16/40] rounded-lg shadow-md items-center justify-center flex transition-all duration-300 ease-in-out hover:shadow-red-300 hover:brightness-110 hover:shadow-xl hover:scale-101`}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-xl flex flex-col items-center justify-center text-white font-kaisei font-bold">
                            <img src={card.imageSource} alt={card.imageAlt} className="opacity-50 hover:opacity-100 transition duration-700 -z-10 absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 rotate-0" />
                            <div className="absolute bottom-4 whitespace-pre-line text-red text-end">{card.content}</div>
                        </div>
                    </a>
                ))}
                {/* <a
                    key="test"
                    style={{ 
                        marginTop: `${0}rem`,
                        animationDelay: `${1 * 0.3}s`,
                        animationDuration: '3s'}}
                    className={`relative float-animation bg-nomu-black w-full max-w-xs aspect-[16/40] rounded-lg shadow-md items-center justify-center flex transition-all duration-300 ease-in-out hover:shadow-red-300 hover:brightness-110 hover:shadow-xl hover:scale-101`}
                    href={""}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="text-xl flex flex-col items-center justify-center text-nomu-red font-nomu">
                        <img src="/sushi.webp" alt="sushi" className="-z-10 absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 rotate-180" />
                        <div className="absolute bottom-4 whitespace-pre-line text-red text-end">Happy Hour Coming Soon</div>
                    </div>
                </a> */}
            </div>
        </div>
    );
};

export default FloatingCards;