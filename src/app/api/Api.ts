import { ApiServiceManager, createRequest } from "./ApiServiceManager";
import { UserConfig } from "../routesConfig/UserConfig";
import { ICareersBody, ICareersResponse } from "./Interfaces";

const defaultProvide = () => UserConfig.getToken();
const defaultUpdater = (token: string) => UserConfig.setToken(token);

export const signIn: (data: FormData) => Promise<any[]> = (data: FormData) => {
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