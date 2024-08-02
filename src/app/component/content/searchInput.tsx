import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  return (
    <>
      <div className="flex justify-between w-[677px]">
        <span></span>
        <div
          className="w-[249px] h-[50px] border border-white border-solid rounded-full 
      flex items-center px-3"
        >
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent w-[195px] text-white outline-none"
          />
          <span
            className="w-[36px] h-[33px] rounded-full bg-white p-2 cursor-pointer
        flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="fas search"
              style={{ color: "rgba(47, 47, 47, 1)" }}
            ></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </>
  );
}
