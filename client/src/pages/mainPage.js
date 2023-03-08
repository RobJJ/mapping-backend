import { HeaderSection } from "../components/header.component";
import { InputOutputComponent } from "../components/parent-components/input-output.component";
import {
  useUniqueYears,
  useUniqueRegions,
  useUniqueProvinces,
  useUniqueDistricts,
} from "../graphql/graphql.hooks";

export function MainPage(params) {
  // can pull this into cache at the load in
  // const { data, loading, error } = useUniqueYears();
  // const { data, loading, error } = useUniqueRegions();
  // const { data, loading, error } = useUniqueProvinces();
  const { data, loading, error } = useUniqueDistricts();

  return (
    <div className="w-screen h-screen bg-[#f5f5f5] p-5 flex flex-col">
      <HeaderSection />
      <InputOutputComponent />
    </div>
  );
}
