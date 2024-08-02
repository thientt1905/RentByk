import MainContent from "../maincontent/main";
import SearchInput from "./searchInput";

export interface IContentProps {}

export default function Content(props: IContentProps) {
  return (
    <>
      <div className="p-6 ml-24 w-[50%]">
        <SearchInput />
        <MainContent />
      </div>
    </>
  );
}
