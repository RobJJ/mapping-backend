import { useState } from "react";
import { InputSection } from "../child-components/input.component";
import { OutputSection } from "../child-components/output.component";

export function InputOutputComponent(params) {
  const [passedFilterOptions, setPassedFilterOptions] = useState({});

  return (
    <div>
      <InputSection setFilterOptions={setPassedFilterOptions} />
      <OutputSection filterOptions={passedFilterOptions} />
    </div>
  );
}
