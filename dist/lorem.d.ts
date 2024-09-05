declare const plugin: {
    name: string;
    directives: {
        name: string;
        doc: string;
        alias: string[];
        arg: {
            type: NumberConstructor;
            doc: string;
        };
        options: {};
        run(data: any): {
            type: "paragraph";
            children: {
                type: string;
                value: string;
            }[];
        }[];
    }[];
};

export { plugin as default };
