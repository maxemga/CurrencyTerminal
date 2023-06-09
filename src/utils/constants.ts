import { Switchers } from "src/enums";

export type SwitchersType = {
  [key in Switchers]: {
    title: string;
    values: string[];
  };
};

export const filterSwitchers: SwitchersType = {
  [Switchers.ALL]: {
    title: "Все",
    values: [],
  },
  [Switchers.CRYPTO]: {
    title: "Криптовалюта",
    values: ["BTC", "ETH", "USDTTRC"],
  },
  [Switchers.BANKS]: {
    title: "Банки",
    values: ["ACRUB", "SBERRUB", "TCSBRUB"],
  },
  [Switchers.CASH]: {
    title: "Наличные",
    values: ["CASHUSD", "CASHRUB"],
  },
};
