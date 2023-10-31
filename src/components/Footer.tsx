interface IProps {
  message: string;
  year?: number;
}

export const Footer = ({ message = "", year = 0 }: IProps) => {
  return (
    <footer>
      {message} - {year}
    </footer>
  );
};