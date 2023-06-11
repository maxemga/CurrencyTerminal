import Select, { components, CSSObjectWithLabel } from "react-select";
import { Currency, Sources, Statuses } from "src/enums";
import { FieldProps } from "src/types";
import { CurrencyModel } from "src/utils";

interface Props {
  obj: FieldProps;
  source: Sources;
}

export const HomeField = ({ obj, source }: Props) => {
  const { value, onChange, data, status } = obj[source];

  const isLoading = status === Statuses.LOADING;
  const currencyCode = value?.code as Currency;
  const currencyModel = CurrencyModel[currencyCode];
  const icon = !!currencyModel && currencyModel.icon;

  const styles = {
    control: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      paddingLeft: "10px",
      height: "50px",
      cursor: "pointer",
    }),
    option: (styles: CSSObjectWithLabel) => ({
      ...styles,
      color: "black",
      cursor: "pointer",
    }),
  };

  const Control = ({ children, ...props }: any) => (
    <components.Control {...props}>
      {icon}
      {children}
    </components.Control>
  );

  return (
    <Select
      components={{ Control }}
      value={value}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.name}
      onChange={onChange}
      isLoading={isLoading}
      styles={styles}
      isSearchable={false}
      options={data}
    />
  );
};
