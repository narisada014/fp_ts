interface Hero {
  name: string;
  powers: string[];
}

const heroes = [
  {
    name: "Spiderman",
    powers: [
      "wall-crawling",
      "enhanced strength",
      "enhanced speed",
      "spider-Sense",
    ],
  },
  {
    name: "Superman",
    powers: ["flight", "superhuman strength", "x-ray vision", "super-speed"],
  },
];

const hulk = {
  name: "Hulk",
  powers: [
    "superhuman strength",
    "superhuman speed",
    "superhuman Stamina",
    "superhuman durability",
  ],
};

const find = <T>(arr: T[], filter: (i: T) => boolean) => {
  return arr.filter(filter);
};

find(heroes, (hero) => hero.name === "Superman");

// 使用する時に最後に配列を渡して使うことができる
const findOnlyFunc = <T>(filter: (i: T) => boolean) => {
  return (arr: T[]) => arr.filter(filter);
};

const findSuperman = findOnlyFunc<Hero>((hero) => hero.name === "Superman");
const superman = findSuperman(heroes);
