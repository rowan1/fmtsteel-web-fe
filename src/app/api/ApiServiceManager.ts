import axios from 'axios';
export const BASE_URL="http://fmtsteel.com/be/";
// export const BASE_URL="http://localhost:3001/";

export class ApiServiceManager{
    // baseUrl = appConfig.baseUrl;
    getUrl = () => BASE_URL + this.path;
    constructor(public readonly path: string,
        public readonly method: "POST" | "GET" | "PUT" | "DELETE",
        public tokenProvider?: () => string | null,
        public tokenUpdater?: (token: string) => any) {
    }
}
export const fetchRequest: <TInput, TOutput>(apiServiceManager: ApiServiceManager,
    inputData: any) => Promise<TOutput> =
    <TInput, TOutput>(apiServiceManager: ApiServiceManager, inputData: any) => {
                
        const url = apiServiceManager.getUrl();
        const method = apiServiceManager.method;
        const headers = new Headers();
        const tokenUpdater = apiServiceManager.tokenUpdater;
        const tokenProvider = apiServiceManager.tokenProvider;
        const token = tokenProvider && tokenProvider();
        // headers.append('Access-Control-Allow-Origin','*')
        // headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS')
        // headers.append('Referrer-Policy', "origin")
        headers.append("Content-Type", "application/json; charset=utf-8");
        if (token) {
            headers.append("authorization", "Bearer " + token);
        }
        
        let body: string | FormData | undefined = inputData && JSON.stringify(inputData);
        if (inputData instanceof FormData) {
            body = inputData;
        }
        
        return new Promise((resolve, reject) => {
            fetch(url, { headers, body, method })
            .then(
                async(response) => {
                    let json = undefined
                    try {
                        json = await response.json()
                    } catch (error) {
                        console.error(error)
                    }
                        
                    resolve(json);

                }).catch((error) => {
                    reject(error);
                });
        });
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
            // headers.append('Access-Control-Allow-Origin','*')
            // headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS')
            // headers.append('Referrer-Policy', "origin")
            headers.append("Content-Type", "application/json; charset=utf-8");
            if (token) {
                headers.append("authorization", "Bearer " + token);
            }
            
            let body: string | FormData | undefined = inputData && JSON.stringify(inputData);
            if (inputData instanceof FormData) {
                body = inputData;
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
                        let data = JSON.parse(response.request.response)
                        resolve(data);
    
                    }).catch((error) => {
                        reject(error);
                    });
            });
        }
