import { HeaderSection } from "../components/header.component";
import { InputOutputComponent } from "../components/parent-components/input-output.component";
import { useUniqueYears } from "../graphql/graphql.hooks";

export function MainPage(params) {
  const { data, loading, error } = useUniqueYears();
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] p-5 flex flex-col">
      <HeaderSection />
      <InputOutputComponent />
    </div>
  );
}
