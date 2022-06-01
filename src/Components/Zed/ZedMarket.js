import React, { useEffect, useState } from 'react'
import { ZedFilters } from './ZedFilters';
import { ZedList } from './ZedList';
import UpArrow from './Images/UpArrow.svg'
import DownArrow from './Images/DownArrow.svg'

export function ZedMarket() {
    let [loadingMarket, setLoadingMarket] = useState(false);
    let [loadingHorses, setLoadingHorses] = useState(true);
    let [limit, setLimit] = useState(20);
    let [horses, setHorses] = useState([]);
    let [filterObj, setFilterObj] = useState({});
    let [orderBy, setOrderby] = useState("created");
    let [reverseOrder, setReverseOrder] = useState(false);

    let bloodlineColors = {
        "Nakamoto": {
            "background": "#FECACA",
            "text": "#7F1D1D"
        },
        "Szabo": {
            "background": "#FED7AA",
            "text": "#7C2D12"
        },
        "Finney": {
            "background": "#BFDBFE",
            "text": "#1E3A8A"
        },
        "Buterin": {
            "background": "#BBF7D0",
            "text": "#14532D"
        },
    }

    useEffect(() => {
        loadHorses();
    }, [])

    function increaseLimit() {
        setLimit(limit + 20)
    }

    function loadHorses() {
        fetch("https://jjuspuh5i6.execute-api.us-east-1.amazonaws.com/dev/horses")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(horse => {
                    horse["active"] = true;
                });
                setHorses(data);
                setLoadingHorses(false);
            })
    }

    function loadMarket() {
        setLoadingMarket(true);
        fetch("https://jjuspuh5i6.execute-api.us-east-1.amazonaws.com/dev/loadMarket")
            .then(response => response.json())
            .then(data => {
                loadHorses();
                setLoadingMarket(false);
            })
    }

    function updateFilter(key, value) {
        let newFilterObj = Object.assign({}, filterObj);

        let groupOptions = document.getElementsByClassName("filter-" + key);
        for (let i = 0; i < groupOptions.length; i++) {
            groupOptions[i].style.backgroundColor = "#fff";
        }

        if (!newFilterObj.hasOwnProperty(key) || newFilterObj[key] !== value) {
            newFilterObj[key] = value;

            let selected = document.getElementById("filter-" + key + "-" + value)

            if (key === "bloodline"){
                selected.style.backgroundColor = bloodlineColors[value].background;
                selected.style.color = bloodlineColors[value].text;
            }
            else {
                selected.style.backgroundColor = "#eee";
                selected.style.color = "#000";
            }

        }
        else {
            delete newFilterObj[key];
        }

        filterHorses(newFilterObj);
    }

    function filterHorses(newFilterObj) {
        console.log(newFilterObj);

        let copyHorses = JSON.parse(JSON.stringify(horses));

        for (let i = 0; i < copyHorses.length; i++) {
            copyHorses[i]["active"] = true;

            Object.keys(newFilterObj).forEach(k => {
                if (k === "numberOfRaces") {
                    if (copyHorses[i][k] !== newFilterObj[k]) {
                        copyHorses[i]["active"] = false;
                    }
                }
                else {
                    if (copyHorses[i][k].toLowerCase() !== newFilterObj[k].toLowerCase()) {
                        copyHorses[i]["active"] = false;
                    }
                }
            });
        }
        setLimit(20);
        setFilterObj(newFilterObj);
        setHorses(copyHorses);
    }

    function updateOrder(newOrderBy) {
        console.log(newOrderBy, orderBy);
        if (newOrderBy !== orderBy) {
            document.getElementById("order-arrow-" + newOrderBy).setAttribute("src", DownArrow);
            document.getElementById("order-arrow-" + newOrderBy).style.visibility = "visible";
            document.getElementById("order-arrow-" + orderBy).style.visibility = "hidden";

            let groupOptions = document.getElementsByClassName("order");
            for (let i = 0; i < groupOptions.length; i++) {
                groupOptions[i].style.backgroundColor = "#fff";
            }

            document.getElementById("order-" + newOrderBy).style.backgroundColor = "#eee";

            setReverseOrder(false);
            setOrderby(newOrderBy);
            orderHorses(newOrderBy, false);
        }
        else {
            // Set Arrows
            document.getElementById("order-arrow-" + newOrderBy).setAttribute("src", reverseOrder ? DownArrow : UpArrow);

            orderHorses(newOrderBy, !reverseOrder);
            setReverseOrder(!reverseOrder);
        }
    }

    function orderHorses(newOrderBy, reverse) {
        let copyHorses = JSON.parse(JSON.stringify(horses));

        copyHorses.sort((a,b) => {
            if (newOrderBy === "usdPrice") {
                return (
                    !reverse 
                        ? b.usdPrice - a.usdPrice
                        : a.usdPrice - b.usdPrice
                )
            }
            else if (newOrderBy === "created") {
                return(
                    !reverse
                        ? a.created < b.created ? 1 : a.created > b.created ? -1 : 0
                        : a.created < b.created ? -1 : a.created > b.created ? 1 : 0
                )
            }
            else if (newOrderBy === "winPercentage") {
                return (
                    !reverse 
                        ? b.winPercentage - a.winPercentage
                        : a.winPercentage - b.winPercentage
                )
            }
        })

        setHorses(copyHorses);
    }

    if (loadingMarket) {
        return (
            <div className="mt-5 text-center">Refreshing Market...</div>
        )
    }
    else if (loadingHorses) {
        return (
            <div className="mt-5 text-center">Loading Horses...</div>
        )
    }
    else {
        return (
            <div className="h-100 flex-1 flex flex-col">
                <ZedFilters updateFilter={updateFilter} updateOrder={updateOrder} />
                <ZedList horses={horses} limit={limit} increaseLimit={increaseLimit} />
            </div>
        )
    }
}