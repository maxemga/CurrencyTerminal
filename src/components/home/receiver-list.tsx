import type { Direction } from "src/types";

interface Props {
  directions?: Direction[];
}

export const HomeFieldList = ({ directions }: Props) => {
  return (
    <>
      {directions?.map((item) => (
        <option value={JSON.stringify(item)} key={item.code}>
          {item.name}
        </option>
      ))}
    </>
  );
};
