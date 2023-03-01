import { HeaderSection } from "../components/header.component";
import { InputSection } from "../components/input.component";
import { OutputSection } from "../components/output.component";

export function MainPage(params) {
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] p-5 flex flex-col">
      <HeaderSection />
      <InputSection />
    </div>
  );
}
