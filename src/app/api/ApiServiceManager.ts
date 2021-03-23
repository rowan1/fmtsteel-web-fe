import axios from 'axios';
export class ApiServiceManager{
    // baseUrl = appConfig.baseUrl;
    baseUrl="http://localhost:3001/";
    getUrl = () => this.baseUrl + this.path;
    constructor(public readonly path: string,
        public readonly method: "POST" | "GET" | "PUT" | "DELETE",
        public tokenProvider?: () => string | null,
        public tokenUpdater?: (token: string) => any) {
    }
}
export const createRequest: <TInput, TOutput>(apiServiceManager: ApiServiceManager,
    inputData: any) => Promise<TOutput> =
    <TInput, TOutput>(apiServiceManager: ApiServiceManager, inputData: any) => {
                
        const url = apiServiceManager.getUrl();
        const method = apiServiceManager.method;
        const headers = new Headers();
        const tokenUpdater = apiServiceManager.tokenUpdater;
        const tokenProvider = apiServiceManager.tokenProvider;
        const token = tokenProvider && tokenProvider();

        headers.append('Access-Control-Allow-Origin','*')
        headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS')
        headers.append('Referrer-Policy', "origin")
        if (token) {
            headers.append("authorization", "Bearer " + token);
        }
        
        let body: string | FormData | undefined = inputData && JSON.stringify(inputData);
        if (inputData instanceof FormData) {
            body = inputData;
        } else {
            headers.append("Content-Type", "application/json; charset=utf-8");
        }
        
        return new Promise((resolve, reject) => {
            const options = {
                method: method,
                url: url,
                data: body,
                headers,
                transformResponse: (r: any): any => r.data
              }
            axios(options).then(
                (response) => {
                    console.log(response);
                    // const newToken = response.headers.get("newToken");
                    // newToken && tokenUpdater && tokenUpdater(newToken);
                    // let json = await response.json()

                    let data = JSON.parse(response.request.response)
                    resolve(data);

                }).catch((error) => {
                    reject(error);
                });
        });
    }
