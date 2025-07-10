// Entity Object: "Language" (model domain)
export class Language {
    private id: number;
    private name: string;
    private code: string;
    private flag: string;

    constructor(id: number, name: string, code: string, flag: string) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.flag = flag;
    }

    getId(): number { return this.id; }
    getName(): string { return this.name; }
    getCode(): string { return this.code; }
    getFlag(): string { return this.flag; }
}