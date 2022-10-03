import { createContext } from "react";

import { IContextLocation } from "../../interfaces/Context/IContextLocation";

export const LocationsContext = createContext<IContextLocation>({} as IContextLocation);
