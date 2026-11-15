import { NiimbotAbstractClient,   } from "./abstract_client";
import { NiimbotBluetoothClient } from "./bluetooth_impl";
import { NiimbotSerialClient } from "./serial_impl";
import { NiimbotVirtualClient } from "./virtual_impl";

/** Client type for {@link instantiateClient} */
export type NiimbotClientType = "bluetooth" | "serial" | "virtual";

const clientFactories: Record<NiimbotClientType, () => NiimbotAbstractClient> = {
  "bluetooth": () => new NiimbotBluetoothClient(),
  "serial": () => new NiimbotSerialClient(),
  "virtual": () => new NiimbotVirtualClient(),
};

/** Create new client instance */
export const instantiateClient = (t: NiimbotClientType): NiimbotAbstractClient => {
  const client = clientFactories[t]();
  if (client !== undefined) {
    return client;
  }
  throw new Error("Invalid client type");
};

export {
  NiimbotAbstractClient,
  NiimbotBluetoothClient,
  NiimbotSerialClient,
  NiimbotVirtualClient,
};

export {ConnectionInfo, NIIMBOT_CLIENT_DEFAULTS, createPrinterInfo} from "./abstract_client";
export {NiimbotBluetoothClientConnectOptions} from "./bluetooth_impl";
export {NiimbotSerialClientConnectOptions} from "./serial_impl";
