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

    public static get baseTermosDeUso(): string {
        return this.base + 'terms_use';
    }

    public static get basePoliticaDePrivacidade(): string {
        return this.base + 'privacy_policy';
    }
}
