import axios, { AxiosError, AxiosResponse } from "axios";
import { Application } from "../../Application";
import { AjaxInterface } from "../Interface/Ajax";

export class Ajax {
    public constructor(options: AjaxInterface) {
        const ajaxService = Application.getContainer().get('AjaxService');

        return new Promise<AxiosResponse>((resolve, reject) => {
            (async () => {
                try {
                    if (options.overlayer) {
                        preRequest();
                    }

                    const response = await axios.post(
                        ajaxService.buildUri(options.vendor, options.identifier),
                        options.formData ?? null
                    );

                    resolve(response as AxiosResponse);
                } catch (errors) {
                    reject(errors as AxiosError);
                } finally {
                    if (options.overlayer) {
                        postRequest();
                    }
                }
            })();
        });
    }
}
