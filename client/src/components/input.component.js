import { useState } from "react";

import { OutputSection } from "./output.component";

const defaultLocalOptions = {
  YEAR: "",
  REGION_ID: "",
  PROVINCE_ID: "",
  DISTRICT_ID: "",
  POP_ZONE: "",
};

export function InputSection() {
  const [localOptions, setLocalOptions] = useState(defaultLocalOptions);
  const [passedFilterOptions, setPassedFilterOptions] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Filters submitted");
    setPassedFilterOptions({ ...localOptions });
    setLocalOptions(defaultLocalOptions);
  };

  return (
    <div className="flex flex-col">
      <form className="w-full bg-green-200 p-2" onSubmit={handleSubmit}>
        <div className="bg-green-300 flex justify-evenly text-xl pt-5 pb-5">
          <div className="flex flex-col text-center">
            <label className="underline pb-2">YEAR</label>
            <input
              type="text"
              className="text-center p-1 rounded-lg"
              value={localOptions.YEAR}
              onChange={(e) =>
                setLocalOptions({ ...localOptions, YEAR: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col text-center">
            <label className="underline pb-2">REGION ID</label>
            <input
              type="text"
              className="text-center p-1 rounded-lg"
              value={localOptions.REGION}
              onChange={(e) =>
                setLocalOptions({ ...localOptions, REGION: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col text-center">
            <label className="underline pb-2">PROVINCE ID</label>
            <input
              type="text"
              className="text-center p-1 rounded-lg"
              value={localOptions.PROVINCE_ID}
              onChange={(e) =>
                setLocalOptions({
                  ...localOptions,
                  PROVINCE_ID: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col text-center">
            <label className="underline pb-2">DISTRICT ID</label>
            <input
              type="text"
              className="text-center p-1 rounded-lg"
              value={localOptions.DISTRICT_ID}
              onChange={(e) =>
                setLocalOptions({
                  ...localOptions,
                  DISTRICT_ID: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col text-center">
            <label className="underline pb-2">POP-ZONE</label>
            <input
              type="text"
              className="text-center p-1 rounded-lg"
              value={localOptions.POP_ZONE}
              onChange={(e) =>
                setLocalOptions({ ...localOptions, POP_ZONE: e.target.value })
              }
            />
          </div>
        </div>
        <div className="bg-green-300 text-center text-xl pb-5">
          <button type="submit" className="bg-gray-200 py-1 px-4 rounded-lg">
            filter database
          </button>
        </div>
      </form>
      <OutputSection filterOptions={passedFilterOptions} />
    </div>
  );
}
