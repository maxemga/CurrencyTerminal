import Select from "react-select";
import { Sources, Statuses } from "src/enums";
import { FieldProps } from "src/types";

interface Props {
  obj: FieldProps;
  source: Sources;
}

export const HomeField = ({ obj, source }: Props) => {
  const isLoading = obj[source].status === Statuses.LOADING;

  return (
    <Select
      value={obj[source].value}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.name}
      onChange={obj[source].onChange}
      isLoading={isLoading}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: "50px",
          cursor: "pointer",
        }),
      }}
      isSearchable={false}
      options={obj[source].data}
    />
  );
};
