import {
  BankIcon,
  BitcoinIcon,
  EthereumIcon,
  RubIcon,
  UsdIcon,
} from "src/assets";
import { Currency } from "src/enums";

export const CurrencyModel = {
  [Currency.BTC]: {
    icon: <BitcoinIcon />,
  },
  [Currency.ETH]: {
    icon: <EthereumIcon />,
  },
  [Currency.CASHUSD]: {
    icon: <UsdIcon />,
  },
  [Currency.CASHRUB]: {
    icon: <RubIcon />,
  },
  [Currency.ACRUB]: {
    icon: <BankIcon />,
  },
  [Currency.SBERRUB]: {
    icon: <BankIcon />,
  },
  [Currency.TCSBRUB]: {
    icon: <BankIcon />,
  },
  [Currency.USDTTRC]: {
    icon: <BitcoinIcon />,
  },
};
