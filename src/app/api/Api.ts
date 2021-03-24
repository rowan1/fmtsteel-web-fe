import { ApiServiceManager, createRequest } from "./ApiServiceManager";
import { UserConfig } from "../routesConfig/UserConfig";
import { ICareersResponse, IContactResponse, IServicesResponse, IServicesBody, ILoginResponse } from "./Interfaces";

const defaultProvide = () => UserConfig.getToken();
const defaultUpdater = (token: string) => UserConfig.setToken(token);

export const signIn: (data: FormData) => Promise<ILoginResponse> = (data: FormData) => {
  let descriptor = new ApiServiceManager(
    "users/signin",
    "POST",
    defaultProvide,
    defaultUpdater
  );
  return createRequest(descriptor, data);
}

export const apply: (data: FormData) => Promise<any[]> = (data: FormData) => {
  let descriptor = new ApiServiceManager(
    "careers",
    "POST",
    defaultProvide,
    defaultUpdater
  );
  return createRequest(descriptor, data);
}

export const fetchCareers: () => Promise<ICareersResponse> = () => {
  let descriptor = new ApiServiceManager(
    "careers",
    "GET",
    defaultProvide,
    defaultUpdater
  );
  return createRequest(descriptor, undefined);
}

export const fetchContacts=():Promise<IContactResponse>=>{
  let descriptor = new ApiServiceManager(
    "contacts",
    "GET",
    defaultProvide,
    defaultUpdater
  );
  return createRequest(descriptor, undefined);
}
export const saveContacts=(data: FormData):Promise<IContactResponse>=>{
  let descriptor = new ApiServiceManager(
    "contacts",
    "POST",
    defaultProvide,
    defaultUpdater
  );
  return createRequest(descriptor, data);
}

export const fetchServices=():Promise<IServicesResponse>=>{
  let descriptor = new ApiServiceManager(
    "services",
    "GET",
    defaultProvide,
    defaultUpdater
  );
  return createRequest(descriptor, undefined);
}
export const saveServices=(data:FormData):Promise<IServicesResponse>=>{
  let descriptor = new ApiServiceManager(
    "services",
    "POST",
    defaultProvide,
    defaultUpdater
  );
  return createRequest(descriptor, data);
}