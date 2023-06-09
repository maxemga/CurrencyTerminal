import Select, { components, CSSObjectWithLabel } from "react-select";
import { Currency, Sources, Statuses } from "src/enums";
import { FieldProps } from "src/types";
import { CurrencyModel } from "src/utils";

interface Props {
  obj: FieldProps;
  source: Sources;
}

export const HomeField = ({ obj, source }: Props) => {
  const isLoading = obj[source].status === Statuses.LOADING;
  const icon =
    !!CurrencyModel[obj[source].value?.code as Currency] &&
    CurrencyModel[obj[source].value?.code as Currency].icon;

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
      value={obj[source].value}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.name}
      onChange={obj[source].onChange}
      isLoading={isLoading}
      styles={styles}
      isSearchable={false}
      options={obj[source].data}
    />
  );
};
