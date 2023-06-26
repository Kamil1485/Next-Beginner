import ClientUseSearchParams from "@/app/client-use-search-params/page";
const Use = ({ searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <ClientUseSearchParams />
    </div>
  );
};
export default Use;
