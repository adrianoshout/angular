export class BaseUrls {

    public static get base(): string {
        return 'http://localhost:8080/';
    }

    public static get baseLogin(): string {
        return this.base + 'login';
    }

    public static get baseCategoria(): string {
        return this.base + 'categorias';
    }
}
