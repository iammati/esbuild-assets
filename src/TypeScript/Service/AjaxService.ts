export class AjaxService {
    public buildUri = (vendor: String, ajax: String, params: object | null = null) => {
        let uri = `/ajax?vendor=${vendor}&ajax=${ajax}`;

        if (params === null) {
            return uri;
        }

        for (const key in params) {
            uri += `&${key}=` + encodeURIComponent(params[key]);
        }

        return uri;
    };
}
