export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Daimajin: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

type TwoWayPlayer = Pitcher1 & Batter1;

const Ohtani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
// type TwoWayPlayer = {
// throwingSpeed: number;
// battingAverage: number;
// };
