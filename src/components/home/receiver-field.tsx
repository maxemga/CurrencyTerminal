import { Currency, Sources, Statuses } from "src/enums";
import type { FieldProps } from "src/types";
import { CurrencyModel } from "src/utils";
import { HomeFieldList } from "./receiver-list";
import { ArrowIcon } from "src/assets";
import cls from "./home.module.scss";
import cn from "classnames";

interface Props {
  obj: FieldProps;
  source: Sources;
}

export const HomeField = ({ obj, source }: Props) => {
  const { value, onChange, data, status } = obj[source];

  const isLoading = status === Statuses.LOADING;
  const isEmpty = !data?.length;
  const currencyCode = value?.code as Currency;
  const currencyModel = CurrencyModel[currencyCode];
  const icon = !!currencyModel && currencyModel.icon;

  return (
    <div className={cn(cls.select)}>
      <select
        onChange={onChange}
        className={cn(cls.select_field)}
        value={JSON.stringify(value)}
        placeholder="Select..."
      >
        <HomeFieldList directions={data} />
      </select>
      <div className={cn(cls.picture)}>{icon}</div>
      {isLoading && <span className={cn(cls.loading)}>Loading...</span>}
      {isEmpty && <span className={cn(cls.placeholder)}>Список пуст</span>}
      {!isEmpty && (
        <div className={cn(cls.arrow)}>
          <ArrowIcon />
        </div>
      )}
    </div>
  );
};
