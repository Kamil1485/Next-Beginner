import ClientUseSearchParams from "../client-use-search-params/page";

const UseSearchParamsPage = ({ searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <ClientUseSearchParams />
    </div>
  );
};
export default UseSearchParamsPage;
