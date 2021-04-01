import React from 'react'
import zedLogo from './Images/ZedLogo.svg'
import openSeaLogo from './Images/OpenSeaLogo.svg'

let coatColors = require('./CoatColors.json')

export function ZedListHorse(props) {
    let formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    let bloodline = props.horse.attributes.find(a => a.trait_type === "bloodline").value;

    let coatRarity = "unknown";
    try {
        coatRarity = coatColors[props.horse.attributes.find(a => a.trait_type === "coat_color").value].rarity;
    } catch (error) {
        console.log(error);
        console.log(props.horse);
    }

    function zedClick() {
        window.open(props.horse.external_link, "_blank");
    }

    function openSeaClick() {
        console.log("openSeaClick");
        window.open("https://matic.opensea.io/tokens/" + props.horse.id, "_blank");
    }

    // console.log(coatColors);
    // console.log(props.horse);

    return (
        <div className="w-full py-2 border-gray-600 lg:border-gray-200 border-b-2 lg:flex items-center lg:hover:bg-gray-100">

            <div className="w-10 ml-4 hidden lg:block">
                <div>
                    <img className="w-10 h-8 cursor-pointer" src={openSeaLogo} onClick={openSeaClick} />
                </div>
                <div>
                    <img className="w-10 h-8 cursor-pointer" src={zedLogo} onClick={zedClick} />
                </div>
            </div>

            <div className={"w-11/12 lg:w-2/6 my-1 lg:my-0 mx-auto border-b-2 lg:border-b-0 border-" + bloodline + "-200 flex items-center justify-evenly"}>
                <div className="w-1/2">
                    <img className="w-28 mx-auto" src={props.horse.image} />
                </div>

                <div className="w-1/2 text-center lg:text-left">
                    <div className="text-xl">
                        {props.horse.name}
                    </div>
                    <div className={"uppercase text-sm font-semibold text-gray-600"}>
                        {props.horse.attributes.find(a => a.trait_type === "gender").value}
                    </div>
                </div>
            </div>

            <div className={"w-11/12 lg:w-2/6 my-1 lg:my-0 mx-auto border-b-2 lg:border-b-0 border-" + bloodline + "-200 flex items-center justify-evenly"}>
                <div className="w-1/2 text-center">
                    <div className={"w-32 mx-auto text-xl bg-" + bloodline + "-200 text-" + bloodline + "-900 rounded-full"}>
                        {props.horse.attributes.find(a => a.trait_type === "bloodline").value}
                    </div>
                    <div className={"uppercase text-sm font-semibold text-" + bloodline + "-600"}>
                        {props.horse.attributes.find(a => a.trait_type === "genotype").value} {props.horse.attributes.find(a => a.trait_type === "breed_type").value}
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="w-full lg:w-28 mx-auto flex items-center justify-center lg:justify-end">
                        <div>
                            <div className="text-xl flex items-baseline justify-end">
                                <div>
                                    {parseFloat(props.horse.price).toFixed(2)}
                                </div>
                                <div className="ml-1 text-xs font-semibold uppercase text-gray-500">
                                    ETH
                                </div>
                            </div>
                            <div className="uppercase text-sm font-bold text-green-600 text-right">
                                {formatter.format(props.horse.usd_price.toFixed(2))}
                            </div>
                        </div>
                        <div className="w-5 text-right text-xl text-gray-500">
                            {props.horse.type[0]}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 lg:w-2/6 my-1 lg:my-0 mx-auto flex items-center justify-center md:justify-end">
                <div className="w-1/2 text-center lg:text-right">
                    <div className="text-xl">
                        {props.horse.attributes.find(a => a.trait_type === "coat_color").value}
                    </div>
                    <div className="uppercase text-sm font-semibold text-gray-600">
                        {coatRarity}
                    </div>
                </div>

                <div className="w-1/2 text-center lg:text-right lg:pr-4">
                    <div className="text-xl">
                        Class {props.horse.attributes.find(a => a.trait_type === "race_class").value}
                    </div>
                    <div className="uppercase text-sm font-semibold text-gray-600">
                        {props.horse.attributes.find(a => a.trait_type === "win_percentage").value}% ({props.horse.attributes.find(a => a.trait_type === "number_of_races").value})
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto flex items-center justify-center lg:hidden">
                <div>
                    <img className="h-8 mx-2 cursor-pointer" src={openSeaLogo} onClick={openSeaClick} />
                </div>
                <div>
                    <img className="h-8 mx-2 cursor-pointer" src={zedLogo} onClick={zedClick} />
                </div>
            </div>
        </div>
    )
}