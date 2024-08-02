import Image from "next/image";

export interface IMenuComponentProps {
  urlIcon: string;
  titleMenu: string;
}

export default function MenuComponent(props: IMenuComponentProps) {
  return (
    <>
      <a href="#" className="flex gap-7 items-center">
        <Image
          src={props.urlIcon}
          alt={props.titleMenu}
          width={35}
          height={35}
        />
        <p className="text-white text-xl leading-7">
          {props.titleMenu}
        </p>
      </a>
    </>
  );
}
