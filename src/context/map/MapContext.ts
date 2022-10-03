import { createContext } from "react";

import { IContextMap } from "../../interfaces/Context/IContextMap";

export const MapContext = createContext<IContextMap>({} as IContextMap);
