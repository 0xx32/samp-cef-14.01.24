import mapImg from "assets/map.png";
import stationImg from "assets/bus.png";
import organizationImg from "assets/organization.png";
import homeImg from "assets/home.png";
import districtImg from "assets/district.png";

export const spawnList = [
    {
        name: "Место выхода",
        specName: "EXIT",
        img: mapImg,
        text: "Вы появитесь на месте последнего выхода с сервера.",
    },
    {
        name: "Дом",
        specName: "HOUSE",
        img: homeImg,
        text: "Вы появитесь на территории своего дома.",
        isExist: false,
    },
    {
        name: "Организация",
        specName: "FRACTION",
        img: organizationImg,
        text: "Вы появитесь на территории своей организации.",
        isExist: false,
    },
    {
        name: "Деловой район",
        specName: "BUSINESS",
        img: districtImg,
        text: "Вы появитесь на территории делового района.",
    },
    {
        name: "Вокзал",
        specName: "STATION",
        img: stationImg,
        text: "Вы появитесь на территории вокзала.",
    },
];