type Props = {
  name: string;
};

export function Hello(props: Props) {
  return <h1>Hello {props.name}</h1>;
}
